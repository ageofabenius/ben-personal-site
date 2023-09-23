<script>
	import { filter, Noir } from '@skeletonlabs/skeleton';
	import LinkedInLogo from '$lib/assets/LinkedIn-Logos/LI-Logo.png';
</script>

<div class="container h-full mx-auto flex justify-center items-center flex-row space-x-4 px-20">
	<div class="container mx-auto flex justify-center items-center flex-col space-y-4">
		<article class="prose prose-lg">
			<h1>About me</h1>
			<p>I like dogs.</p>
            <p>That's pretty much all you need to know.</p>
		</article>
	</div>
	<div class="container mx-auto flex justify-center items-center flex-col space-y-4">
		<a href="https://www.linkedin.com/in/davidsonbenjamin/" target="_blank" use:filter={'#Noir'}>
			<Noir />
			<img
				src={LinkedInLogo}
				alt="LinkedIn Profile"
				class="max-h-10"
			/>
			<!-- 540 * 2212 original size -->
		</a>
	</div>
</div>
