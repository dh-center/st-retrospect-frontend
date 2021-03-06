import { ReactElement, useEffect, useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLazyLoadQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { PersonCardQuery } from './__generated__/PersonCardQuery.graphql';
import styled from 'styled-components';
import {
  CardWrapper,
  Description,
  GoingBackButton,
  InformationContent,
  InformationTitle,
  InformationWithTitle
} from './cards';
import Image from './lib/Image';
import { sansSerifLight } from '../styles/FontStyles';
import { Delimiter } from './lists';
import { PersonRouteParameters } from '../interfaces/routeParameters';
import useCurrentMapContent from '../contexts/CurrentMapContentContext';

const CardWrapperWithScroll = styled(CardWrapper)`
  padding: 40px 16px;

  overflow-y: auto;
`;

const HeaderWrapper = styled.div`
  display: flex;

  margin-bottom: 12px;
  font-size: 18px;
`;

const Photo = styled(Image)`
  width: 120px;
  height: 120px;

  border-radius: 2px;

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

const WikiLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

/**
 * Card of person with information about it
 */
export default function PersonCard(): ReactElement {
  const { personId } = useParams<PersonRouteParameters>();
  const { t } = useTranslation();
  const { setCurrentLocations, setCurrentRelationIds } = useCurrentMapContent();

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
          relations {
            id
            locationInstance {
              ...LocationInstanceRelationsPopup_data
            }
          }
        }
      }
    `,
    {
      id: personId,
    }
  );

  useEffect(() => {
    if (!data.person) {
      return;
    }

    setCurrentLocations(data.person.relations.map(rel => rel.locationInstance));
  }, [ data.person?.relations ]);

  const relationIds = useMemo(
    () => data.person?.relations.map(relation => relation.id),
    [ data.person?.relations ]
  );

  useEffect(() => {
    setCurrentRelationIds(relationIds || []);
  }, [ relationIds ]);

  if (!data.person) {
    return (
      <Redirect to="/"/>
    );
  }

  return (
    <CardWrapperWithScroll>
      <GoingBackButton/>
      <HeaderWrapper>
        <Photo
          src={data.person.mainPhotoLink}
          type={'person'}
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
      { data.person.wikiLink &&
        <InformationWithTitle>
          <InformationTitle>
            {t('person.source')}:
          </InformationTitle>
          <InformationContent>
            <WikiLink href={data.person.wikiLink} target="_blank" rel="noreferrer">{t('wikipedia')}</WikiLink>
          </InformationContent>
        </InformationWithTitle>
      }
    </CardWrapperWithScroll>
  );
}
