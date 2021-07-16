<script>
	import { filter } from '../store/movies';
	import Search from '../components/search.svelte';
	import Filter from '../components/filter.svelte';
</script>

<div class="container-fluid">
	<div class="top mt-5 my-4">
		<div class="_filter-text">
			<h3 class="text-capitalize">{$filter}</h3>
		</div>

		<div class="_search">
			<Search />
		</div>
		<div class="_filter">
			<Filter />
		</div>
	</div>
	<slot />
</div>
<svelte:head />

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');
	:global(body) {
		background-color: #000;
		color: white;
		font-family: 'Comfortaa', cursive;
	}
	.top {
		display: flex;
		justify-content: space-between;
		._search {
			width: 100%;
		}
		h3 {
			color: #bda8a8;
		}
	}

	@media (max-width: 767px) {
		.top {
			display: flex;
			flex-direction: column;
			position: relative;
			margin-bottom: 3rem !important;
			._search {
				order: 1;
			}
			._filter-text {
				order: 3;
				position: absolute;
				left: 1rem;
				top: 4rem;
			}
			._filter {
				order: 2;
				position: absolute;
				right: 1rem;
				top: 4rem;
			}
		}
	}
</style>
