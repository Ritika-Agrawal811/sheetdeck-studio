import type { Metric } from '../constants/metrics';

export type Period = '24h' | '7d' | '30d' | '3m' | '6m' | '12m';

export type MetricsData = {
  type: Metric;
  value: number;
};

export type PageviewsData = {
  period: string;
  startDate: string;
  endDate: string;
  totalViews: number;
  totalUniqueVisitors: number;
  intervals: PageviewInterval[];
};

export type PageviewInterval = {
  date: string;
  views: number;
  visitors: number;
};

export type DeviceData = {
  period: string;
  startDate: string;
  endDate: string;
  totalMobileViews: number;
  totalMobileVisitors: number;
  totalDesktopViews: number;
  totalDesktopVisitors: number;
  intervals: DeviceInterval[];
};

type DeviceInterval = {
  date: string;
  mobileViews: number;
  mobileVisitors: number;
  desktopViews: number;
  desktopVisitors: number;
};
