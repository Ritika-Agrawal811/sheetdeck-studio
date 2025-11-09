import { createQuery } from '@tanstack/svelte-query';
import { getPageviewsStats, getDevicesStats, getBrowsersStats, getOperatingSystemsStats } from '../api/analytics';

import type { Period } from '../types/analytics';

export const getPageviewsAnalytics = (period: Period) => {
  return createQuery({
    queryKey: ['pageviews', period],
    queryFn: () => getPageviewsStats(period),
    staleTime: 2 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};

export const getDevicesAnalytics = (period: Period) => {
  return createQuery({
    queryKey: ['devices', period],
    queryFn: () => getDevicesStats(period),
    staleTime: 2 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};

export const getBrowsersAnalytics = (period: Period) => {
  return createQuery({
    queryKey: ['browsers', period],
    queryFn: () => getBrowsersStats(period),
    staleTime: 2 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};

export const getOperatingSystemsAnalytics = (period: Period) => {
  return createQuery({
    queryKey: ['operatingSystems', period],
    queryFn: () => getOperatingSystemsStats(period),
    staleTime: 2 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
