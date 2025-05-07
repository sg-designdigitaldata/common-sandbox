import { OS_API_KEY } from '$env/static/private';
import { error, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url}) => {

    const pCode = url.searchParams.get('postcode') ?? '';

    console.log(pCode);
    if(pCode === '') {
        error(400, 'Must specify a postcode');
    }

    const osResponse: Response = await fetch('https://api.os.uk/search/places/v1/postcode?postcode=' + encodeURIComponent(pCode) + '&key=' + OS_API_KEY);
    
    if(!osResponse.ok) {
        error(400,`OS Response: ${osResponse.status}`)
    }

   var newResponse = new Response(osResponse.body);

   return newResponse;
}