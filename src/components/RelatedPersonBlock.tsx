import { ReactElement } from 'react';
import styled from 'styled-components';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { RelatedPersonBlock_person$key } from './__generated__/RelatedPersonBlock_person.graphql';
import abbreviatePersonName from '../lib/abbreviatePersonName';
import WithClassName from '../interfaces/WithClassName';
import { sansSerifLight } from '../styles/FontStyles';
import { Link } from 'react-router-dom';
import { ReactComponent as NoPhoto } from '../assets/person-no-photo.svg';

/**
 * Props of component
 */
interface RelatedPersonBlockProps extends WithClassName {
  /**
   * Person fragment for displaying
   */
  person: RelatedPersonBlock_person$key;
}

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;

  padding-right: 12px;

  border: .5px solid var(--color-blue);
  border-radius: 2px;

  overflow: hidden;

  ${sansSerifLight};
  text-decoration: none;
  color: var(--color-dark-gray);

  &:hover {
    cursor: pointer;
    background: var(--color-light-blue);
  }
`;

/**
 * Props of photo block
 */
interface PhotoProps {
  /**
   * Source of photo
   */
  src: string;
}

const Photo = styled.div<PhotoProps>`
  width: 29px;
  height: 29px;

  background-image: url("${ props => props.src }");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  margin-right: 12px;
`;

const NoPhotoIcon = styled(NoPhoto)`
  margin-right: 12px;
`;

/**
 * Block for related person with abbreviated name and photo
 *
 * @param props - props of component
 */
export default function RelatedPersonBlock(props: RelatedPersonBlockProps): ReactElement {
  const data = useFragment(
    graphql`
      fragment RelatedPersonBlock_person on Person {
        id
        lastName
        firstName
        patronymic
        mainPhotoLink
      }
    `,
    props.person
  );

  const abbreviatedName = abbreviatePersonName(data.lastName, data.firstName, data.patronymic);

  return (
    <Wrapper className={props.className} to={`/person/${data.id}`}>
      {data.mainPhotoLink ? <Photo src={data.mainPhotoLink}/> : <NoPhotoIcon/>}
      {abbreviatedName}
    </Wrapper>
  );
}
