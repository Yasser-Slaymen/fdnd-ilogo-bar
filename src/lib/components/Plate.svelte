<div class="story__link__plate">
	<h2 class="story__link__plate-title"><slot /></h2>
</div>

<style>
    .story__link__plate {
		position: relative;
		margin: 0.5rem auto 0;
		width: 70%;
		border-radius: 0.7rem;
		height: 5rem;
		filter: contrast(110%) brightness(100%);
		background: linear-gradient(40deg, rgba(195, 165, 128, 1), rgba(0, 0, 0, 0)),
			url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
		color: var(--color-white);
		box-shadow: var(--box-shadow);
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		text-decoration: none;
	}

	.story__link__plate-title {
		font-size: 1rem;
		text-decoration: none;
		text-align: center;
	}
</style>