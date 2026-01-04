<script>
	import { goto } from '$app/navigation';
	import { LAYOUT_DEBUG } from '$lib/debug';
	import { navigate_right } from '$lib/navigate';
	import PageHeader from '$lib/PageHeader.svelte';
</script>

<div class="h-dvh w-full">
	<PageHeader>
		<div></div>
		<span
			class="group
			cursor-pointer
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
			<span class="invisible group-hover:visible">&nbsp&gt</span>
		</span>
	</PageHeader>
	<div class=" {LAYOUT_DEBUG && 'border-2 border-blue-200'}">Projects PAGE</div>
</div>
