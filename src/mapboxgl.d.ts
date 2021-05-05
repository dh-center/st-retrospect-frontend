declare module 'mapboxgl' {
  // eslint-disable-next-line import/no-webpack-loader-syntax
  import mapboxgl from '!mapbox-gl';

  /**
   * Type of handled event when popup is open
   */
  interface PopupOpenEvent {
    type: 'open',
    target: mapboxgl.Popup
  }
}
