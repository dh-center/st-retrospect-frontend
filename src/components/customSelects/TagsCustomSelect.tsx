import WithClassName from '../../interfaces/WithClassName';
import CustomSelect  from './CustomSelect';
import { ReactElement } from 'react';
import { useLazyLoadQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { TagsCustomSelectQuery } from './__generated__/TagsCustomSelectQuery.graphql';

/**
 * Props of component
 */
interface TagsCustomSelectProps extends WithClassName {
  /**
   * onChange event handler
   *
   * @param values - all selected values ids
   */
  onChange?: (values: string[]) => void;

  /**
   * Array of selected items
   */
  selectedIds: string[];
}

/**
 * Custom select with all tags
 *
 * @param props - props of component
 */
export default function TagsCustomSelect(props: TagsCustomSelectProps): ReactElement {
  const data = useLazyLoadQuery<TagsCustomSelectQuery>(
    graphql`
      query TagsCustomSelectQuery {
        tags {
          edges {
            node {
              id
              value
            }
          }
        }
      }
    `,
    {}
  );

  return (
    <CustomSelect
      {...props}
      values={data.tags.edges.map(edge => edge.node)}
    />
  );
}
