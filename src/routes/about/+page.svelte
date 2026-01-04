<script>
	import { goto } from '$app/navigation';
	import { LAYOUT_DEBUG } from '$lib/debug';
	import { navigate_left } from '$lib/navigate';
	import PageHeader from '$lib/PageHeader.svelte';
</script>

<div class="h-dvh w-full">
	<PageHeader>
		<span
			class="group
			cursor-pointer
			hover:font-semibold
			{LAYOUT_DEBUG && 'bg-yellow-100'}"
		>
			<span class="invisible group-hover:visible">&lt&nbsp</span>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<span
				onclick={() => navigate_left('/')}
				class="
				inline-block
				transform
				transition-transform
				duration-100
				active:-rotate-3"
			>
				Home
			</span>
		</span>
	</PageHeader>
	<div class="border-2 border-blue-200">ABOUT PAGE</div>
</div>
