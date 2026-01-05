<script>
	import { LAYOUT_DEBUG } from '$lib/debug';
	import Card from '../Card.svelte';
</script>

<Card
	screenshot_path="/project_showcase/planck_keyboard_layer_0.png"
	title="Custom Keymap for 'Planck' Ortholinear Keyboard"
	description="I thought
	I'd share the keymapping I spent some time refining.  This was primarily used at
	work, coding.  It went through a bunch of iterations, it's still not perfect,
	but it works way better than a regular keyboard."
>
	{#snippet links()}
		<div class="flex flex-wrap items-center justify-end gap-4 {LAYOUT_DEBUG && 'bg-slate-100'}">
			<div class="flex flex-col gap-4 p-2 lg:col-span-2">
				<a
					href="https://github.com/ageofabenius/planck-keyboard"
					target="_blank"
					class="flex items-center gap-2 opacity-50 hover:opacity-75"
				>
					<div class="flex items-center">
						<img src="github-mark.svg" alt="GitHub invertocat" class=" h-4" />
						<img src="GitHub_Logo.png" alt="GitHub source" class="h-4" />
					</div>
					<span class="text-nowrap">Repository ↗</span>
				</a>
			</div>
		</div>
	{/snippet}
</Card>
