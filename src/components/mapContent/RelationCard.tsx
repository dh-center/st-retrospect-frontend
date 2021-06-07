import { ReactElement } from 'react';
import styled from 'styled-components';
import { sansSerifLight } from '../../styles/FontStyles';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { RelationCard_relation$key } from './__generated__/RelationCard_relation.graphql';
import RelatedPersonBlock from '../RelatedPersonBlock';
import { useTranslation } from 'react-i18next';
import getRelationTypeCircleById from '../../lib/getRelationTypeCircleById';

/**
 * Props of component
 */
interface RelationCardProps {
  /**
   * Relation fragment ref
   */
  relation: RelationCard_relation$key;
}

const InformationAboutRelation = styled.div`
  display: flex;
  align-items: center;

  margin-top: 8px;
  margin-bottom: 12px;
`;

const RelationTypeCircleWrapper = styled.div`
  width: 24px;
  height: 24px;

  margin-right: 6px;

  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Description = styled.div`
  ${ sansSerifLight };
  font-size: 14px;
  overflow-wrap: break-word;
`;

/**
 * Relation card in popup LocationInstanceRelations
 *
 * @param props - props of component
 */
export default function RelationCard(props: RelationCardProps): ReactElement {
  const { t } = useTranslation();
  const data = useFragment(
    graphql`
      fragment RelationCard_relation on Relation {
        person {
          ...RelatedPersonBlock_person
        }
        startDate
        endDate
        quote
        relationType {
          id
          name
        }
      }
    `,
    props.relation
  );

  const RelationTypeCircle = getRelationTypeCircleById(data.relationType.id);

  return (
    <>
      <RelatedPersonBlock person={data.person}/>
      <InformationAboutRelation>
        { RelationTypeCircle &&
          <RelationTypeCircleWrapper title={data.relationType.name}>
            <RelationTypeCircle/>
          </RelationTypeCircleWrapper>
        }
        {`${data.startDate || '...'} — ${data.endDate || '...'} ${t('yearsAbbreviated')}`}
      </InformationAboutRelation>
      <Description>{data.quote}</Description>
    </>
  );
}
