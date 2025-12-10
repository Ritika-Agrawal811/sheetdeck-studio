/**
 * Extracts the domain from a given URL.
 *
 * @param url
 * @returns string
 */
export const extractDomain = (url: string): string => {
  try {
    const domain = new URL(url).hostname;
    return domain.replace('www.', '');
  } catch {
    return url;
  }
};

/**
 * Generates the favicon URL for a given domain.
 *
 * @param domain
 * @returns string
 */
export const getFaviconUrl = (domain: string): string => {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
};
