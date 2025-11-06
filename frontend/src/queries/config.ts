import { createQuery } from '@tanstack/svelte-query';
import { getConfigDetails, getStorageDetails } from '../api/config';

export const getConfig = () => {
  return createQuery({
    queryKey: ['config'],
    queryFn: getConfigDetails,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};

export const getUsage = () => {
  return createQuery({
    queryKey: ['storage', 'usage'],
    queryFn: getStorageDetails,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};
