import { createQuery } from '@tanstack/svelte-query';
import { fetchCheatsheets } from '../api/cheatsheets';
import type { SortFilters } from '../types/cheatsheet';

export const getCheatSheets = (category: string, subcategory: string, sort: SortFilters) => {
  return createQuery({
    queryKey: ['cheatsheets', category, subcategory, sort],
    queryFn: () => fetchCheatsheets(category, subcategory, sort),
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
