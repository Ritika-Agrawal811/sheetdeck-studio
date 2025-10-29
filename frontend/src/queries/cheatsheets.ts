import { createQuery } from '@tanstack/svelte-query';
import { fetchCheatsheets } from '../api/cheatsheets';

export const getCheatSheets = (category: string, subcategory: string) => {
  return createQuery({
    queryKey: ['cheatsheets', category, subcategory],
    queryFn: () => fetchCheatsheets(category, subcategory),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};
