export const METRICS = [
  { type: 'visitors', key: 'totalUniqueVisitors' },
  { type: 'page views', key: 'totalViews' },
  { type: 'clicks', key: '' },
  { type: 'downloads', key: '' },
] as const;

export type Metric = (typeof METRICS)[number]['type'];

export const DEVICES = [
  {
    type: 'mobile',
    color: '#f2a923',
    keys: { 'page views': 'totalMobileViews', visitors: 'totalMobileVisitors', clicks: '', downloads: '' },
  },
  {
    type: 'desktop',
    color: '#10b981',
    keys: { 'page views': 'totalDesktopViews', visitors: 'totalDesktopVisitors', clicks: '', downloads: '' },
  },
] as const;

export type Device = (typeof DEVICES)[number]['type'];
