<script>
	import { LAYOUT_DEBUG } from '$lib/debug';
	import PageHeader from '$lib/PageHeader.svelte';
</script>

<div class="h-dvh w-full">
	<PageHeader page_title="About Me" left_link={{ content: 'Home', href: '/' }} />
	<div
		class="
		grid gap-[10%] px-[15%]
		py-[5%] lg:grid-cols-2
		{LAYOUT_DEBUG && 'border-2 border-green-200'}
		handwritten
		"
	>
		<div class="prose {LAYOUT_DEBUG && 'border-2 border-blue-200'}">
			<h1>Hi, I'm Ben.</h1>
			<p>I write software.</p>
			<p>
				Some of it runs on-prem. Some of it runs in the cloud. Some of it is currently running on
				satellites orbiting the Earth.
			</p>
			<p>
				I'm mostly a backend and systems developer. In my spare time I like playing around with
				other things like frontend frameworks (hence this site), game engines, and deep Rust rabbit
				holes.
			</p>
			<p>
				This is the second iteration of this site. There will be no third iteration as a
				long-running child process is currently consuming most of my resources.
			</p>
		</div>
		<div class="prose text-center {LAYOUT_DEBUG && 'border-2 border-purple-200'}">
			<h1>Connect</h1>
			<hr class="h-0.5 w-full bg-linear-to-r from-transparent via-neutral-500 opacity-50" />
			<div class="flex flex-col items-center">
				<a href="https://www.linkedin.com/in/davidsonbenjamin/" target="_blank">
					<img src="LI-Logo.png" alt="LinkedIn Profile" class="h-10" />
				</a>
				<a href="https://github.com/ageofabenius" target="_blank" class="flex items-center">
					<img src="github-mark.svg" alt="GitHub invertocat" class="h-8" />
					<img src="GitHub_Logo.png" alt="GitHub source" class="h-10" />
				</a>
			</div>
		</div>
	</div>
</div>
