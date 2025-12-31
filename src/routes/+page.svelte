<script lang="ts">
	import Laptop from './Laptop.svelte';
	import Sticker from './Sticker.svelte';
</script>

<div class="flex h-dvh w-full items-center justify-center">
	<Laptop>
		<Sticker img_file_path="/stickers/rust-logo-512x512-blk.png" />
		<Sticker img_file_path="/stickers/cuddlyferris.svg" />
		<Sticker img_file_path="/stickers/python-logo-only.png" />
		<Sticker img_file_path="/stickers/ts-logo-512.png" />
		<Sticker img_file_path="/stickers/svelte-logo-square.svg" />
	</Laptop>
</div>
