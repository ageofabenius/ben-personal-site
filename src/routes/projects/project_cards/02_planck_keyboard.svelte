<script>
	import { LAYOUT_DEBUG } from '$lib/debug';
	import Card from '../Card.svelte';
	import GitHubRepoLink from '../GitHubRepoLink.svelte';

	const screenshot_path = '/project_showcase/planck_keyboard_layer_0.png';
	const title = "Custom Keymap for 'Planck' Ortholinear Keyboard";
	const description = [
		`I thought
	I'd share the keymapping I spent some time refining.  This was primarily used at
	work, coding.  It went through a bunch of iterations, it's still not perfect,
	but it works way better than a regular keyboard.`
	];
</script>

<Card {screenshot_path} {title} {description}>
	{#snippet links()}
		<div class="flex flex-wrap items-center justify-end gap-4 {LAYOUT_DEBUG && 'bg-slate-100'}">
			<GitHubRepoLink repository_url="https://github.com/ageofabenius/planck-keyboard" />
		</div>
	{/snippet}
</Card>
