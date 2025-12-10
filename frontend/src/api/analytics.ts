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

/**
 *  Fetches the metrics overview (views, visitors, clicks and downloads) for a given period.
 *
 * @param period
 * @returns PageviewsData
 */
export const getMetricsOverview = async (period: Period): Promise<PageviewsData> => {
  const response = await GetMetricsOverview(period);
  return snakeToCamel(response);
};

/**
 * Fetches the device statistics for a given period.
 *
 * @param period
 * @returns DeviceData
 */
export const getDevicesStats = async (period: Period): Promise<DeviceData> => {
  const response = await GetDevicesStats(period);
  return snakeToCamel(response);
};

/**
 * Fetches the browser statistics for a given period.
 *
 * @param period
 * @returns BrowserData
 */
export const getBrowsersStats = async (period: Period): Promise<BrowserData> => {
  const response = await GetBrowsersStats(period);
  return snakeToCamel(response);
};

/**
 * Fetches the operating system statistics for a given period.
 *
 * @param period
 * @returns OperatingSystemData
 */
export const getOperatingSystemsStats = async (period: Period): Promise<OperatingSystemData> => {
  const response = await GetOperatingSystemStats(period);
  return snakeToCamel(response);
};

/**
 * Fetches the referrers statistics for a given period.
 *
 * @param period
 * @returns ReferrersData
 */
export const getReferrersStats = async (period: Period): Promise<ReferrersData> => {
  const response = await GetReferrersStats(period);
  return snakeToCamel(response);
};

/**
 * Fetches the routes statistics for a given period.
 *
 * @param period
 * @returns RoutesData
 */
export const getRoutesStats = async (period: Period): Promise<RoutesData> => {
  const response = await GetRoutesStats(period);
  return snakeToCamel(response);
};

/**
 * Fetches the countries statistics for a given period.
 *
 * @param period
 * @returns CountriesData
 */
export const getCountriesStats = async (period: Period): Promise<CountriesData> => {
  const response = await GetCountriesStats(period);
  return snakeToCamel(response);
};
