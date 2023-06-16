<script>
		import Loader from '$lib/components/Loader.svelte';
</script>
<section>
	<section class="loader"><Loader/></section>
	<h2>Welcome to the <br /> Stories of Ilojo Bar</h2>
	<p>Read exciting stories about Ilojo Bar</p>
	<button class="moving-button"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-down-lines" width="96" height="96" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
		<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
		<path d="M15 12h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-3h6v3z" />
		<path d="M15 3h-6" />
		<path d="M15 6h-6" />
	  </svg> <p  class="btn-text">Scroll Down</p> </button>

</section>

<style>
	section {
		position: absolute;
		z-index: 1;
		top: 9rem;
		left: 50%;
		transform: translate(-50%);
		text-align: center;
		max-width: 30rem;
		color: white;
	}
	h2 {
		font-size: 2.5rem;
		font-weight: bold;
	}

	p {
		font-size: 1.5rem;
	}
	/* button scrol down */
	.moving-button {
	font-family: "Austral-Sans_Stamp-Regular";
	align-items: center;
	position: relative;
	width: 10em;
	margin-top: 60%;
	animation: moveUp 2s infinite;
	background-color: transparent;
	border: none;
}
	@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
.moving-button svg{
	width: 5em;
}
.btn-text{
	font-size: 1.5rem;
	font-weight: 400;
	color: white;
}
/* loader */
.loader{
	display: grid;
	place-items: center;
	width: 600%;
	height: 60vh;
	margin-top: -70%;
}
@media (max-width: 55rem) {
		h2 {
			font-size: 2rem;
			white-space: nowrap;
			line-height: 2.5rem;
		}
		p {
			font-size: 1.2rem;
			line-height: 1.5rem;
		}
	}
</style>
