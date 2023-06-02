<script lang="ts">
    import Story from '$lib/components/Story.svelte';
	import type { PageData } from './$types';
    export let data: PageData;
	const pageTitle = 'Stories';
</script>

<svelte:head>
	<title>Ilojo Bar - {pageTitle}</title>
</svelte:head>

<div>
<Story stories={data.stories}/>	
</div>
<!-- {#each data.stories as story}
	<Story
		storyTitle={story.title}
		storyImage={story.thumbnail.url}
		storyLink="/stories/{story.id}"
	/>
     {/each} -->


