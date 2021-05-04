import { createContext, ReactElement, useContext, useState } from 'react';
import WithChildren from '../interfaces/WithChildren';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import {
  CurrentMapContentContextLocation,
  CurrentMapContentContextLocation$key
} from './__generated__/CurrentMapContentContextLocation.graphql';

/**
 * Props of CurrentMarkersContext
 */
interface CurrentMapContentContextValue {
  /**
   * Current markers
   */
  currentLocations: CurrentMapContentContextLocation;

  /**
   * Sets new markers coordinates
   *
   * @param ref - array of new coordinates
   */
  setCurrentLocations(ref: CurrentMapContentContextLocation$key): void;
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
  const [locationsRef, setLocations] = useState<CurrentMapContentContextLocation$key>([]);
  const data = useFragment(
    graphql`
      fragment CurrentMapContentContextLocation on Location @relay(plural: true) {
        longitude
        latitude
      }
    `,
    locationsRef
  );

  return (
    <CurrentMapContentContext.Provider
      value={{
        currentLocations: data,
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
