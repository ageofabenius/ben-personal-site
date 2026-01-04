<script>
	import { fade } from 'svelte/transition';
	import { LAYOUT_DEBUG } from './debug';

	let { children } = $props();
</script>

<!-- Header row -->
<div
	class="
		handwritten
		flex
		h-1/8
		items-center justify-between
		px-[5%]
		text-[clamp(0.5rem,5vw,2rem)] text-black/50
		{LAYOUT_DEBUG && 'bg-blue-100'}"
	in:fade={{ delay: 1000, duration: 300 }}
>
	{@render children()}
</div>
