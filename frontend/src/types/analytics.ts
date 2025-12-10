import type { Metric } from '../constants/metrics';

export type Period = '24h' | '7d' | '30d' | '3m';

export type MetricsData = {
  type: Metric;
  value: number;
};

type TimeRange = {
  period: Period;
  startDate: string;
  endDate: string;
};

export type PageviewsData = TimeRange & {
  totalViews: number;
  totalUniqueVisitors: number;
  intervals: PageviewInterval[];
};

export type PageviewInterval = {
  date: string;
  views: number;
  visitors: number;
};

export type DeviceData = TimeRange & {
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

export type BrowserData = TimeRange & {
  browsers: DataStat[];
};

export type OperatingSystemData = TimeRange & {
  operatingSystems: DataStat[];
};

export type ReferrersData = TimeRange & {
  referrers: DataStat[];
};

export type RoutesData = TimeRange & {
  routes: DataStat[];
};

export type CountriesData = TimeRange & {
  countries: CountryStat[];
};

type CountryStat = {
  name: string;
  code: string;
  numericCode: string;
  views: number;
  visitors: number;
};

type DataStat = {
  name: string;
  views: number;
  visitors: number;
};
