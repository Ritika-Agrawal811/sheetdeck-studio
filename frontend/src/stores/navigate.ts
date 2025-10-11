import { writable } from "svelte/store";

type Paths = 'home' | 'cheatsheet' | 'analytics' | 'upload'

export const activePath = writable<Paths>("home")

export function setActivePath(path: Paths) {
    activePath.set(path)
} 