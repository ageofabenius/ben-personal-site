<script>
	let { children } = $props();
</script>

<div class="aspect-16/10 max-h-full max-w-full perspective-midrange">
	<!-- Laptop screen -->
	<div
		class="
          h-19/20 w-full
          origin-bottom
          -rotate-x-2

          rounded-xl
          sm:rounded-2xl
          md:rounded-3xl
          lg:rounded-4xl
          
          border-2 border-gray-600
          
          bg-gray-400
          px-[2%] pt-[2%] pb-[4%]

          shadow-[inset_4px_4px_0_0_rgba(255,255,255,0.22),inset_-4px_-4px_0_0_rgba(0,0,0,0.35)]
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
		<div
			class="grid size-full grid-cols-9 grid-rows-5 items-center
      gap-1 sm:gap-2 lg:gap-4 xl:gap-6
    "
		>
			<!-- Logo -->
			<!-- Position in center of screen -->
			<div class="col-start-5 row-start-3 flex items-center justify-center">
				<!-- Style the logo div -->
				<div
					class="
                  flex
                  aspect-square size-full
                  items-center justify-center rounded-full
                  bg-gray-500/30
                  shadow-[inset_0.25px_0.5px_0_rgba(0,0,0,0.35)]
                "
				>
					<div
						class="
            text-center
            text-[clamp(0.5rem,5vw,5rem)]
            font-bold
            "
					>
						B
					</div>
				</div>
			</div>

			{@render children()}
		</div>
	</div>
	<!-- Laptop base -->
	<div
		class="
          h-1/20 w-full
          rounded-sm
          sm:rounded-md
          md:rounded-md
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
              h-2/25 w-1/8
              -translate-x-1/2
              border-2
              border-gray-600 bg-gray-400
              shadow-[1px_0_0_0_rgba(0,0,0,1),-1px_0_0_0_rgba(0,0,0,1),0_-1px_0_0_rgba(0,0,0,1),inset_2px_4px_0_0_rgba(255,255,255,0.22),inset_-2px_-6px_0_0_rgba(0,0,0,0.30)]
            "
		></div>
		<div
			class="
              absolute right-1/6
              bottom-0
              h-2/25 w-1/8
              translate-x-1/2
              border-2
              border-gray-600 bg-gray-400
              shadow-[1px_0_0_0_rgba(0,0,0,1),-1px_0_0_0_rgba(0,0,0,1),0_-1px_0_0_rgba(0,0,0,1),inset_2px_4px_0_0_rgba(255,255,255,0.22),inset_-2px_-6px_0_0_rgba(0,0,0,0.30)]
            "
		></div>
	</div>
</div>
