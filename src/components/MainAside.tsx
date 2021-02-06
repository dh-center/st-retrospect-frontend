import {ReactElement, useState} from 'react';
import LeftPanel from './LeftPanel';
import ApplicationLogo from './ApplicationLogo';
import AsideCloseButton from './AsideCloseButton';
import styled from 'styled-components';

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

  return (
    <LeftPanel show={showAside}>
      <AsideCloseButtonPositioned
        willClose={showAside}
        onClick={() => setShowAside(!showAside)}
      />
      <ApplicationLogo/>
    </LeftPanel>
  );
}

export default MainAside;
