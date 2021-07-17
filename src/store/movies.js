import { writable, derived } from 'svelte/store';

let traktClientId = import.meta.env.VITE_TRAKT_CLIIENT_ID;
let apiUrl = import.meta.env.VITE_API_URL;
let tmdbApi = import.meta.env.VITE_TMDB_API_URL;
let tmdbKey = import.meta.env.VITE_TMDB_KEY;

/** Store for your data. 
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
**/
export const moviesData = writable([]);
export const movieData = writable({});
export const peopleData = writable([]);
export const filter = writable('trending');
export const loading = writable(false);

export const fetchMovies = (type = 'trending', limit = 50, query = '') => {
	loading.set(true);
	let q = serialize({
		limit,
		extended: 'full',
		query
	});
	let url = `${apiUrl}movies/${type}?${q}`;
	if (query != '') {
		url = `${apiUrl}search/movie?${q}`;
	}
	fetch(url, {
		headers: {
			'Content-Type': 'application/json',
			'trakt-api-version': '2',
			'trakt-api-key': `${traktClientId}`
		}
	})
		.then((response) => response.json())
		.then((data) => {
			moviesData.set(data);
			loading.set(false);
		})
		.catch((error) => {
			console.log(error);
			return [];
		});
};

/** Data transformation.
For our use case, we only care about the drink names, not the other information.
Here, we'll create a derived store to hold the drink names.
**/
export const movies = derived(moviesData, async ($moviesData) => {
	$moviesData = await Promise.all(
		$moviesData.map(async (v) => {
			v.movie = v.movie ? v.movie : v;
			return v;
		})
	);
	return $moviesData;
});

export const fetchMovie = async (id) => {
	loading.set(true);
	let url = `${apiUrl}movies/${id}?extended=full`;
	fetch(url, {
		headers: {
			'Content-Type': 'application/json',
			'trakt-api-version': '2',
			'trakt-api-key': `${traktClientId}`
		}
	})
		.then((response) => response.json())
		.then((data) => {
			movieData.set(data);
			loading.set(false);
		})
		.catch((error) => {
			console.log(error);
			return [];
		});
};

export const movie = derived(movieData, async ($movieData) => {
	return { ...$movieData };
});

export const fetchPeople = async (id) => {
	loading.set(true);
	let url = `${apiUrl}movies/${id}/people?extended=full`;
	fetch(url, {
		headers: {
			'Content-Type': 'application/json',
			'trakt-api-version': '2',
			'trakt-api-key': `${traktClientId}`
		}
	})
		.then((response) => response.json())
		.then((data) => {
			peopleData.set(data);
			loading.set(false);
		})
		.catch((error) => {
			console.log(error);
			return [];
		});
};

export const people = derived(peopleData, async ($peopleData) => {
	return $peopleData;
});

export const fetchImages = async (id, type = 'movie') => {
	let response = await fetch(
		`${tmdbApi}${type}/${id}/images?api_key=${tmdbKey}&language=en`
	);
	return await response.json();
};

export const whereToWatch = async (id, type = 'movie') => {
	let response = await fetch(
		`${tmdbApi}${type}/${id}/watch/providers?api_key=${tmdbKey}&language=en`
	);
	return await response.json();
};

const serialize = (obj) => {
	var str = [];
	for (var p in obj)
		if (obj.hasOwnProperty(p)) {
			str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
		}
	return str.join('&');
};
