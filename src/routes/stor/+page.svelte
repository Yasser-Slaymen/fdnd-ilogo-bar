<script lang="ts">
     import type { PageData } from './$types';
    export let data: PageData;
</script>

<section class="story">
	{#each data.story as storys}
	<h1 class="story__title"><span>{storys.title}</span></h1>
	<p class="story__author"><span>Written By: {storys.createdBy.name}</span></p>
	<div class="story__content">
		{@html storys.content.html}
	</div>
	{/each}
</section>

<style>
	.story {
		padding: 9em 1em;
	}

	.story__title {
		font-size: 2.5rem;
		text-align: center;
		overflow: hidden;
	}

	.story__title span,
	.story__author span {
    display: block;
	}

	.story__author {
		font-size: 1.5rem;
		font-weight: bold;
		padding: 1rem 0 4rem 0;
		text-align: center;
		overflow: hidden;
	}

	.story__content {
		font-size: 1.5rem;
		line-height: 2rem;
		display: grid;
		grid-template-columns: 1fr;
		justify-items: center;
		gap: 2rem;
	}

	.story__links {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 1.5rem 0 0;
	}

	.story__links--link {
		position: relative;
		border-radius: 0.7rem;
		padding: 1rem 2rem;
		filter: contrast(110%) brightness(100%);
		background: var(--link-background);
		color: var(--color-white);
		box-shadow: var(--box-shadow);
		text-decoration: none;
		transition: 0.3s ease-in-out;
	}

	.story__links--link:hover {
		transform: scale(1.2);
	}

	:global(.story__content > img) {
		width: 100%;
    height: 20em;
		object-fit: cover;
		object-position: left top;
	}

	:global(.story__content > p:not(:last-child), img:not(:last-child)) {
		margin-bottom: 8em;
	}

	@media (min-width: 70em) {
		.story {
			padding: 9em 20em;
		}

		.story__content {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
