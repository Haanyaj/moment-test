import { api_link, api_key } from '../../globals';

export async function getMovies(language, page) {
	const url = api_link + '/movie/popular';
	const new_url = url.concat('?api_key=', api_key, '&language=', language, '&page=', page);
	let response = await fetch(new_url, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-type': 'application/json'
		}

	})
	response = await response.json()
	return response.results
}

export async function getPages(language, page) {
	const url = api_link + '/movie/popular';
	const new_url = url.concat('?api_key=', api_key, '&language=', language, '&page=', page);
	let response = await fetch(new_url, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-type': 'application/json'
		}

	})
	response = await response.json()
	return response.total_pages
}