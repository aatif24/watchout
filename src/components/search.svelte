<script>
	import { fetchMovies, filter } from '../store/movies';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let timer;
	let query = '';

	const handleChange = (query) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			$page.path != '/' && goto('/');
			if (query != '') {
				fetchMovies('', 12, query);
			} else {
				fetchMovies($filter);
			}
		}, 500);
	};
</script>

<div class="input-group mb-3 w-50 mx-auto input-group-lg">
	<input
		type="text"
		class="form-control rounded-pill"
		placeholder="Search by title"
		aria-label="Username"
		aria-describedby="search"
		bind:value={query}
		on:input={() => handleChange(query)}
	/>
	<i class="icon fab fa-searchengin " />
</div>

<style lang="scss">
	.input-group {
		position: relative;
		input {
			box-shadow: -1px 0rem 10px 5px rgb(255 0 0 / 25%) !important;
			background-color: transparent;
			border-color: rgba(255, 0, 0, 50%);
			color: #fefefe;

                &::-webkit-input-placeholder {
                    color: inherit;
                }
                &::-ms-input-placeholder {
                    color: inherit;
                }
                &::-moz-placeholder {
                    color: inherit;
                }
                &:-moz-placeholder {
                    color: inherit;
                }
                &::placeholder {
                    color: inherit;
                }
		}
		.icon {
			position: absolute;
			right: 2%;
			top: 22%;
			font-size: 25px;
			z-index: 10;
		}
	}

	@media (max-width: 576px) {
		.input-group {
			width: 100% !important;
		}
	}
</style>
