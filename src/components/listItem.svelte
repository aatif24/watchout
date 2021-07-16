<script>
	import { fetchMovies, fetchImages } from '../store/movies';

	export let item;
	export let handleClick;
	let img;
	let imgSearched = false;
	const image = async (ids) => {
		if (ids.tmdb) {
			let res = await fetchImages(ids.tmdb);
			if (res.posters && res.posters.length) {
				img = 'https://image.tmdb.org/t/p/w500' + res.posters[0].file_path;
			}
		}
		imgSearched = true;
	};
</script>

<div class="item p-3 h-100" data-id={item.ids.trakt} on:click={() => handleClick(item.ids.trakt)}>
	<div class="image h-100">
		<span class="d-none" :bind={image(item.ids)} />
		{#if imgSearched}
			{#if img}
				<img class="img-fluid" src={img} alt={item.title} />
			{:else}
				<p class="h3 text-truncate">{item.title}</p>
				<i class="icon fas fa-film" />
			{/if}
		{/if}
	</div>
	<div class="details d-flex justify-content-between p-3 py-3">
		<p class="ratings m-0">
			<span class="star">&#9733;</span>
			{item && item.rating ? Math.round((item.rating + Number.EPSILON) * 10) / 10 : ''}
		</p>
		<p class="date m-0">
			{item.released && item.released}
		</p>
	</div>
</div>

<style lang="scss">
	@import '../static/scss/list.scss';
</style>
