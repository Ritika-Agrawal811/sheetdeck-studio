import { writable } from 'svelte/store';

export const isAuthenticated = writable(false);

export function login() {
  isAuthenticated.set(true);
}

export function logout() {
  isAuthenticated.set(false);
}
