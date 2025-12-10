import { CATEGORIES_INFO, type CategoryKey } from '../constants/categories';

/**
 * Retrieves the title of a category.
 *
 * @param category
 * @returns string
 */
export const getCategory = (category: string) => {
  return CATEGORIES_INFO[category as CategoryKey].title;
};

/**
 * Retrieves the color associated with a category.
 *
 * @param category
 * @returns string
 */
export const getColor = (category: string) => {
  return CATEGORIES_INFO[category as CategoryKey].color;
};

/**
 * Retrieves the image URL for a category.
 *
 * @param category
 * @returns string
 */
export const getImageUrl = (category: string) => {
  return CATEGORIES_INFO[category as CategoryKey].image;
};
