/**
 * Parameters of '/route/:questId' route
 */
export interface QuestRouteParameters {
  /**
   * Current quest id
   */
  questId: string;
}

/**
 * Parameters of '/route/:questId/:currentLocationIndex' route
 */
export interface QuestPassingRouteParameters extends QuestRouteParameters {
  /**
   * Index of current location
   */
  currentLocationIndex: string;
}

/**
 * Parameters of '/location-instance/:locationInstanceId' route
 */
export interface LocationInstanceRouteParameters {
  /**
   * Current location instance id
   */
  locationInstanceId: string;
}

/**
 * Parameters of '/person/:personId' route
 */
export interface PersonRouteParameters {
  /**
   * Current person id
   */
  personId: string;
}

