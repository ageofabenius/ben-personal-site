<script lang="ts">
	import { dedent } from 'ts-dedent';
	import Laptop from './Laptop.svelte';
	import Sticker from './Sticker.svelte';

	const RUST = `
    # Rust
    
    A language empowering everyone
to build reliable and efficient software.
    `;
</script>

<div class="flex h-dvh w-full items-center justify-center">
	<Laptop>
		<Sticker
			img_file_path="/stickers/cuddlyferris.svg"
			grid_coords="col-start-1 row-start-1"
			postit_content={dedent(`
			# Rust
			**language**

			My experience is rated 4.7/6 by ChatGPT?
			`)}
		/>
		<Sticker
			img_file_path="/stickers/python-logo-only.png"
			postit_content={dedent(`
			# Python
			**language**

			Everybody knows Python
			`)}
		/>
		<Sticker
			img_file_path="/stickers/ts-logo-512.png"
			postit_content={dedent(`
			# Typescript
			**language**

			Righting the wrongs of the past`)}
		/>
		<Sticker
			img_file_path="/stickers/svelte-logo-square.svg"
			postit_content={dedent(`
			# Svelte & Sveltekit
			**web framework**

			Brought you this website
			`)}
		/>
	</Laptop>
</div>
