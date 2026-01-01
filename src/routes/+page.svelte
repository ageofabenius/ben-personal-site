<script lang="ts">
	import { dedent } from 'ts-dedent';
	import Laptop from './Laptop.svelte';
	import Sticker from './Sticker.svelte';

	import ShoeIcon from '$lib/assets/stickers/shoe.svg?raw';
	import StrollerIcon from '$lib/assets/stickers/stroller.svg?raw';
	import DogIcon from '$lib/assets/stickers/dog.svg?raw';
	import MouseIcon from '$lib/assets/stickers/mouse.svg?raw';

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
				/>
			</Sticker>
			<Sticker
				postit_content={dedent(`
			# PostgreSQL
			**database**

			And also everything else
			`)}
			>
				<image
					href="/stickers/PostgreSQL_logo.3colors.svg"
					width="512"
					height="512"
					preserveAspectRatio="xMidYMid meet"
				/>
			</Sticker>
		</div>

		<!-- Personal -->
		<div
			class="
			col-span-9 row-span-1
			row-start-5
			grid grid-cols-subgrid grid-rows-subgrid stroke-black
			[direction:rtl]
			"
		>
			<Sticker>
				{@html MouseIcon}
			</Sticker>
			<Sticker>
				{@html ShoeIcon}
			</Sticker>
			<Sticker>
				{@html DogIcon}
			</Sticker>
			<Sticker>
				{@html StrollerIcon}
			</Sticker>
		</div>
	</Laptop>
</div>
