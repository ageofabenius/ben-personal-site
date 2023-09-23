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
				<strong class="text-xl uppercase">Ben Davidson</strong>
			</svelte:fragment>
			<svelte:fragment slot="default">
				Test site, please ignore
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a href="/">Home</a>
				<a href="/about">About</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- <svelte:fragment slot="sidebarLeft">
		<AppRail>
			<svelte:fragment slot="lead">
				Works
			</svelte:fragment>
			<AppRailAnchor href="/for_fun">
				For fun
			</AppRailAnchor>
			<AppRailAnchor href="/experiments">
				Experiments
			</AppRailAnchor>
		</AppRail>
	</svelte:fragment> -->
	<!-- Page Route Content -->
	<slot />
</AppShell>
