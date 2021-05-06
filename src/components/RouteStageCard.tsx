import { ReactElement, ReactNodeArray } from 'react';
import { QuestBlock } from '../interfaces/QuestBlocks';
import LocationInstanceBlock from './RouteBlocks/LocationInstanceBlock';
import styled from 'styled-components';
import { sansSerifLight } from '../styles/FontStyles';

/**
 * Props of component
 */
interface RouteStageCardProps {
  /**
   * Content of displaying route stage
   */
  routeStageBlocks: QuestBlock[];
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  margin: 0 -16px;

  overflow-y: hidden;
`;

const ParagraphsWrapper = styled.div`
  overflow-y: auto;
`;

const Paragraph = styled.div`
  padding: 0 16px;
  margin-bottom: 16px;

  ${ sansSerifLight };
  font-size: 16px;
`;

/**
 * Card of stage in route
 * Displays location instance and texts for it
 *
 * @param props - props of component
 */
export default function RouteStageCard(props: RouteStageCardProps): ReactElement {
  const locationBlocks: ReactNodeArray = [];
  const textBlocks: ReactNodeArray = [];

  props.routeStageBlocks.forEach((block, index) => {
    switch (block.type) {
      case 'locationInstance':
        locationBlocks.push(<LocationInstanceBlock key={index} locationInstanceId={block.data.locationInstanceId}/>);

        return;
      case 'paragraph':
        textBlocks.push(<Paragraph key={index}>{block.data.text}</Paragraph>);

        return;
    }
  });

  return (
    <Wrapper>
      { locationBlocks }
      <ParagraphsWrapper>
        { textBlocks }
      </ParagraphsWrapper>
    </Wrapper>
  );
}
