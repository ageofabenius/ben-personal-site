<script>
	import { Avatar, filter, NoirLight } from '@skeletonlabs/skeleton';
	import MyPhoto from '$lib/assets/my_photo.jpeg'
</script>

<div class="container h-full mx-auto flex justify-center items-center flex-col space-y-4">
	<div use:filter={'#NoirLight'}>
		<NoirLight />
		<Avatar
			src={MyPhoto}
			width="w-32"
			rounded="rounded-full"
		/>
	</div>
	<div>
		<hr class="w-96" />
	</div>
	<div>
		<p class="text-center">
			Welcome, there's not much here.
		</p>
	</div>
</div>
