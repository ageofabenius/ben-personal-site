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
			<Sticker content="Rust">
				<image
					class="size-full"
					href="/stickers/cuddlyferris.svg"
					preserveAspectRatio="xMidYMid meet"
				/>
			</Sticker>

			<Sticker content="Python">
				<image
					href="/stickers/python-logo-only.png"
					class="size-full"
					preserveAspectRatio="xMidYMid meet"
				/>
			</Sticker>

			<Sticker content="Typescript">
				<image
					href="/stickers/ts-logo-512.png"
					class="size-full"
					preserveAspectRatio="xMidYMid meet"
				/>
			</Sticker>

			<Sticker content="Sveltekit">
				<image
					href="/stickers/svelte-logo-square.svg"
					class="size-full"
					preserveAspectRatio="xMidYMid meet"
				/>
			</Sticker>

			<Sticker content="PostgreSQL">
				<image
					href="/stickers/PostgreSQL_logo.3colors.svg"
					class="size-full"
					preserveAspectRatio="xMidYMid meet"
				/>
			</Sticker>

			<Sticker content="Docker">
				<image
					href="/stickers/docker-mark-blue.svg"
					class="size-full"
					preserveAspectRatio="xMidYMid meet"
				/>
			</Sticker>
		</div>

		<!-- Personal -->
		<div
			class="
			col-span-4
			col-start-6
			row-start-5
			grid grid-cols-subgrid grid-rows-subgrid
			stroke-black
			"
		>
			<Sticker callout_direction="bottom" content="Fatherhood">
				{@html StrollerIcon}
			</Sticker>

			<Sticker callout_direction="bottom" content="Dogs">
				{@html DogIcon}
			</Sticker>

			<Sticker callout_direction="bottom" content="Running">
				{@html ShoeIcon}
			</Sticker>

			<Sticker callout_direction="bottom" content="Computers!">
				{@html MouseIcon}
			</Sticker>
		</div>
	</Laptop>
</div>
