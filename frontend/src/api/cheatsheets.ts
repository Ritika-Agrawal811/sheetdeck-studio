import { GetCheatSheets } from '../../wailsjs/go/main/App';
import { snakeToCamel } from '../utils/caseConverter';

import type { Cheatsheet, SortFilters } from '../types/cheatsheet';

export const fetchCheatsheets = async (
  category: string,
  subcategory: string,
  sort: SortFilters,
  limit: number
): Promise<Cheatsheet[]> => {
  const response = await GetCheatSheets(category, subcategory, sort, limit);
  return snakeToCamel(response);
};
