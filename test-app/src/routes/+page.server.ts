import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { OS_API_KEY } from "$env/static/private";


export const load: PageServerLoad = async ({ params }) => {
    const post = await fetch('https://api.os.uk/search/places/v1/postcode?postcode=' + encodeURIComponent(params.postcode) + '&key=' + OS_API_KEY);

    if (post) {
        return  { message: "got post" };
    }

    error(404, 'Not found');
};