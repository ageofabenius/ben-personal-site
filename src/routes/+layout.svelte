<script>
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Ben Davidson</strong>
			</svelte:fragment>
			<svelte:fragment slot="headline">
				Test site, please ignore
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div >
				<a href="/" class="btn hover:variant-filled-primary">Home</a>
				<a href="/about" class="btn hover:variant-filled-primary">About</a>
			</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
