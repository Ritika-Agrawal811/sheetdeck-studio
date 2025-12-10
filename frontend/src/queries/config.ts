import { createQuery } from '@tanstack/svelte-query';
import { getConfigDetails, getStorageDetails } from '../api/config';

/**
 * Query to fetch application configuration details.
 *
 * @returns ConfigResponse
 */
export const getConfig = () => {
  return createQuery({
    queryKey: ['config'],
    queryFn: getConfigDetails,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};

/**
 * Query to fetch storage usage details.
 *
 * @returns StorageDetails
 */
export const getUsage = () => {
  return createQuery({
    queryKey: ['storage', 'usage'],
    queryFn: getStorageDetails,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};
