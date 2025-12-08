import htmlLogo from '../../static/assets/images/html.png';
import cssLogo from '../../static/assets/images/css.png';
import reactLogo from '../../static/assets/images/react.png';
import jsLogo from '../../static/assets/images/javascript.png';

export const CATEGORIES_INFO = {
  html: {
    title: 'HTML',
    color: '#D97706',
    image: htmlLogo,
  },
  css: {
    title: 'CSS',
    color: '#3B82F6',
    image: cssLogo,
  },
  react: {
    title: 'React',
    color: '#93C5FD',
    image: reactLogo,
  },
  javascript: {
    title: 'JavaScript',
    color: '#EAB308',
    image: jsLogo,
  },
} as const;

export type CategoryKey = keyof typeof CATEGORIES_INFO;
