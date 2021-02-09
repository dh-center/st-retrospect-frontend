import { ReactElement, useState } from 'react';
import LeftPanel from '../LeftPanel';
import AsideCloseButton from './AsideCloseButton';
import styled from 'styled-components';
import AsideHeader from './AsideHeader';
import { useTranslation } from 'react-i18next';

const AsideCloseButtonPositioned = styled(AsideCloseButton)`
  position: absolute;
  top: 16px;
  right: -48px;
`;

/**
 * Main aside component
 */
function MainAside(): ReactElement {
  const [showAside, setShowAside] = useState(true);
  const { t } = useTranslation();

  return (
    <LeftPanel show={showAside}>
      <AsideCloseButtonPositioned
        willClose={showAside}
        onClick={() => setShowAside(!showAside)}
      />
      <AsideHeader/>
      {t('lang')}
    </LeftPanel>
  );
}

export default MainAside;
