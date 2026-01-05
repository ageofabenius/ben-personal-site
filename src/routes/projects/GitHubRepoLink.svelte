<script lang="ts">
	let { repository_url }: { repository_url: string } = $props();
</script>

<div class="flex flex-col gap-4 p-2 lg:col-span-2">
	<a
		href={repository_url}
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
