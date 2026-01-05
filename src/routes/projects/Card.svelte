<script lang="ts">
	import { LAYOUT_DEBUG } from '$lib/debug';
	import type { Snippet } from 'svelte';

	let {
		screenshot_path,
		title,
		description,
		links
	}: {
		screenshot_path?: string;
		title: string;
		description: string;
		links?: Snippet;
	} = $props();
</script>

<div
	class="
    grid grid-cols-1
    overflow-hidden
    rounded-lg
	lg:grid-cols-3
	shadow-lg
	border
	border-black/10
    {LAYOUT_DEBUG && 'bg-orange-200'}"
>
	<!-- Screenshot -->
	<div class="size-full rounded {LAYOUT_DEBUG && 'bg-lime-100'}">
		{#if screenshot_path}
			<img
				src={screenshot_path}
				alt="live satellite orbit screenshot"
				class="size-full object-cover"
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
			flex flex-col
			gap-4
			p-4
			{LAYOUT_DEBUG && 'bg-fuchsia-100'}"
		>
			<!-- Title -->
			<h1 class="text-xl font-semibold {LAYOUT_DEBUG && 'bg-lime-100'}">{title}</h1>
			<!-- Description -->
			<p class=" {LAYOUT_DEBUG && 'bg-lime-100'}">
				{description}
			</p>

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
