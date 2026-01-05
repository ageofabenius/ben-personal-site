export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                hand: ['Caveat', 'cursive']
            }
        }
    },
    plugins: [require('@tailwindcss/typography')]
};