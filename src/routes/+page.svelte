<script>
	import { Avatar, filter, NoirLight } from '@skeletonlabs/skeleton';
	import MyPhoto from '$lib/assets/my_photo.jpeg';
	import { fade } from 'svelte/transition';
</script>

<div class="container h-full mx-auto flex justify-center items-center flex-col space-y-4">
	<div use:filter={'#NoirLight'}>
		<NoirLight />
		<Avatar src={MyPhoto} width="w-32" rounded="rounded-full" />
	</div>
	<div in:fade={{ delay: 1000, duration: 1000}}>
		<!-- <hr class="w-96 h-1 bg-neutral-500 border-0" /> -->
		<hr class="w-96 h-0.5 bg-gradient-to-r from-transparent via-neutral-500 opacity-50" />
	</div>
	<div in:fade={{ delay: 1000, duration: 1000}}>
		<p class="text-center blockquote">
			With this personal website, I look like I know what I'm doing!
		</p>
	</div>

</div>
