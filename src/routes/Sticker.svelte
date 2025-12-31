<script lang="ts">
	let {
		img_file_path
	}: {
		img_file_path: string;
	} = $props();
</script>

<div
	class="
      size-24
      cursor-pointer
      p-0.5
      hover:scale-110
      transition
      duration-300
    "
>
	<svg viewBox="0 0 512 512" class="overflow-visible">
		<defs>
			<filter id="sticker-base" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<!-- 1. Close small interior holes -->
				<feMorphology in="SourceAlpha" operator="dilate" radius="50" result="d1" />
				<feMorphology in="d1" operator="erode" radius="50" result="closed" />

				<!-- 2. Expand for outline -->
				<feMorphology in="closed" operator="dilate" radius="25" result="outline" />

				<!-- 3. Smooth the edge -->
				<feGaussianBlur in="outline" stdDeviation="20" result="blurred" />

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
				<feFlood flood-color="white" result="color" />
				<feComposite in="color" in2="smoothAlpha" operator="in" result="outlineColor" />

				<!-- 6. Merge original image -->
				<feMerge>
					<feMergeNode in="outlineColor" />
					<feMergeNode in="SourceGraphic" />
				</feMerge>
			</filter>

			<filter id="sticker-hovered" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<!-- 1. Close small interior holes -->
				<feMorphology in="SourceAlpha" operator="dilate" radius="50" result="d1" />
				<feMorphology in="d1" operator="erode" radius="50" result="closed" />

				<!-- 2. Expand for outline -->
				<feMorphology in="closed" operator="dilate" radius="25" result="outline" />

				<!-- 3. Smooth the edge -->
				<feGaussianBlur in="outline" stdDeviation="20" result="blurred" />

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
				<feFlood flood-color="white" result="color" />
				<feComposite in="color" in2="smoothAlpha" operator="in" result="outlineColor" />

				<!-- 6. Merge original image -->
				<feMerge>
					<feMergeNode in="outlineColor" />
					<feMergeNode in="SourceGraphic" />
				</feMerge>

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

		<image
			href={img_file_path}
			x="0"
			y="0"
			width="512"
			height="512"
			preserveAspectRatio="xMidYMid meet"
			class="sticker-image"
		/>
	</svg>
</div>

<style>
	.sticker-image {
		filter: url(#sticker-base);
	}
	:hover .sticker-image {
		filter: url(#sticker-hovered);
	}
</style>
