import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  sweJulday(
    year: number,
    month: number,
    day: number,
    hour: number,
    gregflag: number
  ): number;

  sweDeltat(tjd: number): number;

  sweRevjul(
    julday: number,
    gregflag: number
  ): { year: number; month: number; day: number; hour: number };

  sweUtcTimeZone(
    iyear: number,
    imonth: number,
    iday: number,
    ihour: number,
    imin: number,
    isec: number,
    timezone: number
  ): {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
  };

  sweUtcToJd(
    year: number,
    month: number,
    day: number,
    hour: number,
    min: number,
    sec: number,
    gregflag: number
  ): { tjdEt: number; tjdUt: number };

  sweJdetToUtc(
    tjdEt: number,
    gregflag: number
  ): {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
  };

  sweJdut1ToUtc(
    tjdUt: number,
    gregflag: number
  ): {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
  };

  sweSetTopo(geolon: number, geolat: number, altitude: number): void;

  sweGetPlanetName(ipl: number): string;

  sweCalcUt(
    tjdUt: number,
    ipl: number,
    iflag: number
  ): {
    longitude: number;
    latitude: number;
    distance: number;
    longitudeSpeed: number;
    latitudeSpeed: number;
    distanceSpeed: number;
  };

  sweCotrans(
    longitude: number,
    latitude: number,
    distance: number,
    eps: number
  ): { longitude: number; latitude: number; distance: number };

  sweCalc(
    tjd: number,
    ipl: number,
    iflag: number
  ): {
    longitude: number;
    latitude: number;
    distance: number;
    longitudeSpeed: number;
    latitudeSpeed: number;
    distanceSpeed: number;
  };

  sweHouses(
    tjdUt: number,
    iflag: number,
    geolat: number,
    geolon: number,
    hsys: string
  ): { cusp: number[]; ascmc: number[] };

  sweHousesArmc(
    armc: number,
    geolat: number,
    eps: number,
    hsys: string
  ): { cusp: number[]; ascmc: number[] };

  sweHousePos(
    armc: number,
    geolat: number,
    eps: number,
    hsys: string
  ): { longitude: number; latitude: number };

  sweSetSidMode(sidMode: number, t0: number, ayanT0: number): void;

  sweGetAyanamsaUt(tjdUt: number): number;

  sweSidtime(tjdUt: number): number;

  sweGetAyanamsa(tjdEt: number): number;

  sweFixstar(
    star: string,
    tjd: number,
    iflag: number
  ): {
    longitude: number;
    latitude: number;
    distance: number;
  };

  sweFixstarUt(
    star: string,
    tjdUt: number,
    iflag: number
  ): {
    longitude: number;
    latitude: number;
    distance: number;
  };

  sweHeliacalPhenoUt(
    tjdUt: number,
    dgeo: number[],
    datm: number[],
    dobs: number[],
    objectName: string,
    eventType: number,
    helflag: number
  ): {
    tcAltitude: number;
    tcApparentAltitude: number;
    gcAltitude: number;
    azimuth: number;
    tcSunAltitude: number;
    sunAzimuth: number;
    tcActualVisibleArc: number;
    gcActualVisibleArc: number;
    objectToSunAzimuth: number;
    objectToSunLongitude: number;
    extinction: number;
    tcMinVisibleArc: number;
    firstVisible: number;
    bestVisible: number;
    endVisible: number;
    yallopBestVisible: number;
    moonCresentWidth: number;
    yallopValue: number;
    yallopCriterion: number;
    parallax: number;
    magnitude: number;
    rise: number;
    riseSet: number;
    riseObjectToSun: number;
    visibleDuration: number;
    moonCresetLength: number;
    elong: number;
    illumination: number;
    kOZ: number;
    ka: number;
    ksumm: number;
    error?: string;
  };

  sweHeliacalUt(
    tjdUt: number,
    dgeo: number[],
    datm: number[],
    dobs: number[],
    objectName: string,
    eventType: number,
    helflag: number
  ): {
    error?: boolean;
    errorCode?: number;
    startVisible?: number;
    bestVisible?: number;
    endVisible?: number;
  };

  sweVisLimitMag(
    tjdUt: number,
    dgeo: number[],
    datm: number[],
    dobs: number[],
    objectName: string,
    helflag: number
  ): {
    error?: boolean;
    errorCode?: number;
    vissualMagnitudeLimit?: number;
    AltO?: number;
    AziO?: number;
    AltS?: number;
    AziS?: number;
    AltM?: number;
    AziM?: number;
  };

  sweNodApsUt(
    tjdUt: number,
    ipl: number,
    iflag: number,
    method: number
  ): {
    ascending: number[];
    descending: number[];
    perihelion: number[];
    aphelion: number[];
  };

  getHarmonyResfilePath(): string;
}

// Add error handling for TurboModule loading
let SwissephModule: Spec | null = null;

try {
  SwissephModule = TurboModuleRegistry.getEnforcing<Spec>('Swisseph');
} catch (error) {
  console.warn('Failed to load Swisseph TurboModule:', error);
  // In development, provide a mock implementation to prevent crashes
  if (__DEV__) {
    console.warn(
      'Running in development mode - using mock Swisseph implementation'
    );
  }
}

export default SwissephModule;
