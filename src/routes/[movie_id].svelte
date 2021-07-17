<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	let movieId;
	export async function load({ page, fetch, session, context }) {
		movieId = page.params.movie_id;
		return {
			status: 200
		};
	}
</script>

<script>
	import { onMount } from 'svelte';
	import Loader from '../components/loader.svelte';
	import Cast from '../components/cast.svelte';
	let tmdbImgLink = 'https://image.tmdb.org/t/p/';
	import {
		fetchMovie,
		movie,
		fetchPeople,
		people,
		fetchImages,
		loading,
		whereToWatch
	} from '../store/movies';

	onMount(() => {
		loading.set(true);
		fetchMovie(movieId);
		fetchPeople(movieId);
	});
	let imgSearched = false;
	let bgImg;
	let poster;
	let watchNow = {};
	const image = async (ids) => {
		if (ids.tmdb) {
			let res = await fetchImages(ids.tmdb);
			if (res.backdrops && res.backdrops.length) {
				bgImg =
					tmdbImgLink +
					'w780' +
					res.backdrops[Math.floor(Math.random() * res.backdrops.length)].file_path;
			}
			if (res.posters && res.posters.length) {
				poster =
					tmdbImgLink +
					'w342' +
					res.posters[Math.floor(Math.random() * res.posters.length)].file_path;
			}
		}
		imgSearched = true;
	};
	const watch = async (ids) => {
		if (ids.tmdb) {
			let res = await whereToWatch(ids.tmdb);
			watchNow = res?.results?.IN;
			console.log(watchNow);
		}
	};
</script>

{#if $loading}
	<Loader />
{:else}
	{#await $movie then data}
		<section image-source={image(data.ids)} watch-sourse={watch(data.ids)}>
			<img src={bgImg} alt="bg-image" class="background" />
			<div class="d-flex mt-5 px-3 content">
				<div class="me-4 d-none d-md-block">
					<img class="poster" src={poster} alt={data.title} />
				</div>
				<div class="d-flex flex-column justify-content-between">
					<div class="date-rating d-flex justify-content-between ">
						<div>
							<p class="h3">
								<i class="icon fas fa-star" />
								{Math.round((data.rating + Number.EPSILON) * 10) / 10}
							</p>
							<p class="">{data.released}</p>
						</div>
						<div class="watch-source  d-flex flex-column">
							{#if watchNow.flatrate}
								<p class="m-0 p-0 fs-6">stream</p>
								<div class="d-flex">
									{#each watchNow.flatrate as sourse}
										<div class="sourse-img  p-1">
											<a href={watchNow.link}>
												<img
													src={tmdbImgLink + 'w92' + sourse.logo_path}
													alt={sourse.provider_name}
												/>
											</a>
										</div>
									{/each}
								</div>
							{/if}
							{#if watchNow.buy}
								<p class="m-0 p-0 fs-6">buy</p>
								<div class="d-flex">
									{#each watchNow.buy as sourse}
										<div class="sourse-img  p-1">
											<a href={watchNow.link}>
												<img
													src={tmdbImgLink + 'w92' + sourse.logo_path}
													alt={sourse.provider_name}
												/>
											</a>
										</div>
									{/each}
								</div>
							{/if}
							{#if watchNow.rent}
								<p class="m-0 p-0 fs-6">rent</p>
								<div class="d-flex">
									{#each watchNow.rent as sourse}
										<div class="sourse-img  p-1">
											<a href={watchNow.link}>
												<img
													src={tmdbImgLink + 'w92' + sourse.logo_path}
													alt={sourse.provider_name}
												/>
											</a>
										</div>
									{/each}
								</div>
							{/if}
						</div>
					</div>
					<div>
						<p class="h1 title">
							{data.title}
							<small class="genre fw-lighter text-capitalize">{data.genres.join(', ')}</small>
						</p>
						<p class="h3 tagline fw-light mb-2">{data.tagline && data.tagline}</p>
						<p class="fw-lighter overview w-75 m-0">{data.overview}</p>
					</div>
				</div>
			</div>

			{#await $people then casts}
				<div class="cast-container container-fluid">
					<div class="row w-100">
						{#each casts.cast as cast, i}
							<div class="p-3  col-md-3 col-lg-2 col-6">
								<Cast {cast} />
							</div>
						{/each}
					</div>
				</div>
			{/await}
		</section>
	{/await}
{/if}

<style lang="scss">
	.fs-6 {
		font-size: 0.7rem !important;
	}
	section {
		overflow: hidden;
		height: 80vh;
		.background {
			height: 100%;
			background-repeat: no-repeat;
			background-size: cover;
			position: absolute;
			width: 100%;
			top: 0;
			right: 0;
			z-index: -1;
			opacity: 0.2;
		}
		.poster {
			width: 200px;
			aspect-ratio: auto;
			border-radius: 0.5rem;
			box-shadow: -1px 0rem 10px 1px rgb(0 0 0 / 25%) !important;
		}
		.genre {
			font-size: 12px;
		}
		.watch-source {
			// position: absolute;
			right: 1rem;
			img {
				display: inline-block;
				width: 30px;
			}
		}
		.icon {
			color: yellow;
		}
		.cast-container {
			margin-top: 13rem;
			height: 43vh;
			overflow: auto;
			position: absolute;
			bottom: 0;
			.cast {
				min-height: 25vh;
				box-shadow: -1px 0rem 10px 1px rgb(255 0 0 / 25%) !important;
			}
		}
	}
	@media (max-width: 1200px) {
		section {
			height: 100%;
			overflow: auto;
			.background {
				display: none;
			}
			.content {
				margin-top: 1rem !important;
			}
			.overview {
				width: 100% !important;
			}
			.title {
				margin-top: 10px;
				margin-bottom: 10px;
				.genre {
					display: block !important;
				}
			}
			.overview {
				width: 100% !important;
			}
			.tagline {
				margin-bottom: 20px;
			}
			.date-rating {
				justify-content: space-between;
			}
			.cast-container {
				margin-top: 20px;
				height: 100%;
				overflow: auto;
				position: inherit;
				bottom: 0;
				.row {
					margin: 0 auto;
				}
			}
		}
	}
</style>
