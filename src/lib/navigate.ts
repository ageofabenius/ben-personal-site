import { writable, type Writable } from 'svelte/store';
import { goto } from '$app/navigation';

export const nav_direction: Writable<'left' | 'right'> = writable('left')

export function navigate_left(url: string) {
    nav_direction.set('left')
    goto(url)
}

export function navigate_right(url: string) {
    nav_direction.set('right')
    goto(url)
}