import { writable } from 'svelte/store';
export const accountStore = writable<{id: number, username: string}[]>([]);