import { writable } from 'svelte/store';

export const isAuthenticated = writable(false);

/**
 * Simulates a login action by setting isAuthenticated to true.
 */
export function login() {
  isAuthenticated.set(true);
}

/**
 * Simulates a logout action by setting isAuthenticated to false.
 */
export function logout() {
  isAuthenticated.set(false);
}
