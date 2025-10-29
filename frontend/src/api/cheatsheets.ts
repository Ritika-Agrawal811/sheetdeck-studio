import { GetCheatSheets } from '../../wailsjs/go/main/App';
import { snakeToCamel } from '../utils/caseConverter';

import type { Cheatsheet } from '../types/cheatsheet';

export const fetchCheatsheets = async (category: string, subcategory: string): Promise<Cheatsheet[]> => {
  const response = await GetCheatSheets(category, subcategory);
  return snakeToCamel(response);
};
