<script lang="ts">
	import { LAYOUT_DEBUG } from '$lib/debug';
	import PageHeader from '$lib/PageHeader.svelte';

	const card_modules = import.meta.glob('./project_cards/*', { eager: true });

	const cards = Object.entries(card_modules)
		.sort(([a, _a], [b, _b]) => a.localeCompare(b))
		.map(([_, m]: [string, any]) => m.default);
</script>

<div class="h-dvh w-full overflow-auto">
	<PageHeader page_title="Projects" right_link={{ content: 'Home', href: '/' }} />
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
			grid auto-rows-fr gap-16
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
