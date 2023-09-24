<script>
	import LinkedInLogo from '$lib/assets/LinkedIn-Logos/LI-Logo.png';
    import GitHubLogo from '$lib/assets/GitHub-Logos/GitHub-Logos/GitHub_Logo.png';
</script>

<div class="container h-full mx-auto justify-center items-center space-x-4 px-20 grid grid-cols-1 md:grid-cols-2 gap-28">
	<div class="container mx-auto justify-center items-center space-y-4">
		<article class="prose prose-lg">
			<h1>About me</h1>
			<hr class="w-full h-0.5 bg-gradient-to-r from-transparent via-neutral-500 opacity-50" />
			<p>I like dogs.</p>
					<p>
			I build this website as a learning exercise, trying keep up with the new frameworks of the time.
		</p>
		<p>
			I'm hoping that in my tinkering I can start finding the time to wrap up my little projects into presentable states where they're interesting enough to earn a space in my, empty, sidebar.
		</p>
		<p>
			I will probably never update this site again.
		</p>
		</article>
	</div>
	<div class="container mx-auto flex justify-center items-center flex-col space-y-4">
		<div class="prose prose-lg">
			<h1>Connect</h1>
			<hr class="w-full h-0.5 bg-gradient-to-r from-transparent via-neutral-500 opacity-50" />
			<a href="https://www.linkedin.com/in/davidsonbenjamin/" target="_blank" >
				<img
				src={LinkedInLogo}
				alt="LinkedIn Profile"
				class="max-h-10"
				/>
				<!-- 540 * 2212 original size -->
			</a>
			<a href="https://github.com/ageofabenius">
				<img src={GitHubLogo}
                alt="GitHub source"
                class="max-h-10"
                />
			</a>
		</div>
	</div>
</div>
