<script>
	import { onMount } from "svelte";
	import { gsap } from "gsap/dist/gsap";
	onMount(() => {
		gsap.to(".background", 5, {
			y: "-100%",
			ease: "Expo.easeInOut",
			delay: 0,
		});
		gsap.to(".green", 3, {
			y: "-100%",
			ease: "Expo.easeInOut",
			delay: 0,
		});
		gsap.to(".blue", 1, {
			y: "-100%",
			ease: "Expo.easeInOut",
			delay: 0,
		});
	});
</script>

<div class="background" />
<div class="green" />
<div class="blue" />

<style>
	.background {
		background-image: url('/backgroundimage/bria_9da67243c871b95a.JPEG');
		background-size: 100%;
		background-position: center;
		background-repeat: no-repeat;
		width: 100%;
	    height: 100vh;
		background-color: #a675f5;
		opacity: 1;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 2;
	}

	.green {
		background-image: url('/backgroundimage/bria_c06cdffb151b3130.JPEG');
		background-size: 100%;
		background-position: center;
		background-repeat: no-repeat;
		width: 100%;
	    height: 100vh;
		background-color: #66e5bf;
		opacity: 1;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 3;
		width: 100%;
	}
	.blue {
		background-image: url('/backgroundimage/bria_a6b81948be5f887c.JPEG');
		background-size: cover ;
		background-position:center ;
		background-repeat: no-repeat;
		width: 100%;
	    height: 100vh;
		background-color: #050542;
		opacity: 1;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 4;
	}
</style>

<!-- 
<script>
	import { onMount } from 'svelte';
  
	let scrollY = 0;
  
	onMount(() => {
	  window.addEventListener('scroll', handleScroll);
	  return () => window.removeEventListener('scroll', handleScroll);
	});
  
	function handleScroll() {
	  scrollY = window.scrollY;
	}
  </script>
<div class="parallax-layer" style="--scroll-y: {scrollY}px;"></div>

<style>
	:global(.parallax-layer) {
	  background-image: url('/assets/images/ilojo_bar_bw_1.jpg');
	  background-size: cover;
	  background-position: center;
	  background-repeat: no-repeat;
	  width: 100%;
	  height: 100vh;
	  transform: translateY(calc(-50% + var(--scroll-y)));
	}
  </style>
  
  


 -->
