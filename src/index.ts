import { API } from 'homebridge';

import { PLATFORM_NAME } from './settings';
import { ExampleHomebridgePlatform } from './platform';
import {InfinitiveThermostatAccessory} from "./platformAccessory";

/**
 * This method registers the platform with Homebridge
 */
// export = (api: API) => {
//   api.registerPlatform(PLATFORM_NAME, ExampleHomebridgePlatform);
// };

module.exports = (api) => {
  api.registerAccessory(PLATFORM_NAME, InfinitiveThermostatAccessory);
};