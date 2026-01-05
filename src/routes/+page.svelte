<script lang="ts">
	import Laptop from './Laptop.svelte';
	import Sticker from './Sticker.svelte';

	import ShoeIcon from '$lib/assets/stickers/shoe.svg?raw';
	import StrollerIcon from '$lib/assets/stickers/stroller.svg?raw';
	import DogIcon from '$lib/assets/stickers/dog.svg?raw';
	import MouseIcon from '$lib/assets/stickers/mouse.svg?raw';
	import { LAYOUT_DEBUG } from '$lib/debug';
	import PageHeader from '$lib/PageHeader.svelte';
</script>

<div class="flex h-dvh w-full flex-col">
	<PageHeader
		left_link={{ content: 'Projects', href: '/projects' }}
		right_link={{ content: 'About', href: '/about' }}
	/>

	<!-- Spacer -->
	<div class="h-1/16 shrink-0 xl:h-1/8 {LAYOUT_DEBUG && 'bg-orange-100'}"></div>
	<!-- Laptop -->
	<div class="flex grow flex-col items-center {LAYOUT_DEBUG && 'bg-green-100'}">
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
	<!-- Spacer -->
	<div class="h-1/16 shrink-0 xl:h-1/8 {LAYOUT_DEBUG && 'bg-orange-100'}"></div>
</div>
