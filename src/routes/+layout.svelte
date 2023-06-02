<script lang="ts">
	import './styles.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '../lib/components/Header.svelte';
	import Header2 from '$lib/components/Header2.svelte';
	import Slider from '$lib/components/Slider.svelte';
	import type { PageData } from './$types';
    export let data: PageData;
</script>

<div class="app">
	<!-- <Header stories={data.stories} />	 -->
	<Header2 stories={data.stories} />	
	<main>
		<slot />
	</main>
	<!-- <Slider stories={data.stories}/> -->
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>


