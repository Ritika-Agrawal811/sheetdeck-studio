import { GetCheatSheets } from '../../wailsjs/go/main/App';
import { snakeToCamel } from '../utils/caseConverter';

import type { Cheatsheet, SortFilters } from '../types/cheatsheet';

export const fetchCheatsheets = async (
  category: string,
  subcategory: string,
  sort: SortFilters
): Promise<Cheatsheet[]> => {
  const response = await GetCheatSheets(category, subcategory, sort);
  return snakeToCamel(response);
};
