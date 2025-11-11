import countries from 'i18n-iso-countries';
import en from 'i18n-iso-countries/langs/en.json';

countries.registerLocale(en);

function getCountryCode(countryName: string): string {
  const code = countries.getAlpha2Code(countryName, 'en');
  return code || 'XX';
}

export const getCountryFlagUrl = (countryName: string) => {
  const countryCode = getCountryCode(countryName);

  if (countryCode == 'XX') return null;

  return `https://flagcdn.com/w20/${countryCode.toLowerCase()}.png`;
};
