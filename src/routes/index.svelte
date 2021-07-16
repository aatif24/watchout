<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Loader from '../components/loader.svelte';
	import Item from '../components/listItem.svelte';

	import { fetchMovies, movies, loading, filter } from '../store/movies';

	onMount(() => {
		loading.set(true);
		fetchMovies($filter, 50);
	});
	const handleClick = (id) => {
		goto('/' + id);
	};
</script>

<svelte:head>
	<title>Watch-out | Movies</title>
</svelte:head>

{#if $loading}
	<Loader />
{/if}

{#await $movies then list}
	<section class="row">
		{#each list as movie, i}
			<div class="col-md-6 col-lg-4 col-sm-12  mt-3 ">
				<Item item={movie.movie} {handleClick} />
			</div>
		{:else}
			{#if !$loading}
				<h1 class="empty-list">oops! <i class="far fa-flushed" /></h1>
			{/if}
		{/each}
	</section>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<style lang="scss">
	.empty-list {
		position: absolute;
		top: 45%;
		left: 45%;
	}
</style>
