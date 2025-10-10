type AnyObject = Record<string, any>;

/**
 * Converts snake_case string to camelCase
 */
export function toCamelCase(str: string): string {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

/**
 * Converts camelCase string to snake_case
 */
export function toSnakeCase(str: string): string {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

export function removeSnakeCase(str: string): string {
  return str.replace(/_/g, ' ');
}

/**
 * Deeply converts all object keys from snake_case to camelCase
 */
export function snakeToCamel<T = any>(data: any): T {
  // Handle null/undefined
  if (data === null || data === undefined) {
    return data;
  }

  // Handle arrays
  if (Array.isArray(data)) {
    return data.map((item) => snakeToCamel(item)) as any;
  }

  // Handle objects
  if (typeof data === 'object' && !(data instanceof Date)) {
    const converted: AnyObject = {};

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const camelKey = toCamelCase(key);
        converted[camelKey] = snakeToCamel(data[key]);
      }
    }

    return converted as T;
  }

  return data;
}

/**
 * Deeply converts all object keys from camelCase to snake_case
 */
export function camelToSnake<T = any>(data: any): T {
  if (data === null || data === undefined) {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map((item) => camelToSnake(item)) as any;
  }

  if (typeof data === 'object' && !(data instanceof Date)) {
    const converted: AnyObject = {};

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const snakeKey = toSnakeCase(key);
        converted[snakeKey] = camelToSnake(data[key]);
      }
    }

    return converted as T;
  }

  return data;
}
