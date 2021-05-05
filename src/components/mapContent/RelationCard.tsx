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

const Wrapper = styled.div`
  background: var(--color-white);
  border-radius: 2px;
  box-shadow: var(--shadow-medium);

  padding: 24px 16px;

  width: 372px;
`;

const Title = styled.div`
  font-size: 16px;
`;

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
        locationInstance {
          name
        }
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
    <Wrapper>
      <Title>{data.locationInstance.name}</Title>
      <Delimiter/>
      <RelatedPersonBlock person={data.person}/>
      <Description>{data.quote}</Description>
    </Wrapper>
  );
}
