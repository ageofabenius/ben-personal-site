<script>
	import { LAYOUT_DEBUG } from '$lib/debug';
	import { navigate_right } from '$lib/navigate';
	import PageHeader from '$lib/PageHeader.svelte';
	import Card from './Card.svelte';
</script>

<div class="h-dvh w-full">
	<PageHeader>
		<div></div>
		<span>Projects</span>
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
			<Card
				screenshot_path="/project_showcase/livesatelliteorbits.png"
				title="Live Satellite Orbits"
				description="A three-dimensional visualization of the Earth and all (~14,000) publicly-known satellites in
			orbit, driven by real-time TLE propagation. It features GPU-accelerated Three.js rendering, a
			decoupled fixed-timestep simulation with interpolated rendering, and a backend cache fed from
			Celestrak."
			>
				{#snippet links()}
					<div class="flex items-center justify-between gap-4 {LAYOUT_DEBUG && 'bg-slate-100'}">
						<div class="flex h-6 items-center {LAYOUT_DEBUG && 'bg-lime-100'}">
							<div
								class="flex h-full items-center gap-2 rounded-l-full bg-emerald-100 px-2.5 text-sm"
							>
								<div class="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></div>
								live at
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
								Repository ↗
							</a>
						</div>
					</div>
				{/snippet}
			</Card>
		</div>
	</div>
</div>
