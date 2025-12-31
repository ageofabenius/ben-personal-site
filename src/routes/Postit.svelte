<script lang="ts">
	// @ts-expect-error ts(7016)
	import markdownit from 'markdown-it';

	let {
		content,
		placement = ''
	}: {
		content: string;
		placement?: string;
	} = $props();

	const md = markdownit({
		html: true,
		linkify: true,
		typographer: true
	});

	let markdown = $derived(md.render(content));
</script>

<div
	class="
      absolute
      z-100
      size-42
      overflow-visible
      rounded-[0.05rem]
      bg-linear-to-b
      from-[#fff7b0]
      to-[#ffef8a]
      {placement}
    "
>
	<div
		class="
        handwritten
        prose
        p-2
        prose-headings:m-0
        prose-p:m-0
        "
	>
		{@html markdown}
	</div>
</div>
