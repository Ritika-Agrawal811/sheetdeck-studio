export const CATEGORIES_INFO = {
  html: {
    title: 'HTML',
    color: '#D97706',
  },
  css: {
    title: 'CSS',
    color: '#3B82F6',
  },
  react: {
    title: 'React',
    color: '#93C5FD',
  },
  javascript: {
    title: 'JavaScript',
    color: '#EAB308',
  },
} as const;

export type CategoryKey = keyof typeof CATEGORIES_INFO;
