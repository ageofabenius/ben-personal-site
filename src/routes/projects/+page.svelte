<script lang="ts">
	import { LAYOUT_DEBUG } from '$lib/debug';
	import { navigate_right } from '$lib/navigate';
	import PageHeader from '$lib/PageHeader.svelte';

	const card_modules = import.meta.glob('./project_cards/*', { eager: true });

	const cards = Object.entries(card_modules)
		.sort(([a, _a], [b, _b]) => a.localeCompare(b))
		.map(([_, m]: [string, any]) => m.default);
</script>

<div class="h-dvh w-full">
	<PageHeader>
		<div class="flex-1"></div>
		<span class="flex-1 text-center">Projects</span>
		<span
			class="group
			flex-1
			cursor-pointer
			text-right
			hover:font-semibold
			{LAYOUT_DEBUG && 'bg-yellow-100'}"
		>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<span
				onclick={() => navigate_right('/')}
				class="
				inline-block
				transform
				transition-transform
				duration-100
				active:rotate-3"
			>
				Home
			</span>
			<span>&nbsp&gt</span>
		</span>
	</PageHeader>
	<div
		class="
		px-[15%] py-[5%]
		{LAYOUT_DEBUG && 'bg-blue-200'}
		handwritten
		flex flex-col gap-4
		"
	>
		<div
			class="
			grid gap-16
			{LAYOUT_DEBUG && 'bg-yellow-200'}
			handwritten
		"
		>
			<!-- Project cards -->
			{#each cards as card}
				<svelte:component this={card} />
			{/each}
		</div>
	</div>
</div>
