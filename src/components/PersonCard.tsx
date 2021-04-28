import { ReactElement } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLazyLoadQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { PersonCardQuery } from './__generated__/PersonCardQuery.graphql';
import styled from 'styled-components';
import { CardWrapper, Description, GoingBackButton } from './cards';
import { sansSerifLight } from '../styles/FontStyles';
import { Delimiter } from './lists';

/**
 * Parameters of '/person' route
 */
interface PersonRouteParameters {
  /**
   * Id of current person
   */
  personId: string;
}

const CardWrapperWithScroll = styled(CardWrapper)`
  padding: 40px 16px;

  overflow-y: auto;
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

const HeaderWrapper = styled.div`
  margin-bottom: 12px;
  font-size: 18px;
`;

const Photo = styled.div<PhotoProps>`
  width: 120px;
  height: 120px;

  border-radius: 2px;
  background-image: url("${ props => props.src }");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  float: left;
  margin-right: 12px;
`;

const LastName = styled.div`
  font-size: 18px;

  margin-bottom: 6px;
`;

const FirstNameWithPatronymic = styled.div`
  font-size: 16px;
  ${ sansSerifLight };
`;

const LivingYears = styled.div`
  font-size: 14px;
  ${ sansSerifLight };
`;

/**
 * Card of person with information about it
 */
export default function PersonCard(): ReactElement {
  const { personId } = useParams<PersonRouteParameters>();
  const { t } = useTranslation();
  const data = useLazyLoadQuery<PersonCardQuery>(
    graphql`
      query PersonCardQuery($id: GlobalId!) {
        person(id: $id) {
          lastName
          firstName
          patronymic
          mainPhotoLink
          birthDate
          deathDate
          description
          wikiLink
        }
      }
    `,
    {
      id: personId,
    }
  );

  if (!data.person) {
    return (
      <Redirect to="/"/>
    );
  }

  console.log(t);

  return (
    <CardWrapperWithScroll>
      <GoingBackButton/>
      <HeaderWrapper>
        <Photo
          src={data.person.mainPhotoLink || 'https://picsum.photos/seed/picsum/200/200'}
        />
        <div>
          <LastName>{ data.person.lastName }</LastName>
          <FirstNameWithPatronymic>
            { `${data.person.firstName} ${data.person.patronymic}` }
          </FirstNameWithPatronymic>
          <Delimiter/>
          <LivingYears>
            {`${data.person.birthDate || '...'} — ${data.person.deathDate || '...'} ${t('yearsAbbreviated')}`}
          </LivingYears>
        </div>
      </HeaderWrapper>
      <Description>
        {data.person.description}
      </Description>

    </CardWrapperWithScroll>
  );
}
