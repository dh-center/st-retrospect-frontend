import {ReactElement, useState} from 'react';
import MapView from '../components/MapView';
import LeftPanel from '../components/LeftPanel';
import styled from 'styled-components';
import ApplicationLogo from '../components/ApplicationLogo';

/**
 * This button needs only for test
 */
const TestButton = styled.button`
  position: absolute;
  top: 50%;
  left: 20px;
  z-index: 2;
  cursor: pointer;
`;

/**
 * View of home page
 */
function HomePage(): ReactElement {
  const [showLeftPanel, setShowLeftPanel] = useState(true);

  return (
    <div>
      <LeftPanel show={showLeftPanel}>
        <ApplicationLogo/>
      </LeftPanel>
      <TestButton onClick={() => setShowLeftPanel(!showLeftPanel)}>Close/Open left panel</TestButton>
      <MapView/>
    </div>
  );
}

export default HomePage;
