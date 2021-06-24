import { initClient, CandleGranularity } from 'coinbase-pro-node';
//import dayjs from 'dayjs';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
	//var now = dayjs();
	//var twoMonthsBack = now.subtract(2, 'month').date(1);
	const client = initClient();
	const { slug } = params;

	const candles = await client.rest.product.getCandles(slug, {
		end: '2020-04-11T10:00:00.000Z',
		granularity: CandleGranularity.ONE_HOUR,
		start: '2020-04-11T08:00:00.000Z'
	});

	if (candles) {
		return {
			body: {
				candles
			}
		};
	}
}
