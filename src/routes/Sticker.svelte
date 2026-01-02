<script lang="ts">
	import Callout from './Callout.svelte';

	let {
		sticker_background = 'white',
		content = '',
		callout_direction = 'top',
		children
	}: {
		sticker_background?: string;
		content?: string;
		callout_direction?: 'top' | 'bottom';
		children: any;
	} = $props();

	// Generate unique filter names based on the sticker_background color
	// (filters are global and so will otherwise conflict)
	// svelte-ignore state_referenced_locally
	const filter_base_name = `sticker-base-${sticker_background}`;
	// svelte-ignore state_referenced_locally
	const filter_hovered_name = `sticker-hovered-${sticker_background}`;

	let is_hovered = $state(false);
</script>

{#snippet base_filter()}
	<!-- 1. Close small interior holes using multiple steps with small radii-->
	<feMorphology in="SourceAlpha" operator="dilate" radius="25" result="close_dilate_1" />
	<feMorphology in="close_dilate_1" operator="dilate" radius="25" result="close_dilate_2" />
	<feMorphology in="close_dilate_2" operator="dilate" radius="25" result="close_dilate_3" />
	<feMorphology in="close_dilate_3" operator="dilate" radius="25" result="closed_dilate_4" />

	<feMorphology in="closed_dilate_4" operator="erode" radius="25" result="closed_1" />
	<feMorphology in="closed_1" operator="erode" radius="25" result="closed_2" />
	<feMorphology in="closed_2" operator="erode" radius="25" result="closed_3" />
	<feMorphology in="closed_3" operator="erode" radius="25" result="closed" />

	<!-- 2. Expand for outline -->
	<feMorphology in="closed" operator="dilate" radius="35" result="outline" />
	<feComposite in="outline" in2="closed" operator="over" result="combined" />

	<!-- 3. Smooth the edge -->
	<feGaussianBlur in="combined" stdDeviation="20" result="blurred" />

	<!-- 4. Re-crisp alpha (threshold) -->
	<feColorMatrix
		in="blurred"
		type="matrix"
		result="smoothAlpha"
		values="
                    1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 12 -6
                    "
	/>

	<!-- 5. Color the outline -->
	<feFlood flood-color={sticker_background} result="color" />
	<feComposite in="color" in2="smoothAlpha" operator="in" result="outlineColor" />

	<!-- 6. Merge original image -->
	<feMerge>
		<feMergeNode in="outlineColor" />
		<feMergeNode in="SourceGraphic" />
	</feMerge>
{/snippet}

<div class="relative size-full">
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="
		size-full
		cursor-pointer
		p-0.5
		transition
		duration-300
		hover:scale-110
		hover:-rotate-5
		"
		onmouseenter={() => (is_hovered = true)}
		onmouseleave={() => (is_hovered = false)}
	>
		<svg viewBox="0 0 512 512" class="size-full overflow-visible">
			<defs>
				<filter
					id={filter_base_name}
					filterUnits="userSpaceOnUse"
					x="-200"
					y="-200"
					width="400%"
					height="400%"
					color-interpolation-filters="sRGB"
				>
					{@render base_filter()}
				</filter>

				<filter
					id={filter_hovered_name}
					filterUnits="userSpaceOnUse"
					x="-200"
					y="-200"
					width="400%"
					height="400%"
					color-interpolation-filters="sRGB"
				>
					{@render base_filter()}

					<!-- 7. Shadow from that merged sticker -->
					<feDropShadow
						in="sticker"
						dx="25"
						dy="25"
						stdDeviation="10"
						flood-color="rgb(107 114 128)"
						flood-opacity="0.45"
						result="shadow"
					/>

					<!-- 8. Shadow behind sticker -->
					<feMerge>
						<feMergeNode in="shadow" />
						<feMergeNode in="sticker" />
					</feMerge>
				</filter>
			</defs>

			<g filter="url(#{is_hovered ? filter_hovered_name : filter_base_name})">
				{@render children()}
			</g>
		</svg>
	</div>
	{#if content && is_hovered}
		<Callout {content} direction={callout_direction} />
	{/if}
</div>
