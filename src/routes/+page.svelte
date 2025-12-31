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
		<!-- Software -->
		<div class="col-span-9 row-span-2 grid grid-cols-subgrid grid-rows-subgrid">
			<Sticker
				postit_content={dedent(`
				# Rust
				**language**

				My experience is rated 4.7/6 by ChatGPT?
				`)}
			>
				<image
					href="/stickers/cuddlyferris.svg"
					width="512"
					height="512"
					preserveAspectRatio="xMidYMid meet"
					class="sticker-image"
				/>
			</Sticker>
			<Sticker
				postit_content={dedent(`
			# Python
			**language**

			Everybody knows Python
			`)}
			>
				<image
					href="/stickers/python-logo-only.png"
					width="512"
					height="512"
					preserveAspectRatio="xMidYMid meet"
					class="sticker-image"
				/>
			</Sticker>
			<Sticker
				postit_content={dedent(`
			# Typescript
			**language**

			Righting the wrongs of the past`)}
			>
				<image
					href="/stickers/ts-logo-512.png"
					width="512"
					height="512"
					preserveAspectRatio="xMidYMid meet"
					class="sticker-image"
				/>
			</Sticker>
			<Sticker
				postit_content={dedent(`
			# Svelte & Sveltekit
			**web framework**

			Brought you this website
			`)}
			>
				<image
					href="/stickers/svelte-logo-square.svg"
					width="512"
					height="512"
					preserveAspectRatio="xMidYMid meet"
					class="sticker-image"
				/>
			</Sticker>
		</div>

		<!-- Personal -->
		<div
			class="col-span-9 row-span-1 row-start-5 grid grid-cols-subgrid grid-rows-subgrid [direction:rtl]"
		>
			<!-- <Sticker img_file_path="/stickers/shoe.svg" />
			<Sticker img_file_path="/stickers/bike.svg" />
			<Sticker img_file_path="/stickers/stroller.svg" />
			<Sticker img_file_path="/stickers/controller.svg" />
			<Sticker img_file_path="/stickers/dog.svg" /> -->
		</div>
	</Laptop>
</div>
