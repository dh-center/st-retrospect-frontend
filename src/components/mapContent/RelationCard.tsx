import { ReactElement } from 'react';
import styled from 'styled-components';
import Delimiter  from '../utils/Delimiter';
import { sansSerifLight } from '../../styles/FontStyles';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { RelationCard_relation$key } from './__generated__/RelationCard_relation.graphql';
import RelatedPersonBlock from '../RelatedPersonBlock';
import { useTranslation } from 'react-i18next';

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
  margin-top: 8px;
  margin-bottom: 12px;
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
      }
    `,
    props.relation
  );

  return (
    <>
      <Delimiter/>
      <RelatedPersonBlock person={data.person}/>
      <InformationAboutRelation>{`${data.startDate || '...'} — ${data.endDate || '...'} ${t('yearsAbbreviated')}`}</InformationAboutRelation>
      <Description>{data.quote}</Description>
    </>
  );
}
