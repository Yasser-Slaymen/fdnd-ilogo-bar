<script lang="ts">
	import './styles.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header2 from '$lib/components/Header2.svelte';
	import type { PageData } from './$types';
    export let data: PageData;
</script>

<div class="app">
	<Header2 stories={data.stories} />	
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>

