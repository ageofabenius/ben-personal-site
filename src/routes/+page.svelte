<script lang="ts">
	import Sticker from './Sticker.svelte';
</script>

<!-- Page -->
<div class="flex h-dvh w-full items-center justify-center">
	<!-- Laptop -->
	<div class="perspective-midrange">
		<!-- Laptop screen -->
		<div
			class="
          h-160 w-240
          origin-bottom
          -rotate-x-2
          rounded-4xl border-2

          border-gray-600
          
          bg-gray-400
          p-4

          pb-8 shadow-[inset_4px_4px_0_0_rgba(255,255,255,0.22),inset_-4px_-4px_0_0_rgba(0,0,0,0.35)]
        "
		>
			<!-- Screen glow -->
			<div
				class="
          pointer-events-none
          absolute inset-0
          rounded-[3rem]
          bg-[radial-gradient(200%_200%_at_50%_0%,rgba(255,210,138,0.15),rgba(255,210,138,0.00),transparent_60%)]
        "
			></div>

			<!-- Screen contents -->
			<div class="grid size-full grid-cols-9 grid-rows-5 items-center gap-2">
				<!-- Logo -->
				<!-- Position in center of screen -->
				<div class="col-start-5 row-start-3 flex items-center justify-center">
					<!-- Style the logo div -->
					<div
						class="
                  flex
                  size-24
                  items-center justify-center rounded-full
                  bg-gray-500/30
                "
					>
						<div class="text-center text-5xl font-bold">B</div>
					</div>
				</div>

				<Sticker img_file_path="/stickers/rust-logo-512x512-blk.png" />
				<Sticker img_file_path="/stickers/cuddlyferris.svg" />
				<Sticker img_file_path="/stickers/python-logo-only.png" />
			</div>
		</div>
		<!-- Laptop base -->
		<div
			class="
          h-8 w-240
          rounded-lg
          border-2
          border-gray-600 bg-gray-400

          shadow-[inset_0_2px_0_rgba(0,0,0,0.35),inset_0_0_0_4px_rgba(255,255,255,0.08),0_18px_35px_rgba(0,0,0,0.45)]
        "
		>
			<!-- Laptop hinges -->
			<div
				class="
              absolute bottom-0
              left-1/6
              h-14 w-32
              -translate-x-1/2
              border-2
              border-gray-600 bg-gray-400
              shadow-[1px_0_0_0_rgba(0,0,0,1),-1px_0_0_0_rgba(0,0,0,1),0_-1px_0_0_rgba(0,0,0,1),inset_2px_4px_0_0_rgba(255,255,255,0.22),inset_-2px_-6px_0_0_rgba(0,0,0,0.30)]
            "
			/>
			<div
				class="
              absolute right-1/6
              bottom-0
              h-14 w-32
              translate-x-1/2
              border-2
              border-gray-600 bg-gray-400
              shadow-[1px_0_0_0_rgba(0,0,0,1),-1px_0_0_0_rgba(0,0,0,1),0_-1px_0_0_rgba(0,0,0,1),inset_2px_4px_0_0_rgba(255,255,255,0.22),inset_-2px_-6px_0_0_rgba(0,0,0,0.30)]
            "
			/>
		</div>
	</div>
</div>
