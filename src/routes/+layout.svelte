<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onNavigate } from '$app/navigation';
	import { nav_direction } from '$lib/navigate';

	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		document.documentElement.dataset.nav = $nav_direction;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}

<style>
	@keyframes slide-from-right {
		from {
			transform: translateX(100%);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-100%);
		}
	}

	@keyframes slide-from-left {
		from {
			transform: translateX(-100%);
		}
	}

	@keyframes slide-to-right {
		to {
			transform: translateX(100%);
		}
	}

	:root[data-nav='right']::view-transition-old(root) {
		animation: 1000ms both slide-to-left;
	}

	:root[data-nav='right']::view-transition-new(root) {
		animation: 1000ms both slide-from-right;
	}

	:root[data-nav='left']::view-transition-old(root) {
		animation: 1000ms both slide-to-right;
	}

	:root[data-nav='left']::view-transition-new(root) {
		animation: 1000ms both slide-from-left;
	}
</style>
