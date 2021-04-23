import { ReactElement } from 'react';
import styled from 'styled-components';
import { sansSerifBold } from '../../styles/FontStyles';
import { useTranslation } from 'react-i18next';
import LibraryLogo from '../../images/library.png';
import MuseumDostoevskyLogo from '../../images/museum-dostoevsky.png';
import MuseumHistoryLogo from '../../images/museum-history.png';
import MuseumReligionLogo from '../../images/museum-religion.png';
import ProzhitoLogo from '../../images/prozhito.png';
import InstituteLogo from '../../images/institute.png';

const OurPartnersLogosWrapper = styled.div`
  padding: 10% 15% 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const OurPartnersTitle = styled.h1`
  text-align: center;
  ${ sansSerifBold };
  font-size: 36px;
  margin: 32px 0 0;
`;

const OurParentsLogo = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  width: 220px;
  height: 220px;

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
function OurPartners(): ReactElement {
  const { t } = useTranslation();

  return (
    <>
      <OurPartnersTitle> {t('partners.title')} </OurPartnersTitle>
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

export default OurPartners;
