import {
  GetBrowsersStats,
  GetDevicesStats,
  GetOperatingSystemStats,
  GetMetricsOverview,
  GetReferrersStats,
  GetRoutesStats,
  GetCountriesStats,
} from '../../wailsjs/go/main/App';
import { snakeToCamel } from '../utils/caseConverter';

import type {
  Period,
  PageviewsData,
  DeviceData,
  BrowserData,
  OperatingSystemData,
  ReferrersData,
  RoutesData,
  CountriesData,
} from '../types/analytics';

export const getMetricsOverview = async (period: Period): Promise<PageviewsData> => {
  const response = await GetMetricsOverview(period);
  return snakeToCamel(response);
};

export const getDevicesStats = async (period: Period): Promise<DeviceData> => {
  const response = await GetDevicesStats(period);
  return snakeToCamel(response);
};

export const getBrowsersStats = async (period: Period): Promise<BrowserData> => {
  const response = await GetBrowsersStats(period);
  return snakeToCamel(response);
};

export const getOperatingSystemsStats = async (period: Period): Promise<OperatingSystemData> => {
  const response = await GetOperatingSystemStats(period);
  return snakeToCamel(response);
};

export const getReferrersStats = async (period: string): Promise<ReferrersData> => {
  const response = await GetReferrersStats(period);
  return snakeToCamel(response);
};

export const getRoutesStats = async (period: string): Promise<RoutesData> => {
  const response = await GetRoutesStats(period);
  return snakeToCamel(response);
};

export const getCountriesStats = async (period: string): Promise<CountriesData> => {
  const response = await GetCountriesStats(period);
  return snakeToCamel(response);
};
