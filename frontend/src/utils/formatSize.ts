/**
 * Format size s "1.25 KB"
 *
 * @param size
 * @param decimals
 * @return string
 */
export const formatSize = (size: number, decimals: number = 2) => {
  if (size === 0) return '0 Bytes';

  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const k = 1024;
  const i = Math.floor(Math.log(size) / Math.log(k));

  return (size / Math.pow(k, i)).toFixed(decimals) + ' ' + units[i];
};
