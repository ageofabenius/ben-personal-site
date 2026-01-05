<script>
	import { LAYOUT_DEBUG } from '$lib/debug';
	import Card from '../Card.svelte';
</script>

<Card
	screenshot_path="/project_showcase/livesatelliteorbits.png"
	title="Live Satellite Orbits"
	description="A three-dimensional visualization of the Earth and all (~14,000) publicly-known satellites in
			orbit, driven by real-time TLE propagation. It features GPU-accelerated Three.js rendering, a
			decoupled fixed-timestep simulation with interpolated rendering, and a backend cache fed from
			Celestrak."
>
	{#snippet links()}
		<div class="flex flex-wrap items-center justify-between gap-4 {LAYOUT_DEBUG && 'bg-slate-100'}">
			<div class="flex h-6 items-center {LAYOUT_DEBUG && 'bg-lime-100'}">
				<div class="flex h-full items-center gap-2 rounded-l-full bg-emerald-100 px-2.5 text-sm">
					<div class="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></div>
					<span class="hidden sm:inline">live at</span>
				</div>
				<a
					href="https://livesatelliteorbits.com"
					target="_blank"
					class="h-full
                        rounded-r-lg
                        bg-black/10 pr-2
                        pl-2
                        
                        font-mono text-sm text-blue-700 underline underline-offset-2 hover:text-blue-900
                    "
				>
					livesatelliteorbits.com
				</a>
			</div>

			<div class="flex flex-col gap-4 p-2 lg:col-span-2">
				<a
					href="https://github.com/ageofabenius/live-satellite-orbits"
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
