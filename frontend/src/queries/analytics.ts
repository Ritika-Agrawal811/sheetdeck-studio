import { createQuery } from '@tanstack/svelte-query';
import {
  getMetricsOverview,
  getDevicesStats,
  getBrowsersStats,
  getOperatingSystemsStats,
  getReferrersStats,
  getRoutesStats,
} from '../api/analytics';

import type { Period } from '../types/analytics';

export const getMetricsAnalytics = (period: Period) => {
  return createQuery({
    queryKey: ['pageviews', period],
    queryFn: () => getMetricsOverview(period),
    staleTime: 3 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};

export const getDevicesAnalytics = (period: Period) => {
  return createQuery({
    queryKey: ['devices', period],
    queryFn: () => getDevicesStats(period),
    staleTime: 3 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};

export const getBrowsersAnalytics = (period: Period) => {
  return createQuery({
    queryKey: ['browsers', period],
    queryFn: () => getBrowsersStats(period),
    staleTime: 3 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};

export const getOperatingSystemsAnalytics = (period: Period) => {
  return createQuery({
    queryKey: ['operatingSystems', period],
    queryFn: () => getOperatingSystemsStats(period),
    staleTime: 3 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};

export const getReferrersAnalytics = (period: Period) => {
  return createQuery({
    queryKey: ['referrers', period],
    queryFn: () => getReferrersStats(period),
    staleTime: 3 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};

export const getRoutesAnalytics = (period: Period) => {
  return createQuery({
    queryKey: ['routes', period],
    queryFn: () => getRoutesStats(period),
    staleTime: 3 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
