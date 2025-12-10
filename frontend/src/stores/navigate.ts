import { writable } from 'svelte/store';

export type Paths = 'home' | 'cheatsheet' | 'analytics' | 'upload';

export const activePath = writable<Paths>('home');

/**
 * Sets the active navigation path for the Sidebar.
 *
 * @param path
 */
export function setActivePath(path: Paths) {
  activePath.set(path);
}
