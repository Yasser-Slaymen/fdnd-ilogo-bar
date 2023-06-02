<script lang="ts">
	import type { PageData } from './$types';
	// import { storyId } from '$lib/stores/store';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	export let data: PageData;

	onMount(() => {
		gsap.from('.story__title span, .story__author span', {
			delay: 0.25,
			yPercent: 100,
			ease: 'back.out',
			duration: 1.5
		});

		gsap.from('.story__content *:nth-child(1)', {
			delay: .5,
			x: -900,
			ease: "back.out(.6)",
			duration: 3,
		});

		gsap.from('.story__content *:nth-child(2)', {
			delay: .75,
			x: 900,
			ease: "back.out(.6)",
			duration: 3,
		});

		gsap.from('.story__content *:nth-child(3)', {
			scrollTrigger: {
				trigger: '.story__content *:nth-child(3)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: -100,
			ease: "back.out(1)",
			duration: 1.25,
		});

		gsap.from('.story__content *:nth-child(4)', {
			scrollTrigger: {
				trigger: '.story__content *:nth-child(4)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: 100,
			ease: "back.out(1)",
			duration: 1.25,
		});

		gsap.from('.story__content *:nth-child(5)', {
			scrollTrigger: {
				trigger: '.story__content *:nth-child(5)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: -100,
			ease: "back.out(1)",
			duration: 1.25,
		});

		gsap.from('.story__content *:nth-child(6)', {
			scrollTrigger: {
				trigger: '.story__content *:nth-child(6)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: 100,
			ease: "back.out(1)",
			duration: 1.25,
		});

		gsap.from('.story__content *:nth-child(7)', {
			scrollTrigger: {
				trigger: '.story__content *:nth-child(7)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: -100,
			ease: "back.out(1)",
			duration: 1.25,
		});

		gsap.from('.story__content *:nth-child(8)', {
			scrollTrigger: {
				trigger: '.story__content *:nth-child(8)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: 100,
			ease: "back.out(1)",
			duration: 1.25,
		});

		gsap.from('.story__content *:nth-child(9)', {
			scrollTrigger: {
				trigger: '.story__content *:nth-child(9)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: -100,
			ease: "back.out(1)",
			duration: 1.25,
		});

		gsap.from('.story__content *:nth-child(10)', {
			scrollTrigger: {
				trigger: '.story__content *:nth-child(10)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: 100,
			ease: "back.out(1)",
			duration: 1.25,
		});

		gsap.from('.story__content *:nth-child(11)', {
			scrollTrigger: {
				trigger: '.story__content *:nth-child(11)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: -100,
			ease: "back.out(1)",
			duration: 1.25,
		});

		gsap.from('.story__content *:nth-child(12)', {
			scrollTrigger: {
				trigger: '.story__content *:nth-child(12)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: 100,
			ease: "back.out(1)",
			duration: 1.25,
		});
	});

	
</script>

<svelte:head>
	<title>Ilojo Bar - {data.title}</title>
</svelte:head>

<section class="story">
	<!-- <h1 class="story__title"><span>{data.title}</span></h1> -->
	<h1 class="story__title">{data.title}</h1>
	<div class="story__content">
		{@html data.content.html}
	</div>
	
</section>

<style>
	.story {
		padding: 5em 1em;
		background-color: #7A1006;
		/* color: white; */
	}


	.story__content {
		font-size: 1.5rem;
		line-height: 2rem;
		display: grid;
		grid-template-columns: 1fr;
		justify-items: center;
		gap: 2rem;
		/* color: white; */
	}
	.story__title{
		font-family: "Raleway", Sans-serif;
		font-size: 32px;
		font-weight: 800;
		line-height: 1.1em;
		text-align: center;
		background: linear-gradient(260deg,  #2231E3 0%,#E3C144  100%);
		-webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
		}
		:global(.story__content > p) {
			background: linear-gradient(260deg, #f0e460 0%, #E1BCEA 100%);
		-webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
	}
	:global(.story__content > img) {
		width: 100%;
		height: 20em;
		border-radius: .5em;
		object-fit: cover;
		object-position: left top;
	}

	:global(.story__content > p:not(:last-child), img:not(:last-child)) {
		margin-bottom: 1em;
	}

	@media (min-width: 60em) {
		.story {
			padding: 5em 15em;
		}
		.story__title{
		font-size: 40px;
		}
	
		.story__content {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
