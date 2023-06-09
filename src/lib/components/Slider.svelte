<!-- slider -->
<script lang="ts">
	import { onMount } from 'svelte';
	export let stories: { title: string, id: number, thumbnail: { url: string } }[] = [];
  
	let currentSlideIndex = 0;
	let slidesPerScreen = 3; // Number of slides to display per screen
  
	// Function to handle next slide
	function nextSlide() {
	  currentSlideIndex = (currentSlideIndex + 1) % stories.length;
	}
  
	// Function to handle previous slide
	function previousSlide() {
	  currentSlideIndex = (currentSlideIndex - 1 + stories.length) % stories.length;
	}
  
	// onMount(() => {
	//   // Autoplay functionality (optional)
	//   const autoplayInterval = setInterval(() => {
	// 	nextSlide();
	//   }, 9000);
  
	// //   Cleanup the interval on component unmount
	//   return () => {
	// 	clearInterval(autoplayInterval);
	//   };
	// });
  </script>
  
  <main class="slider">
    <button on:click={previousSlide}>&lt;</button>
	<div class="carousel-container">
	  {#each stories as story, i}
	  {#if (i - currentSlideIndex + stories.length) % stories.length < slidesPerScreen}

      <a href={`/stories/${story.id}`} class="story__link" data-sveltekit-reload>
		<div
		  class="carousel-slide {i === currentSlideIndex ? 'active' : ''}"
		>
			<img
				src={story.thumbnail.url}
				alt={story.title}
				class="story__link__frame-image"
				
			/>
			<h3 class="story__link__title">{story.title}</h3>
	
		</div>
    </a>
		{/if}

	  {/each}
	</div>
    <button on:click={nextSlide}>&gt;</button>

  
	<!-- <div class="carousel-navigation">
	  <button on:click={previousSlide}>&lt;</button>
	  <button on:click={nextSlide}>&gt;</button>
	</div> -->
  </main>
  
  <style>
    .slider{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0em;
        background-image: url(/assets/images/background.webp);
    }
    .story__link{
        display: flex;
		align-items: center;
		justify-content: center;  
    }
   .carousel-container {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 15em;
		overflow: hidden;
		position: relative;
		background-color: blue;
		width: 50%;
	}
  
	.carousel-slide {
	  width: 100%;
	  height: 100%;
	  display: flex;
	  align-items: center;
	  flex-direction: column;
	  justify-content: center;
	  position: absolute;
	  transition: transform 0.3s ease-in-out;
	  background-color: rgb(6, 205, 86);
	}
	.story__link__frame-image{
		max-width: 100%;
		height: 80%;
        padding-top: 1em;
		object-fit: cover;
		object-position: center;

	}
	.story__link__title{
		font-size: 17px;
		width: 90%;
		text-align: center;
		padding: .1em;
		background-color: rgb(248, 254, 254);
	}
	
	.carousel-navigation {
	  display: flex;
	  justify-content: center;
	  margin-top: 1rem;
	}
  
	.carousel-navigation button {
	  font-size: 1.5rem;
	  margin:.5rem;
	  padding: 0.5rem 1rem;
	  color: rgb(249, 245, 245);
	  background-color: blue;
	  border-radius: 5px;
	}
  
	.active {
	  z-index: 1;
	}
  </style>