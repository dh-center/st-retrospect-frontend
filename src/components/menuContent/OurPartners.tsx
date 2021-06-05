import { ReactElement } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import LibraryLogo from '../../images/library.png';
import MuseumDostoevskyLogo from '../../images/museum-dostoevsky.png';
import MuseumHistoryLogo from '../../images/museum-history.png';
import MuseumReligionLogo from '../../images/museum-religion.png';
import ProzhitoLogo from '../../images/prozhito.png';
import InstituteLogo from '../../images/institute.png';
import Title from './Title';

const OurPartnersLogosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 0 16% 0;

  margin-top: auto;
  margin-bottom: auto;
  margin-left: -28px;
`;

const OurParentsLogo = styled.div`
  background-color: var(--color-light-gray);
  background-repeat: no-repeat;
  background-position: center;
  width: 220px;
  height: 205px;

  margin-left: 28px;
  margin-bottom: 44px;

  :nth-child(1) {
    background-image: url("${LibraryLogo}");
  }

  :nth-child(2) {
    background-image: url("${MuseumDostoevskyLogo}");
  }

  :nth-child(3) {
    background-image: url("${MuseumHistoryLogo}");
  }

  :nth-child(4) {
    background-image: url("${MuseumReligionLogo}");
  }

  :nth-child(5) {
    background-image: url("${ProzhitoLogo}");
  }

  :nth-child(6) {
    background-image: url("${InstituteLogo}");
  }
`;

/**
 * Component for displaying content about our partners
 */
export default function OurPartners(): ReactElement {
  const { t } = useTranslation();

  return (
    <>
      <Title>{t('partners.title')}</Title>
      <OurPartnersLogosWrapper>
        <OurParentsLogo/>
        <OurParentsLogo/>
        <OurParentsLogo/>
        <OurParentsLogo/>
        <OurParentsLogo/>
        <OurParentsLogo/>
      </OurPartnersLogosWrapper>
    </>
  );
}
