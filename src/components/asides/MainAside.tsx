import {ReactElement, useState} from 'react';
import LeftPanel from '../LeftPanel';
import AsideCloseButton from './AsideCloseButton';
import styled from 'styled-components';
import AsideHeader from './AsideHeader';

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
      <AsideHeader/>
    </LeftPanel>
  );
}

export default MainAside;
