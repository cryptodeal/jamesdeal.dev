import dayjs from 'dayjs';

const parseData = (data) => {
	return data.map((dat) => {
		//console.log(dat)
		let [date, open, high, low, close, volume] = dat;
		date = dayjs(date);
		return { date, open, high, low, close, volume };
	});
};

const genPolygon = (d) => {
	const sizeInSeconds = 86400;
	const points = new Array(12);
	for (let i = 0; i < points.length; i++) {
		let x;
		let y;
		switch (i) {
			/* Point 1 */
			case 0:
				x = d.date + sizeInSeconds * 0.1;
				y = d.open <= d.close ? d.open : d.close;
				points[i] = { x, y };
				break;
			/* Point 2 */
			case 1:
				x = d.date + sizeInSeconds * 0.1;
				y = d.open <= d.close ? d.close : d.open;
				points[i] = { x, y };
				break;
			/* Point 3 */
			case 2:
				x = d.date + sizeInSeconds * 0.4;
				y = d.open <= d.close ? d.close : d.open;
				points[i] = { x, y };
				break;
			/* Point 4 */
			case 3:
				x = d.date + sizeInSeconds * 0.4;
				y = d.high;
				points[i] = { x, y };
				break;
			/* Point 5 */
			case 4:
				x = d.date + sizeInSeconds * 0.6;
				y = d.high;
				points[i] = { x, y };
				break;
			/* Point 6 */
			case 5:
				x = d.date + sizeInSeconds * 0.6;
				y = d.open <= d.close ? d.close : d.open;
				points[i] = { x, y };
				break;
			/* Point 7 */
			case 6:
				x = d.date + sizeInSeconds * 0.9;
				y = d.open <= d.close ? d.close : d.open;
				points[i] = { x, y };
				break;
			/* Point 8 */
			case 7:
				x = d.date + sizeInSeconds * 0.9;
				y = d.open <= d.close ? d.open : d.close;
				points[i] = { x, y };
				break;
			/* Point 9 */
			case 8:
				x = d.date + sizeInSeconds * 0.6;
				y = d.open <= d.close ? d.open : d.close;
				points[i] = { x, y };
				break;
			/* Point 10 */
			case 9:
				x = d.date + sizeInSeconds * 0.6;
				y = d.low;
				points[i] = { x, y };
				break;
			/* Point 11 */
			case 10:
				x = d.date + sizeInSeconds * 0.4;
				y = d.low;
				points[i] = { x, y };
				break;
			/* Point 12 */
			default:
				x = d.date + sizeInSeconds * 0.4;
				y = d.open <= d.close ? d.open : d.close;
				points[i] = { x, y };
		}
	}
	return points;
};

export { parseData, genPolygon };
