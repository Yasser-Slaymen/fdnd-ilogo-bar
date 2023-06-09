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
						
					/>
				</div>
				<div class="window-doors-container">
					<img src="/assets/images/window_L.png" alt="Window Left" class="window-door window_L" />
					<img src="/assets/images/window_R.png" alt="Window Left" class="window-door window_R" />
				</div>
			</figure>
			
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
	}

	li{
		position: relative;
		display: grid;
		place-items: center;
		list-style: none;
	}
	.story__link {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		width:  100%;
		height: 100%;
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

	/* styling positions wonidos pc */
	.story__link .story__link__frame{
		position: absolute;
		top: 4%;
	}
	ul li:nth-child(1) .story__link{
		position: absolute;
		left: 10%;
		/* top: -2%; */
	}
	ul li:nth-child(2) .story__link{
		position: absolute;
		/* top: -2%; */
		left: 14%;
	}
	ul li:nth-child(3) .story__link{
		position: absolute;
		left: 19%;
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
	li:nth-child(7) .story__link > .story__link__frame{
		position: absolute;
		top: -6%;
		left: 16%;
		width: 72%;
	}
	li:nth-child(8) .story__link > .story__link__frame{
		position: absolute;
		top: -6%;
		left: 21%;
		width: 72%;
	}
	li:nth-child(9) .story__link > .story__link__frame{
		position: absolute;
		top: -6%;
		left: 27%;
		width: 72%;
	}
	li:nth-child(10) .story__link > .story__link__frame{
		position: absolute;
		top: -6%;
		left: 23%;
		width: 72%;
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
		height: 100%;
		object-fit: cover;
		z-index: -1;
		overflow: hidden;
	}
	
	a {
		text-decoration: none;
		color: var(--light);
		font-size: 1.2rem;
	}
	
	@media (max-width: 100em) {
			/* styling positions wonidos  laptop*/
	.story__link .story__link__frame{
		position: absolute;
		top: 4%;
	}
	ul li:nth-child(1) .story__link{
		position: absolute;
		left: unset;
	}
	ul li:nth-child(2) .story__link{
		position: absolute;
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
	li:nth-child(7) .story__link > .story__link__frame{
		position: absolute;
		top: -3%;
		left: 7%;
		width: 72%;
	}
	li:nth-child(8) .story__link > .story__link__frame{
		position: absolute;
		top: -3%;
		left: 12%;
		width: 72%;
	}
	li:nth-child(9) .story__link > .story__link__frame{
		position: absolute;
		top: -3%;
		left: 20%;
		width: 72%;
	}
	li:nth-child(10) .story__link > .story__link__frame{
		position: absolute;
		top: -3%;
		left: 19%;
		width: 72%;
	}
	}
	@media (max-width: 55rem) {
		.story{
			display: grid;
		grid-template-columns: repeat(2,1fr);
		/* display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center; */
		gap: 2em;
		width: 40%;
		height: 100%;
		/* object-fit: cover;
		object-position: center center; */
		/* margin: 3em; */
		position: unset;
		/* top: 40%; */
		/* overflow: unset; */
		overflow-x: scroll;
		overflow-y: scroll;
		margin-top: 6em;
		margin-left: 1em;		
	} 
	li{
		width: fit-content;
		height: 10em;
		margin: unset;
	} 
	.story__link{
			width: 5em;
			height: 7em;
			margin: 0 auto;
		}
	.story__link .story__link__frame{
	position: unset;
	top: unset;
}
	li:nth-child(n) .story__link > .story__link__frame{
	position: absolute;
	top: unset;
	left: unset;
	width: 100%;
	}
	.story__link .story__link__frame{
		position: unset;
		top: unset;
	}
	ul li:nth-child(n) .story__link{
		position: unset ;
		left: unset;
	}	
	}
</style> 


<!-- <div class="container_btn">
				<a href={`/stories/${story.id}`} class="centered_btn">Discover</a>
			</div>
			<div class="story__link__plate">
				<h2 class="story__link__plate-title">{story.title}</h2>
			</div> -->