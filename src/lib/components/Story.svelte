<script lang="ts">
export let stories: { title: string, id: number, thumbnail: { url: string } }[] = [];
 </script>
 
<ul class="story">
	{#each stories as story}
	<li>
		<a href={`/stories/${story.id}`} class="story__link" data-sveltekit-reload>
			<figure class="story__link__frame">
				<div class="story__link__frame-content">
					<img
						src={story.thumbnail.url}
						alt={story.title}
						class="story__link__frame-image"
						width="300"
						height="auto"
					/>
				</div>
				<div class="window-doors-container">
					<img src="/assets/images/window_L.png" alt="Window Left" class="window-door window_L" />
					<img src="/assets/images/window_R.png" alt="Window Left" class="window-door window_R" />
				</div>
			</figure>
			<!-- <div class="container_btn">
				<a href={`/stories/${story.id}`} class="centered_btn">Discover</a>
			</div>
			<div class="story__link__plate">
				<h2 class="story__link__plate-title">{story.title}</h2>
			</div> -->
		</a>
	</li>
  {/each}

  </ul> 
<style>
	.story{
		display: grid;
		grid-template-columns: repeat(6,1fr);
		gap: .2em;
		width: 29%;
		height: 38.5%;
		object-fit: cover;
		object-position: center center;
		position: absolute;
		top: 44%;
		overflow: hidden;
		/* background-color: blue; */
		
	}

	li{
		position: relative;
		display: grid;
		place-items: center;
		list-style: none;
		/* background-color: black; */
		/* margin: .5em;
		width: fit-content;
		height: fit-content; */
		/* height: fit-content; */
	}
	.story__link {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		width:  100%;
		height: 100%;
		/* background-color: blue; */
	}
	
/* widons styling */
.story__link__frame {
		background-image: url('/assets/images/window_bg.webp');
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		margin: 0;
		aspect-ratio: 354/525;
		position: relative;
		overflow: hidden;
		width: 64%;
		/* width: 70px; */
		margin-left: .5em;
	}

.window-door {
		position: absolute;
		top: -93%;
        left: -11%;
		transition: transform 1s ease, filter 1s ease;
	}

	.window_L{
		transform-origin: 16.28%;
		width: 123%;
        height: 197%;
	}
	.window_R {
		transform-origin: 86.04%;
		width: 123%;
         height: 197%;
	}
	.window-doors-container {
		width: 83%;
		height: 53%;
		position: absolute;
		top: 125%;
		left: 50%;
		transform: translate(-50%, -150%);
		z-index: 2;
	}
	ul:hover:nth-child(1) li:hover .window_L{
		transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-110deg);
		-webkit-filter: drop-shadow(10px 6px 5px rgba(0, 0, 0, 0.2));
		filter: drop-shadow(10px 6px 5px rgba(0, 0, 0, 0.2));
	}
	ul:hover:nth-child(1) li:hover .window_R{
		transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-110deg);
		-webkit-filter: drop-shadow(10px 6px 5px rgba(0, 0, 0, 0.2));
		filter: drop-shadow(10px 6px 5px rgba(0, 0, 0, 0.2));
	}

	/* .story:hover .window_L {
		transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-110deg);
		-webkit-filter: drop-shadow(10px 6px 5px rgba(0, 0, 0, 0.2));
		filter: drop-shadow(10px 6px 5px rgba(0, 0, 0, 0.2));
	}

	.story:hover .window_R {
		transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(110deg);
		-webkit-filter: drop-shadow(-10px 6px 5px rgba(0, 0, 0, 0.2));
		filter: drop-shadow(-10px 6px 5px rgba(0, 0, 0, 0.2));
	} */

	/* styling positions wonidos  laptop*/

	.story__link .story__link__frame{
		position: absolute;
		top: 4%;
	}
	ul li:nth-child(1) .story__link{
		position: absolute;
		/* top: -2%; */
	}
	ul li:nth-child(2) .story__link{
		position: absolute;
		/* top: -2%; */
		left: 9%;
	}
	ul li:nth-child(3) .story__link{
		position: absolute;
		left: 15%;
	}
	ul li:nth-child(4) .story__link{
		position: absolute;
		left: 14%;
	}
	ul li:nth-child(5) .story__link{
		position: absolute;
		left: -1.5%;
	}
	ul li:nth-child(6) .story__link{
		position: absolute;
		left: -20%;
	}
	ul li:nth-child(7) .story__link > .story__link__frame{
		position: absolute;
		/* top: 40%; */
		left: 9%;
	}


	.story__link__frame-content {
		width: 71%;
		height: 51%;
		position: absolute;
		top: 70%;
		left: 51%;
		transform: translate(-50%, -50%);
		z-index: -1;
	}

	.story__link__frame-image {
		width: 100%;
		object-fit: cover;
		z-index: -1;
	}
    .story__link__plate{
		background-color: #D2B48C;
		border-radius:.4em;
		width: 200px;
	}
	.story__link__plate-title {
		font-size: .9rem;
		padding: .1em;
		text-decoration: none;
		text-align: center;
		color: #7A1006;
	}
	.container_btn {
    position: relative;
    background-image: url(/assets/images/goldplate.png);
    background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;
	object-fit: contain;
	height: 40px;
	width: 80px;
	}
	.centered_btn {
        font-size: .8em;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -60%);
	}
    a {
		text-decoration: none;
		color: var(--light);
		font-size: 1.2rem;
	}

	@media (max-width: 40rem) {
		.story__link__frame {
			margin: 0 auto;
		}

		.story {
			margin: 1rem 0;
		}
	}
</style> 