import { createContext, ReactElement, useContext, useState } from 'react';
import WithChildren from '../interfaces/WithChildren';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import {
  CurrentMapContentContextLocation,
  CurrentMapContentContextLocation$key
} from './__generated__/CurrentMapContentContextLocation.graphql';
import {
  CurrentMapContentContext_relations,
  CurrentMapContentContext_relations$key
} from './__generated__/CurrentMapContentContext_relations.graphql';

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

  /**
   * Current relations
   */
  currentRelations: CurrentMapContentContext_relations;

  /**
   * Sets new relations
   *
   * @param ref - array of new relations
   */
  setCurrentRelations(ref: CurrentMapContentContext_relations$key): void;
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
  const [relationsRef, setRelations] = useState<CurrentMapContentContext_relations$key>([]);

  const locationsData = useFragment(
    graphql`
      fragment CurrentMapContentContextLocation on Location @relay(plural: true) {
        longitude
        latitude
      }
    `,
    locationsRef
  );

  const relationsData = useFragment(
    graphql`
      fragment CurrentMapContentContext_relations on Relation @relay(plural: true) {
        id
        locationInstance {
          ...RelationsPopup_relations
        }
      }
    `,
    relationsRef
  );

  return (
    <CurrentMapContentContext.Provider
      value={{
        currentLocations: locationsData,
        setCurrentLocations: setLocations,
        currentRelations: relationsData,
        setCurrentRelations: setRelations,
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
