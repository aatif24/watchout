import preprocess from 'svelte-preprocess';

import node from '@sveltejs/adapter-node';
// import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: node({
			// default options are shown
			out: 'build'
		})
		// adapter: adapter({
		// 	pages: 'docs',
		// 	assets: 'docs',
		// 	fallback: '200.html'
		// })
	}
};

export default config;
