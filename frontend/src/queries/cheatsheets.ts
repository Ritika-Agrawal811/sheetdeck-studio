import { createQuery } from '@tanstack/svelte-query';
import { fetchCheatsheets } from '../api/cheatsheets';
import type { SortFilters } from '../types/cheatsheet';

/**
 * Query to fetch cheatsheets based on category, subcategory, sort and limit.
 *
 * @param category
 * @param subcategory
 * @param sort
 * @param limit
 * @returns Cheatsheet[]
 */
export const getCheatSheets = (category: string, subcategory: string, sort: SortFilters, limit: number) => {
  return createQuery({
    queryKey: ['cheatsheets', category, subcategory, sort],
    queryFn: () => fetchCheatsheets(category, subcategory, sort, limit),
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
