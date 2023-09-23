<script>
    import { filter, Noir } from '@skeletonlabs/skeleton';
</script>

<div class="container h-full mx-auto flex justify-center items-center flex-row space-x-4">
    <div class="container mx-auto flex justify-center items-center flex-col space-y-4">
        <article class="prose prose-lg">
            <h1>About me</h1>
            <p>I like dogs.</p>
        </article>
    </div>
    <div class="container mx-auto flex justify-center items-center flex-col space-y-4">
        <a href="https://www.linkedin.com/in/davidsonbenjamin/" target="_blank">
            <Noir />
            <img
            src="src/lib/LinkedIn-Logos/LI-Logo.png"
            alt="LinkedIn Profile"
            use:filter={'#Noir'}
            class="max-h-10"
            />
            <!-- 540 * 2212 original size -->
        </a>
    </div>
</div>
