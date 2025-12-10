/**
 * Generates the URL for a country's flag image based on its country code.
 *
 * @param countryCode
 * @returns string
 */
export const getCountryFlagUrl = (countryCode: string) => {
  if (!countryCode) return null;

  return `https://flagcdn.com/w20/${countryCode.toLowerCase()}.png`;
};
