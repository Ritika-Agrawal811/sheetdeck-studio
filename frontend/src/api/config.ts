import { GetConfig, GetStorageUsage } from '../../wailsjs/go/main/App';
import type { ConfigResponse, StorageDetails } from '../types/config';
import { snakeToCamel } from '../utils/caseConverter';

export const getConfigDetails = async (): Promise<ConfigResponse> => {
  const response = await GetConfig();
  return snakeToCamel(response);
};

export const getStorageDetails = async (): Promise<StorageDetails> => {
  const response = await GetStorageUsage();
  return snakeToCamel(response);
};
