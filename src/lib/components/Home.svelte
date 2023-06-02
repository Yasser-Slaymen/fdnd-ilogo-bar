<script lang="ts">
	import HomeHeader from './HomeHeader.svelte';
	import { gsap } from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import Story from './Story.svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		let scrollTL = gsap.timeline({
			scrollTrigger: {
				trigger: '.ilojo-bar-section',
				start: 'top top',
				end: '+=100%',
				scrub: true,
				pin: '.ilojo-bar-section'
			}
		});

		scrollTL
			.from('.scroll_cont', { scale: 1 }, '<')
			.fromTo('#color_building', { opacity: 0 }, { opacity: 1 }, '<')
			.fromTo('#background', { opacity: 1 }, { opacity: 0 }, '-=50%')
			.fromTo('#overlay', { opacity: 1, scale: 1 }, { opacity: 0, scale: 1.05 }, '<25%');
	});
</script>
<HomeHeader />
<main>
	<section class="ilojo-bar-section">
		<div class="scroll_cont">
			<!-- <img src="/assets/images/ilojo_bar_bw_2.png" alt="Colored Ilojo bar" /> -->
			<img
				id="background"
				src="/assets/images/ilojo_bar_bw_1.jpg"
				alt="Ilojo bar old with environment"
			/>
			<img id="color_building" src="/assets/images/ilojo_bar_bw_2.png" alt="Colored Ilojo bar" />
			<img
				id="overlay"
				src="/assets/images/ilojo_bar_bw_3.png"
				alt="Ilojo bar old with environment"
			/>
		</div>

	</section>
</main>

<style>
	main {
		padding: 0;
		overflow: hidden;
	}
	section {
		background-image: url('/assets/images/background.webp');
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
		height: 100vh;
		width: 100vw;
		position: relative;
	}

	.scroll_cont {
		transform: scale(1.6);
		transform-origin: 86% 50%;
		height: 100%;
	}

	section img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 69% center;
		display: block;
		position: absolute;
	}

	#overlay {
		transform-origin: 80% 50%;
	}

	#background,
	#overlay,
	#color_building {
		opacity: 0;
	}
	/* .windoIcons{
		
	} */

	@media(max-width:55rem) {
		section img {
			object-position: 62% center !important;
		}
	}
</style>
