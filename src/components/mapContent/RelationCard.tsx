import { ReactElement } from 'react';
import styled from 'styled-components';
import Delimiter  from '../utils/Delimiter';
import { sansSerifLight } from '../../styles/FontStyles';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { RelationCard_relation$key } from './__generated__/RelationCard_relation.graphql';
import RelatedPersonBlock from '../RelatedPersonBlock';

interface RelationCardProps {
  relation: RelationCard_relation$key;
}


const Description = styled.div`
  ${ sansSerifLight };
  font-size: 14px;
`;

/**
 * @param props - props of component
 */
export default function RelationCard(props: RelationCardProps): ReactElement {
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
      <Description>{data.quote}</Description>
    </>
  );
}
