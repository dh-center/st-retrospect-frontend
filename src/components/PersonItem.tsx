import { ReactElement } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import { PersonItem_person$key } from './__generated__/PersonItem_person.graphql';
import { Item, Image, InformationWrapper } from './lists';
import styled from 'styled-components';

/**
 * Props of component
 */
interface PersonItemProps {
  /**
   * Person fragment ref for displaying
   */
  person: PersonItem_person$key;
}

const ItemWithBlueBorder = styled(Item)`
  border: var(--border-blue);
`;

const StyledInformationWrapper = styled(InformationWrapper)`
  padding: 20px 12px;
`;

/**
 * Person item in lists
 *
 * @param props - props of component
 */
export default function PersonItem(props: PersonItemProps): ReactElement {
  const data = useFragment(
    graphql`
      fragment PersonItem_person on Person {
        id
        lastName
        firstName
        patronymic
        mainPhotoLink
      }
    `,
    props.person
  );

  return (
    <ItemWithBlueBorder to={`/person/${data.id}`}>
      <Image src={data.mainPhotoLink ? data.mainPhotoLink : 'https://picsum.photos/seed/picsum/100/200'}/>
      <StyledInformationWrapper>
        {`${data.lastName} ${data.firstName} ${data.patronymic}`}
      </StyledInformationWrapper>
    </ItemWithBlueBorder>
  );
}
