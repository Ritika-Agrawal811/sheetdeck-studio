import { createQuery } from '@tanstack/svelte-query';
import { getPageviewsStats, getDevicesStats, getBrowsersStats } from '../api/analytics';

import type { Period } from '../types/analytics';

export const getPageviewsAnalytics = (period: Period) => {
  return createQuery({
    queryKey: ['pageviews', period],
    queryFn: () => getPageviewsStats(period),
    staleTime: 5 * 60 * 60,
    refetchOnWindowFocus: false,
  });
};

export const getDevicesAnalytics = (period: Period) => {
  return createQuery({
    queryKey: ['devices', period],
    queryFn: () => getDevicesStats(period),
    staleTime: 5 * 60 * 60,
    refetchOnWindowFocus: false,
  });
};

export const getBrowsersAnalytics = (period: Period) => {
  return createQuery({
    queryKey: ['browsers', period],
    queryFn: () => getBrowsersStats(period),
    staleTime: 5 * 60 * 60,
    refetchOnWindowFocus: false,
  });
};
