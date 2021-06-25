import { getCandles } from '$lib/dataviz/crypto/_api';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {
	let data = await getCandles('ETH-USD', { granularity: 900 });

	console.log(data);
	if (data) {
		return {
			body: {
				data
			}
		};
	}
}
