import { createContext, ReactElement, useContext, useState } from 'react';
import WithChildren from '../interfaces/WithChildren';
import {
  LocationInstanceRelationsPopup_data$key
} from '../components/mapContent/__generated__/LocationInstanceRelationsPopup_data.graphql';

/**
 * Props of CurrentMarkersContext
 */
interface CurrentMapContentContextValue {
  /**
   * Current markers
   */
  currentLocations: readonly LocationInstanceRelationsPopup_data$key[];

  /**
   * Sets new markers coordinates
   *
   * @param ref - array of new coordinates
   */
  setCurrentLocations(ref: readonly LocationInstanceRelationsPopup_data$key[]): void;
}

/**
 * Context with current markers
 */
const CurrentMapContentContext = createContext<CurrentMapContentContextValue | undefined>(undefined);

/**
 * Provider of current markers context
 *
 * @param props - props of component
 */
export function CurrentMapContentProvider(props: WithChildren): ReactElement {
  const [locationsRef, setLocations] = useState<readonly LocationInstanceRelationsPopup_data$key[]>([]);

  return (
    <CurrentMapContentContext.Provider
      value={{
        currentLocations: locationsRef,
        setCurrentLocations: setLocations,
      }}
    >
      {props.children}
    </CurrentMapContentContext.Provider>
  );
}

/**
 * Helper hook fir accessing data in CurrentMapContentContext
 */
export default function useCurrentMapContent(): CurrentMapContentContextValue {
  const context = useContext(CurrentMapContentContext);

  if (!context) {
    throw new Error('You should use this hook only inside CurrentMapContentProvider');
  }

  return context;
}
