import { GetCheatSheets } from '../../wailsjs/go/main/App';
import { snakeToCamel } from '../utils/caseConverter';

import type { Cheatsheet, SortFilters } from '../types/cheatsheet';

/**
 * Fetches a list of cheatsheets based on category, subcategory, sort filter and limit.
 *
 * @param category
 * @param subcategory
 * @param sort
 * @param limit
 * @returns Cheatsheet[]
 */
export const fetchCheatsheets = async (
  category: string,
  subcategory: string,
  sort: SortFilters,
  limit: number
): Promise<Cheatsheet[]> => {
  const config = {
    Category: category,
    Subcategory: subcategory,
    Sort: sort,
    Limit: limit,
  };

  const response = await GetCheatSheets(config);
  return snakeToCamel(response);
};
