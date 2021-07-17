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

	import { fetchMovie, movie, fetchPeople, people, fetchImages, loading } from '../store/movies';

	onMount(() => {
		loading.set(true);
		fetchMovie(movieId);
		fetchPeople(movieId);
	});
	let imgSearched = false;
	let bgImg;
	let poster;
	const image = async (ids) => {
		if (ids.tmdb) {
			let res = await fetchImages(ids.tmdb);
			if (res.backdrops && res.backdrops.length) {
				bgImg =
					'https://image.tmdb.org/t/p/w780' +
					res.backdrops[Math.floor(Math.random() * res.backdrops.length)].file_path;
			}
			if (res.posters && res.posters.length) {
				poster =
					'https://image.tmdb.org/t/p/w342' +
					res.posters[Math.floor(Math.random() * res.posters.length)].file_path;
			}
		}
		imgSearched = true;
	};
</script>

{#if $loading}
	<Loader />
{:else}
	{#await $movie then data}
		<section image-source={image(data.ids)}>
			<img src={bgImg} alt="bg-image" class="background" />
			<div class="d-flex mt-5 px-3 content">
				<div class="me-4 d-none d-md-block">
					<img class="poster" src={poster} alt={data.title} />
				</div>
				<div class="d-flex flex-column justify-content-between">
					<div class="date-rating d-flex flex-column-reverse ">
						<p class="">{data.released}</p>
						<p class="h3">
							<i class="icon fas fa-star" />
							{Math.round((data.rating + Number.EPSILON) * 10) / 10}
						</p>
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
			.tagline {
				margin-bottom: 20px;
			}
			.date-rating {
				flex-direction: row-reverse !important;
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
	@media (max-width: 1200px) {
		.overview {
			width: 100% !important;
		}
	}
</style>
