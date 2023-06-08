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
	<h1 class="story__title">{data.title}</h1>
	<div class="story__content">
		{@html data.content.html}
	</div>
	
</section>

<style>
	.story {
		display: grid;
		place-items: center;
		padding-top: 4%;
		background-color: #7A1006;
		overflow-x: hidden;
		/* color: white; */
	}
	.story__title{
		font-family: "Austral-Sans_Stamp-Regular";
		font-size: 40px;
		font-weight: normal;
		line-height: 1.1em;
		text-align: center;
		color: rgb(254, 248, 248);
		padding: 1em;
		}
	.story__content {
		position: relative;
		font-family: "Austral-Sans_Stamp-Regular";
		font-size: 1.3em;
		line-height: 1rem;
		color: white;
		width: 63em;
		padding: 1em;
		background-color: #801637;
	}
	:global(.story__content > img:nth-child(2)) {
		width: 20em;
		height: 30em;
		object-fit: fill;
		border-radius: 15px;
	}
	:global(.story__content > img:nth-child(4)) {
		position: absolute;
		top: 335px;
		left: 35%;
		width: 63%;
		height: 15em;
		object-fit: auto;
		border-radius: 15px;
	}
	:global(.story__content > p:nth-child(1)) {
		position: absolute;
		top: 2%;
		left: 35%;
		width: 63%;
		/* background-color: blue; */
	}

	:global(.story__content > p:nth-child(3)) {
		margin: 0 auto;
		margin-top: 3em;
		margin-bottom: 0;
		width: 80%;
	}
	/* :global(.story__content > img) {
		width: 100%;
rgb(173, 173, 177)		height: 30em;
		border-radius: .5em;
		object-fit:contain;
		object-position: center;
	} */
	/* .story__content > img:nth-of-type(4){
		width: 20em;
		height: 10em;
		border-radius: .5em;
} */

/* 
	:global(.story__content > p:not(:last-child)) {
		margin-bottom: 1em;
	} */

	/* responsive */
	/* @media (min-width: 60em) {
		.story {
			display: grid;
			place-items: center;

		}
		.story__title{
		font-size: 40px;
		}
	
		.story__content {
			grid-template-columns: repeat(1, 1fr);
			width: 70%;
		}
		:global(.story__content > img) {
		width: 90%;
		height: 70% ;
		border-radius: .5em;
		object-fit:fill;
		object-position: center;
	}
	} */
</style>
