import { writable, type Writable } from 'svelte/store';

export const storyId: Writable<string[]> = writable([]);