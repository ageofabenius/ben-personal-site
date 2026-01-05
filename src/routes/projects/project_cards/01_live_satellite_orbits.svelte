<script>
	import { LAYOUT_DEBUG } from '$lib/debug';
	import Card from '../Card.svelte';
	import GitHubRepoLink from '../GitHubRepoLink.svelte';

	const screenshot_path = '/project_showcase/livesatelliteorbits.png';
	const title = 'Live Satellite Orbits';
	const description = [
		`A three-dimensional visualization of the Earth and all (~14,000) publicly-known satellites in
		orbit, driven by real-time TLE propagation.`,
		`It features GPU-accelerated Three.js rendering, a
		decoupled fixed-timestep simulation with interpolated rendering, and a backend cache fed from
		Celestrak.`
	];
</script>

<Card {screenshot_path} fit_screenshot_vertically={true} {title} {description}>
	{#snippet links()}
		<div class="flex flex-wrap items-center justify-between gap-4 {LAYOUT_DEBUG && 'bg-slate-100'}">
			<div
				class="flex flex-col items-center overflow-hidden rounded-lg sm:flex-row {LAYOUT_DEBUG &&
					'bg-red-200'}"
			>
				<div class="flex w-full items-center justify-center gap-2 bg-emerald-100 px-2.5 text-sm">
					<div class="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></div>
					<span>live at</span>
				</div>
				<a
					href="https://livesatelliteorbits.com"
					target="_blank"
					class="h-full
                        bg-black/10 pr-2
                        pl-2
                        font-mono text-sm text-blue-700 underline underline-offset-2 hover:text-blue-900
                    "
				>
					livesatelliteorbits.com
				</a>
			</div>

			<GitHubRepoLink repository_url="https://github.com/ageofabenius/live-satellite-orbits" />
		</div>
	{/snippet}
</Card>
