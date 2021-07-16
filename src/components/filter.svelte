<script>
	import { fetchMovies, filter, loading } from '../store/movies';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	const changeFilter = (type = 'trending') => {
		$page.path != '/' && goto('/');

		loading.set(true);
		fetchMovies(type, 50);
		filter.set(type);
	};
</script>

<div class="filter dropdown">
	<button
		class="btn  dropdown-toggle rounded"
		type="button"
		id="dropdownMenuButton1"
		data-bs-toggle="dropdown"
		aria-expanded="false"
	>
		<span class="d-none">filter</span>
		<i class="fas fa-filter" />
	</button>
	<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
		<li><span class="dropdown-item" on:click={() => changeFilter('trending')}>Trending</span></li>
		<li><span class="dropdown-item" on:click={() => changeFilter('popular')}>Popular</span></li>
		<li>
			<span class="dropdown-item" on:click={() => changeFilter('recommended/weekly')}
				>Recommended</span
			>
		</li>
		<li>
			<span class="dropdown-item" on:click={() => changeFilter('played/weekly')}>Most Played</span>
		</li>
		<li>
			<span class="dropdown-item" on:click={() => changeFilter('watched/yearly')}>Most Watched</span
			>
		</li>
		<li>
			<span class="dropdown-item" on:click={() => changeFilter('boxoffice')}>Box-office</span>
		</li>
		<li>
			<span class="dropdown-item" on:click={() => changeFilter('anticipated')}>Anticipated</span>
		</li>
	</ul>
</div>

<style lang="scss">
	.filter {
		button {
			// background-color: rgba(99, 0, 0, 0.493);
			color: #fefefe;
			box-shadow: -1px 0rem 10px 5px rgb(255 0 0 / 25%) !important;
			background-color: transparent;
			border-color: rgba(255, 0, 0, 50%);
		}
		.dropdown-menu {
			background-color: #000;
			box-shadow: -1px 0rem 10px 1px rgb(255 0 0 / 50%) !important;
			border-radius: 1rem;
			li span {
				color: #fefefe;
				&:hover {
					color: #000;
					border-radius: 1rem;
				}
			}
		}
	}
</style>
