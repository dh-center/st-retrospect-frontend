import { ReactElement } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useLazyLoadQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { LocationInstanceCardQuery } from './__generated__/LocationInstanceCardQuery.graphql';
import {
  CardWrapper, Description,
  GoingBackButton,
  Image,
  InformationWrapper,
  Name
} from './cards';
import RelatedPersonBlock from './RelatedPersonBlock';
import { FragmentRefs } from 'relay-runtime';
import styled from 'styled-components';
import { sansSerifLight, sansSerifRegular } from '../styles/FontStyles';
import MapPin from '../assets/map-pin.svg';
import { useTranslation } from 'react-i18next';

/**
 * Parameters of '/location-instance' route
 */
interface LocationInstanceRouteParameters {
  /**
   * Id of current location instance
   */
  locationInstanceId: string;
}

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
  margin-bottom: 14px;

  & ${StyledRelatedPersonBlock} {
    margin-right: 12px;
    margin-top: 12px;
  }
`;

const InformationWithTitle = styled.div`
  display: flex;

  margin-bottom: 12px;

  font-size: 16px;
  color: var(--color-dark-gray);
`;

const InformationTitle = styled.div`
  margin-right: 6px;

  ${ sansSerifLight };
`;

const InformationContent = styled.div`
  ${ sansSerifRegular };
`;

/**
 * Card of location instance with information about it
 */
export default function LocationInstanceCard(): ReactElement {
  const { locationInstanceId } = useParams<LocationInstanceRouteParameters>();
  const { t } = useTranslation();
  const data = useLazyLoadQuery<LocationInstanceCardQuery>(
    graphql`
      query LocationInstanceCardQuery($id: GlobalId!) {
        locationInstance(id: $id) {
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
        }
      }
    `,
    {
      id: locationInstanceId,
    }
  );

  if (!data.locationInstance) {
    return (
      <Redirect to="/"/>
    );
  }

  /**
   * Get object of unique relation persons
   * Key is an ID of person
   * Value is a person object
   */
  const uniquePersons = data.locationInstance.relations.reduce((acc, value) => {
    if (value.person) {
      acc[value.person.id] = value.person;
    }

    return acc;
  }, {} as {[key: string]: {
      id: string,
      ' $fragmentRefs': FragmentRefs<'RelatedPersonBlock_person'>
    }}
  );

  return (
    <CardWrapper>
      <GoingBackButton to="/"/>
      <Image src={data.locationInstance.mainPhotoLink ? data.locationInstance.mainPhotoLink : 'https://picsum.photos/seed/picsum/200/100'}/>
      <InformationWrapper>
        <Name>{data.locationInstance.name}</Name>
        {data.locationInstance.location.addresses && <Address>{data.locationInstance.location.addresses[0].address}</Address>}
        <RelatedPersonsWrapper>
          {Object.values(uniquePersons).map((person, index) => {
            return person && <StyledRelatedPersonBlock key={index} person={person}/>;
          })}
        </RelatedPersonsWrapper>
        <Description>{data.locationInstance.description}</Description>
        { data.locationInstance.architects?.length &&
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
