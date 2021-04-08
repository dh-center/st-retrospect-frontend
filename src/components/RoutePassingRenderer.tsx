import { ReactElement, Suspense } from 'react';
import { Redirect, useParams, Link } from 'react-router-dom';
import { useLazyLoadQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { RoutePassingRendererQuery } from './__generated__/RoutePassingRendererQuery.graphql';
import { QuestBlock } from '../interfaces/QuestBlocks';
import RouteStageCard from './RouteStageCard';
import Loader from './Loader';
import styled from 'styled-components';
import { sansSerifLight } from '../styles/FontStyles';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left-second.svg';
import { useTranslation } from 'react-i18next';

const BottomPanel = styled.div`
  display: flex;
  align-items: center;

  flex-shrink: 0;
  height: 48px;

  ${ sansSerifLight };
  font-size: 14px;

  margin-top: auto;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
`;

const EndRouteButton = styled(Link)`
  padding-bottom: 3px;

  text-decoration: none;
  color: var(--color-gray);

  border-bottom: 1px solid var(--color-gray);
`;

const SquaredButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;

  margin-left: 24px;

  border-radius: 2px;
`;

const Arrow = styled(ArrowLeft)`
  height: 10px;
  width: 10px;
`;

const PreviousLocationButton = styled(SquaredButton)`
  color: var(--color-dark-gray);

  &:hover {
    background: var(--color-light-blue);
  }
`;

const NextLocationButton = styled(SquaredButton)`
  background: var(--color-blue);
  box-shadow: var(--shadow-base);

  color: var(--color-white);

  & ${Arrow} {
    transform: rotate(180deg);
  }
`;

/**
 * Renderer of route content
 */
export default function RoutePassingRenderer(): ReactElement {
  const { questId, currentLocationIndex } = useParams<{ currentLocationIndex: string, questId: string }>();
  const { t } = useTranslation();

  const data = useLazyLoadQuery<RoutePassingRendererQuery>(
    graphql`
      query RoutePassingRendererQuery($id: GlobalId!) {
        quest(id: $id) {
          data {
            blocks
          }
        }
      }
    `,
    {
      id: questId,
    }
  );

  if (!data.quest || !data.quest.data?.blocks) {
    return <Redirect to={`/route/${questId}`}/>;
  }

  const questDataBlocks = data.quest.data?.blocks as QuestBlock[];

  /**
   * Parse quest data to array of location with texts blocks
   */
  const locationBlocksWithTexts: QuestBlock[][] = [];
  let locationBlockWithTexts: QuestBlock[] = [];

  questDataBlocks.forEach(currentBlock => {
    if (
      (currentBlock.type === 'locationInstance' && locationBlockWithTexts.length === 0) ||
      currentBlock.type !== 'locationInstance'
    ) {
      locationBlockWithTexts.push(currentBlock);
    } else {
      locationBlocksWithTexts.push(locationBlockWithTexts);
      locationBlockWithTexts = [ currentBlock ];
    }
  });

  locationBlocksWithTexts.push(locationBlockWithTexts);

  if (+currentLocationIndex >= locationBlocksWithTexts.length) {
    return <Redirect to={`/route/${questId}/${locationBlocksWithTexts.length-1}`}/>;
  }

  if(+currentLocationIndex < 0) {
    return <Redirect to={`/route/${questId}/0`}/>;
  }

  return (
    <>
      <Suspense fallback={<Loader/>}>
        <RouteStageCard routeStageBlocks={locationBlocksWithTexts[+currentLocationIndex]}/>
      </Suspense>
      <BottomPanel>
        <div>
          { +currentLocationIndex + 1 }/{locationBlocksWithTexts.length}
        </div>
        <ButtonsWrapper>
          <EndRouteButton to={`/route/${questId}`}>
            { t('route.endRoute') }
          </EndRouteButton>
          { +currentLocationIndex !== 0 &&
            <PreviousLocationButton to={`/route/${questId}/${+currentLocationIndex - 1}`}>
              <Arrow/>
            </PreviousLocationButton>
          }
          { +currentLocationIndex + 1 !== locationBlocksWithTexts.length &&
            <NextLocationButton to={`/route/${questId}/${+currentLocationIndex + 1}`}>
              <Arrow/>
            </NextLocationButton>
          }
        </ButtonsWrapper>
      </BottomPanel>
    </>
  );
}
