<script lang="ts">
	let {
		content,
		direction
	}: {
		content: string;
		direction: 'top' | 'bottom';
	} = $props();
</script>

<!-- This outer div provides a reference point to the center of the sticker -->
<div
	class="
    pointer-events-none
    absolute
    top-1/2 left-1/2
    size-full
    -translate-x-1/2
	-translate-y-1/2
    "
>
	<!-- This div provides an offset from the center of the sticker -->
	<div
		class="
            relative
			 size-full
            {direction === 'top' ? 'translate-x-1/2 -translate-y-5/3' : ''}
            {direction === 'bottom' ? 'translate-x-2/3 translate-y-5/2' : ''}
        "
	>
		<!-- Arrow -->
		<div
			class="
            size-full stroke-black/50
            {direction === 'top' ? '-scale-y-100 rotate-100' : ''}
            {direction === 'bottom' ? '-rotate-110' : ''}
            "
		>
			<svg
				viewBox="0 0 120 120"
				fill="none"
				class="arrow-svg"
				aria-hidden="true"
				stroke-width="6"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path
					d="
                    M 5 90
                    C 20 70, 50 60, 80 60
                    "
				/>

				<path
					d="
                    M 90 40
                    L 115 60
                    L 90 80
                    "
				/>
			</svg>
		</div>

		<!-- Callout -->
		<div
			class="
                absolute
                {direction === 'top' ? '-top-1/4 left-full -translate-y-1/2' : ''}
                {direction === 'bottom'
				? '-bottom-1/4 left-full translate-x-1/10 translate-y-1/2'
				: ''}
            "
		>
			<div class="handwritten size-full text-[clamp(0.5rem,5vw,2rem)] font-semibold text-black/50">
				{content}
			</div>
		</div>
	</div>
</div>
