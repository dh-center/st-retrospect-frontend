import { ReactElement } from 'react';
import RelationCard from './RelationCard';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { RelationsPopup_relations$key } from './__generated__/RelationsPopup_relations.graphql';
import RelayEnvironmentContext from '../../contexts/RelayEnvironmentContext';

interface RelationsPopupProps {
  relation: RelationsPopup_relations$key;
}

/**
 * @param props - props of component
 */
export default function RelationsPopup(props: RelationsPopupProps): ReactElement {
  const data = useFragment(
    graphql`
      fragment RelationsPopup_relations on LocationInstance {
        relations {
          ...RelationCard_relation
        }
      }
    `,
    props.relation
  );

  return (
    <div>
      {
        data.relations.map((relation, index) => <RelationCard key={index} relation={relation}/>)
      }
    </div>
  );
}
