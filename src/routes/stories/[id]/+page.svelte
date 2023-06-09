<script lang="ts">
	import type { PageData } from './$types';
	import gsap from 'gsap';
	// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
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
		padding: 6em;
	}
	.story__title{
		font-family: "Austral-Sans_Stamp-Regular";
		font-size: 40px;
		font-weight: normal;
		line-height: 1.1em;
		text-align: center;
		color: rgb(254, 248, 248);
		padding-bottom: 1em;
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
	/* content global styling */
	:global(.story__content p) {
		margin: 0 auto;
		width: 85%;
		padding: 1em 0 1em 0;
	}
	:global(.story__content img){
		width: 85%;
		height: 25em;
		object-fit: fill;
		border-radius: 15px;
		margin-left: 4.5em;
	}
	/* content specifiek styling */
	:global(.story__content > img:nth-child(2)) {
		width: 16em;
		height: 25em;
		object-fit: auto;
		border-radius: 15px;
	}
	:global(.story__content > img:nth-child(4)) {
		position: absolute;
		top: 263px;
		left: 40%;
		width: 50%;
		height: 13em;
		object-fit: fill;
		border-radius: 15px;
		margin-left: unset;
	}
	:global(.story__content > p:nth-child(1)) {
		position: absolute;
		top: 1%;
		left: 37%;
		width: 55%;
		padding: unset;
		margin: unset;
	}
	:global(.story__content > p:nth-child(3)) {
		margin-top: 3em;
	}
	/* responsive */
	@media (max-width: 60em) {
		.story {
			display: grid;
			place-items: center;
		}
		.story__title{
		font-size: 23px;
		padding-top: 3em;
		}
		.story__content {
			grid-template-columns: repeat(1, 1fr);
			width:118%;
		}
		:global(.story__content img){
		margin-left: 7%;
	}
	/* content specifiek styling */
	:global(.story__content > img:nth-child(2)) {
		width: 85%;
		height: inherit ;
	}
	:global(.story__content > img:nth-child(4)) {
		position: unset;
		width: 85%;
		height: inherit;
		object-fit: fill;
		border-radius: 15px;
		margin-left: 7%;

	}
	:global(.story__content > p:nth-child(1)) {
		position: unset;
		width: 85%;
		margin-left: 7%;
		margin-bottom: 1em;

	}
		
	}
</style>
