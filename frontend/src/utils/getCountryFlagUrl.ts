export const getCountryFlagUrl = (countryCode: string) => {
  if (!countryCode) return null;

  return `https://flagcdn.com/w20/${countryCode.toLowerCase()}.png`;
};
