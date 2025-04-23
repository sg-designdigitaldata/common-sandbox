import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const res = await fetch(`/api/items/${params.id}`);
	const item = await res.json();
    return item;
}