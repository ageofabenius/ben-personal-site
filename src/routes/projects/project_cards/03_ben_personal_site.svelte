<script>
	import { LAYOUT_DEBUG } from '$lib/debug';
	import Card from '../Card.svelte';
	import GitHubRepoLink from '../GitHubRepoLink.svelte';

	const screenshot_path = '/project_showcase/personal_site_landing_page_laptop.png';
	const title = 'This website';
	const description = [
		`This is a playground and personal portfolio.`,
		`In its current iteration, it's built with Sveltekit.`,
		`Check it out on GitHub.`
	];
</script>

<Card {screenshot_path} {title} {description}>
	{#snippet links()}
		<div class="flex flex-wrap items-center justify-end gap-4 {LAYOUT_DEBUG && 'bg-slate-100'}">
			<GitHubRepoLink repository_url="https://github.com/ageofabenius/ben-personal-site" />
		</div>
	{/snippet}
</Card>
