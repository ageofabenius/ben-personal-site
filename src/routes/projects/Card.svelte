<script lang="ts">
	import { LAYOUT_DEBUG } from '$lib/debug';
	import type { Snippet } from 'svelte';

	let {
		screenshot_path,
		fit_screenshot_vertically,
		title,
		description,
		links
	}: {
		screenshot_path?: string;
		fit_screenshot_vertically?: boolean;
		title: string;
		description: string[];
		links?: Snippet;
	} = $props();
</script>

<div
	class="
    grid grid-cols-1
    overflow-hidden
    rounded-lg
	border
	border-black/10
	shadow-lg
	lg:grid-cols-3
    {LAYOUT_DEBUG && 'bg-orange-200'}"
>
	<!-- Screenshot -->
	<div class="flex h-72 items-center justify-center rounded {LAYOUT_DEBUG && 'bg-lime-100'}">
		{#if screenshot_path}
			<img
				src={screenshot_path}
				alt="live satellite orbit screenshot"
				class=" {fit_screenshot_vertically ? 'h-full object-cover' : 'max-h-full max-w-full'}"
			/>
		{/if}
	</div>
	<!-- Text -->
	<div
		class="
		rounded-lg
		lg:col-span-2
		"
	>
		<div
			class="
			flex
			size-full flex-col
			gap-4
			p-4
			{LAYOUT_DEBUG && 'bg-fuchsia-100'}"
		>
			<!-- Title -->
			<h1 class="text-xl font-semibold {LAYOUT_DEBUG && 'bg-lime-100'}">{title}</h1>
			<!-- Description -->
			<div class="flex flex-col gap-4 {LAYOUT_DEBUG && 'bg-lime-100'}">
				{#each description as paragraph}
					<p>
						{paragraph}
					</p>
				{/each}
			</div>

			<!-- Spacer -->
			<div class="grow {LAYOUT_DEBUG && 'bg-neutral-300'}"></div>

			<!-- Links -->
			{#if links}
				<div>
					{@render links()}
				</div>
			{/if}
		</div>
	</div>
</div>
