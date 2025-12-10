import { createQuery } from '@tanstack/svelte-query';
import {
  getMetricsOverview,
  getDevicesStats,
  getBrowsersStats,
  getOperatingSystemsStats,
  getReferrersStats,
  getRoutesStats,
  getCountriesStats,
} from '../api/analytics';

import type { Period } from '../types/analytics';

/**
 * Query to fetch metrics overview data.
 *
 * @param period
 * @returns PageviewsData
 */
export const getMetricsAnalytics = (period: Period) => {
  return createQuery({
    queryKey: ['pageviews', period],
    queryFn: () => getMetricsOverview(period),
    staleTime: 3 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};

/**
 * Query to fetch devices statistics data.
 *
 * @param period
 * @returns DeviceData
 */
export const getDevicesAnalytics = (period: Period) => {
  return createQuery({
    queryKey: ['devices', period],
    queryFn: () => getDevicesStats(period),
    staleTime: 3 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};

/**
 * Query to fetch browser statistics data.
 *
 * @param period
 * @returns BrowserData
 */
export const getBrowsersAnalytics = (period: Period) => {
  return createQuery({
    queryKey: ['browsers', period],
    queryFn: () => getBrowsersStats(period),
    staleTime: 3 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};

/**
 * Query to fetch operating systems statistics data.
 *
 * @param period
 * @returns OperatingSystemData
 */
export const getOperatingSystemsAnalytics = (period: Period) => {
  return createQuery({
    queryKey: ['operatingSystems', period],
    queryFn: () => getOperatingSystemsStats(period),
    staleTime: 3 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};

/**
 * Query to fetch referrer statistics data.
 *
 * @param period
 * @returns ReferrersData
 */
export const getReferrersAnalytics = (period: Period) => {
  return createQuery({
    queryKey: ['referrers', period],
    queryFn: () => getReferrersStats(period),
    staleTime: 3 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};

/**
 * Query to fetch routes statistics data.
 *
 * @param period
 * @returns RoutesData
 */
export const getRoutesAnalytics = (period: Period) => {
  return createQuery({
    queryKey: ['routes', period],
    queryFn: () => getRoutesStats(period),
    staleTime: 3 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};

/**
 * Query to fetch countrues statistics data.
 *
 * @param period
 * @returns CountriesData
 */
export const getCountriesAnalytics = (period: Period) => {
  return createQuery({
    queryKey: ['countries', period],
    queryFn: () => getCountriesStats(period),
    staleTime: 3 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
