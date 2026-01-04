<script lang="ts">
	import { dedent } from 'ts-dedent';
	import Laptop from './Laptop.svelte';
	import Sticker from './Sticker.svelte';

	import ShoeIcon from '$lib/assets/stickers/shoe.svg?raw';
	import StrollerIcon from '$lib/assets/stickers/stroller.svg?raw';
	import DogIcon from '$lib/assets/stickers/dog.svg?raw';
	import MouseIcon from '$lib/assets/stickers/mouse.svg?raw';
	import { LAYOUT_DEBUG } from '$lib/debug';

	const RUST = `
    # Rust
    
    A language empowering everyone
to build reliable and efficient software.
    `;
</script>

<div class="h-dvh w-full">
	<!-- Header row -->
	<div
		class="
		handwritten
		flex
		h-1/8
		items-center justify-between
		px-[5%]
		text-[clamp(0.5rem,5vw,2rem)] text-black/50
		{LAYOUT_DEBUG && 'bg-blue-100'}"
	>
		<span
			class="group
			cursor-pointer
			hover:font-semibold
			{LAYOUT_DEBUG && 'bg-yellow-100'}"
		>
			<span class="invisible group-hover:visible">&lt&nbsp</span>
			<span
				class="
				inline-block
				transform
				transition-transform
				duration-100
				active:-rotate-3"
			>
				Projects
			</span>
		</span>
		<span
			class="group
			cursor-pointer
			hover:font-semibold
			{LAYOUT_DEBUG && 'bg-yellow-100'}"
		>
			<span
				class="
				inline-block
				transform
				transition-transform
				duration-100
				active:rotate-3"
			>
				About
			</span>
			<span class="invisible group-hover:visible">&nbsp&gt</span>
		</span>
	</div>
	<!-- Spacer -->
	<div class="md:h-1/16 xl:h-1/8 {LAYOUT_DEBUG && 'bg-orange-100'}"></div>
	<!-- Laptop -->
	<div class="flex flex-col items-center {LAYOUT_DEBUG && 'bg-green-100'}">
		<div class="flex size-full max-h-5/8 max-w-5/8 flex-col items-center">
			<Laptop>
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
	</div>
</div>
