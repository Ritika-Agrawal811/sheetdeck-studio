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

export type BrowserData = {
  period: string;
  startDate: string;
  endDate: string;
  browsers: DataStat[];
};

export type OperatingSystemData = {
  period: string;
  startDate: string;
  endDate: string;
  operatingSystems: DataStat[];
};

export type ReferrersData = {
  period: string;
  startDate: string;
  endDate: string;
  referrers: DataStat[];
};

export type RoutesData = {
  period: string;
  startDate: string;
  endDate: string;
  routes: DataStat[];
};

export type CountriesData = {
  period: string;
  startDate: string;
  endDate: string;
  countries: DataStat[];
};

type DataStat = {
  name: string;
  views: number;
  visitors: number;
};
