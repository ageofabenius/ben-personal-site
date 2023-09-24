<script>
	import '../app.postcss';
	import { AppShell, AppBar, AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">
					<a href="/" class="btn hover:variant-filled-primary">Ben Davidson</a>
				</strong>
			</svelte:fragment>
			<svelte:fragment slot="default">Test site, please ignore</svelte:fragment>
			<svelte:fragment slot="headline">Projects</svelte:fragment>
			<svelte:fragment slot="trail">
				<div>
					<a href="/" class="btn hover:variant-filled-primary">Home</a>
					<a href="/about" class="btn hover:variant-filled-primary">About</a>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<AppRail>
			<svelte:fragment slot="lead">
				<AppRailAnchor href="/projects/personal-site">This site</AppRailAnchor>
			</svelte:fragment>
		</AppRail>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
