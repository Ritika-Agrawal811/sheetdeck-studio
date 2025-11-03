import { GetDevicesStats, GetPageviewStats } from '../../wailsjs/go/main/App';
import { snakeToCamel } from '../utils/caseConverter';

import type { Period, PageviewsData, DeviceData } from '../types/analytics';

export const getPageviewsStats = async (period: Period): Promise<PageviewsData> => {
  const response = await GetPageviewStats(period);
  return snakeToCamel(response);
};

export const getDevicesStats = async (period: Period): Promise<DeviceData> => {
  const response = await GetDevicesStats(period);
  return snakeToCamel(response);
};
