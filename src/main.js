import App from './App.svelte';
import { TUNES } from '../constants/tunes.js';
import { FILTERS } from '../constants/filters.js';
import { SORTS } from '../constants/sorts.js';

const app = new App({
	target: document.body,
	props: {
		TUNES: TUNES,
		FILTERS: FILTERS,
		SORTS: SORTS
	}
});

export default app;