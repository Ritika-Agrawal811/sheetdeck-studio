import { CATEGORIES_INFO, type CategoryKey } from '../constants/categories';

export const getCategory = (category: string) => {
  return CATEGORIES_INFO[category as CategoryKey].title;
};

export const getColor = (category: string) => {
  return CATEGORIES_INFO[category as CategoryKey].color;
};

export const getImageUrl = (category: string) => {
  return CATEGORIES_INFO[category as CategoryKey].image;
};
