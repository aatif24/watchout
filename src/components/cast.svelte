<script>
	import { fetchImages } from '../store/movies';

	export let cast;
	let imgSearched = false;
	let img;
	const image = async (ids) => {
		if (ids.tmdb) {
			let res = await fetchImages(ids.tmdb, 'person');
			if (res.profiles && res.profiles.length) {
				img =
					'https://image.tmdb.org/t/p/w500' +
					res.profiles[0].file_path;
			}
		}
		imgSearched = true;
	};
</script>

<div class="cast" image-sourse={image(cast.person.ids)}>
	{#if imgSearched}
		{#if img}
			<div class="image">
				<img class="img-fluid" src={img} alt={cast.character} />
			</div>
		{:else}
			<i class="icon fas fa-user" />
		{/if}
	{/if}
	<div class="title">
		<p
			class="h5 name text-truncate"
			data-bs-toggle="tooltip"
			data-bs-placement="top"
			title={cast.person.name}
		>
			{cast.person.name}
		</p>
		<p
			class="character text-truncate fw-light"
			data-bs-toggle="tooltip"
			data-bs-placement="bottom"
			title={cast.character}
		>
			{cast.character}
		</p>
	</div>
</div>

<style lang="scss">
	.cast {
		position: relative;
		height: 100%;
		.image {
			position: relative;
			&:before {
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 25%;
				background: linear-gradient(to top, rgba(0, 0, 0, 1), transparent);
			}
			img {
				width: 100%;
				border-radius: 0.5rem;
				box-shadow: -1px 0rem 10px 1px rgb(0 0 0 / 25%) !important;
			}
		}
		.character {
			width: 80%;
			position: absolute;
			bottom: -1rem;
			left: .5rem;
		}
		.name {
			width: 80%;
			position: absolute;
			bottom: 1rem;
			left: .5rem;
		}
		.icon {
			width: 100% !important;
			height: 100% !important;
			color: rgba(128, 128, 128, 0.486);
		}
	}
</style>
