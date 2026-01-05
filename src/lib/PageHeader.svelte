<script lang="ts">
	import { fade } from 'svelte/transition';
	import { LAYOUT_DEBUG } from './debug';
	import { navigate_left, navigate_right } from './navigate';

	export type NavigationLinke = {
		content: string;
		href: string;
	};

	let {
		page_title,
		left_link,
		right_link
	}: {
		page_title?: string;
		left_link?: NavigationLinke;
		right_link?: NavigationLinke;
	} = $props();
</script>

<!-- Header row -->
<div
	class="
		handwritten
		grid
		h-1/8
		shrink-0
		grid-cols-3 items-center
		px-[5%]
		text-[clamp(0.5rem,5vw,2rem)] text-black/50
		{LAYOUT_DEBUG && 'bg-blue-100'}"
	in:fade={{ delay: 1000, duration: 300 }}
>
	{#if left_link}
		<span
			class="
			col-start-1
			cursor-pointer
			text-left
			hover:font-semibold
			{LAYOUT_DEBUG && 'bg-yellow-100'}"
		>
			<span>&lt&nbsp</span>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<span
				onclick={() => navigate_left(left_link.href)}
				class="
				inline-block
				transform
				transition-transform
				duration-100
				active:-rotate-3"
			>
				{left_link.content}
			</span>
		</span>
	{/if}
	{#if page_title}
		<span class="col-start-2 text-center">{page_title}</span>
	{/if}
	{#if right_link}
		<span
			class="
			col-start-3
			cursor-pointer
			text-right
			hover:font-semibold
			{LAYOUT_DEBUG && 'bg-yellow-100'}"
		>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<span
				onclick={() => navigate_right(right_link.href)}
				class="
				inline-block
				transform
				transition-transform
				duration-100
				active:rotate-3"
			>
				{right_link.content}
			</span>
			<span>&nbsp&gt</span>
		</span>
	{/if}
</div>
