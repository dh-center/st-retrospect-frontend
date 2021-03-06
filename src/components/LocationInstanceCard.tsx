import { ReactElement, useEffect, useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useLazyLoadQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { LocationInstanceCardQuery } from './__generated__/LocationInstanceCardQuery.graphql';
import {
  CardWrapper, Description,
  GoingBackButton,
  InformationContent,
  InformationTitle,
  InformationWithTitle,
  InformationWrapper,
  Name
} from './cards';
import { ImageInCard } from './lib/Image';
import RelatedPersonBlock from './RelatedPersonBlock';
import styled from 'styled-components';
import { sansSerifLight } from '../styles/FontStyles';
import MapPin from '../assets/map-pin.svg';
import { useTranslation } from 'react-i18next';
import { LocationInstanceRouteParameters } from '../interfaces/routeParameters';
import useCurrentMapContent from '../contexts/CurrentMapContentContext';

const Address = styled.div`
  margin-bottom: 14px;

  ${sansSerifLight};
  font-size: 14px;

  &::before {
    content: '';

    display: inline-block;
    width: 12px;
    height: 15px;
    margin-right: 6px;

    background-image: url("${MapPin}");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const StyledRelatedPersonBlock = styled(RelatedPersonBlock)``;

const RelatedPersonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: -12px;
  margin-right: -12px;
  margin-bottom: 14px;

  & ${StyledRelatedPersonBlock} {
    margin-right: 12px;
    margin-top: 12px;
  }
`;

/**
 * Card of location instance with information about it
 */
export default function LocationInstanceCard(): ReactElement {
  const { locationInstanceId } = useParams<LocationInstanceRouteParameters>();
  const { t } = useTranslation();
  const { setCurrentLocations, setCurrentRelationIds } = useCurrentMapContent();

  const data = useLazyLoadQuery<LocationInstanceCardQuery>(
    graphql`
      query LocationInstanceCardQuery($id: GlobalId!) {
        locationInstance(id: $id) {
          id
          mainPhotoLink
          name
          location {
            addresses {
              address
            }
          }
          relations {
            person {
              id
              ...RelatedPersonBlock_person
            }
          }
          description
          architects {
            lastName
            firstName
            patronymic
          }
          constructionDate
          demolitionDate
          wikiLink
          source
          ...LocationInstanceRelationsPopup_data
        }
      }
    `,
    {
      id: locationInstanceId,
    }
  );

  useEffect(() => {
    if (data.locationInstance) {
      setCurrentLocations([ data.locationInstance ]);
      setCurrentRelationIds([]);
    }
  }, [ data.locationInstance?.id ]);

  /**
   * Filter relations to get unique persons
   */
  const uniquePersons = useMemo(() => {
    if(!data.locationInstance) {
      return [];
    }

    return data.locationInstance.relations.filter(
      (element, index, arr) => index === arr.findIndex(e => e.person?.id === element.person?.id)
    );
  }, [ data ]);

  if (!data.locationInstance) {
    return (
      <Redirect to="/"/>
    );
  }

  return (
    <CardWrapper>
      <GoingBackButton/>
      <ImageInCard src={data.locationInstance.mainPhotoLink} type={'location'}/>
      <InformationWrapper>
        <Name>{data.locationInstance.name}</Name>
        {data.locationInstance.location.addresses && <Address>{data.locationInstance.location.addresses[0].address}</Address>}
        <RelatedPersonsWrapper>
          {
            uniquePersons.map((relation, index) =>
              relation.person && <StyledRelatedPersonBlock key={index} person={relation.person}/>
            )
          }
        </RelatedPersonsWrapper>
        <Description>{data.locationInstance.description}</Description>
        { data.locationInstance.architects?.length > 0 &&
          <InformationWithTitle>
            <InformationTitle>
              {t('locationInstance.architect')}:
            </InformationTitle>
            <InformationContent>
              {`${data.locationInstance.architects[0]?.lastName} ${data.locationInstance.architects[0]?.firstName} ${data.locationInstance.architects[0]?.patronymic}`}
            </InformationContent>
          </InformationWithTitle>
        }
        <InformationWithTitle>
          <InformationTitle>
            {t('locationInstance.dates')}:
          </InformationTitle>
          <InformationContent>
            {`${data.locationInstance.constructionDate || '...'} — ${data.locationInstance.demolitionDate || '...'} ${t('yearsAbbreviated')}`}
          </InformationContent>
        </InformationWithTitle>
        { data.locationInstance.source &&
          <InformationWithTitle>
            <InformationTitle>
              {t('locationInstance.source')}:
            </InformationTitle>
            <InformationContent>
              {data.locationInstance.source}
            </InformationContent>
          </InformationWithTitle>
        }
      </InformationWrapper>
    </CardWrapper>
  );
}
