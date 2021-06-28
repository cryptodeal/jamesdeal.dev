import * as yootils from 'yootils';

const genPolygon = (d) => {
	const points = new Array(12);
	for (let i = 0; i < points.length; i++) {
		let x;
		let y;
		switch (i) {
			/* Point 1 */
			case 0:
				x = d.openTimeInMillis + d.sizeInMillis * 0.1;
				y = d.open <= d.close ? d.open : d.close;
				points[i] = { x, y };
				break;
			/* Point 2 */
			case 1:
				x = d.openTimeInMillis + d.sizeInMillis * 0.1;
				y = d.open <= d.close ? d.close : d.open;
				points[i] = { x, y };
				break;
			/* Point 3 */
			case 2:
				x = d.openTimeInMillis + d.sizeInMillis * 0.4;
				y = d.open <= d.close ? d.close : d.open;
				points[i] = { x, y };
				break;
			/* Point 4 */
			case 3:
				x = d.openTimeInMillis + d.sizeInMillis * 0.4;
				y = d.high;
				points[i] = { x, y };
				break;
			/* Point 5 */
			case 4:
				x = d.openTimeInMillis + d.sizeInMillis * 0.6;
				y = d.high;
				points[i] = { x, y };
				break;
			/* Point 6 */
			case 5:
				x = d.openTimeInMillis + d.sizeInMillis * 0.6;
				y = d.open <= d.close ? d.close : d.open;
				points[i] = { x, y };
				break;
			/* Point 7 */
			case 6:
				x = d.openTimeInMillis + d.sizeInMillis * 0.9;
				y = d.open <= d.close ? d.close : d.open;
				points[i] = { x, y };
				break;
			/* Point 8 */
			case 7:
				x = d.openTimeInMillis + d.sizeInMillis * 0.9;
				y = d.open <= d.close ? d.open : d.close;
				points[i] = { x, y };
				break;
			/* Point 9 */
			case 8:
				x = d.openTimeInMillis + d.sizeInMillis * 0.6;
				y = d.open <= d.close ? d.open : d.close;
				points[i] = { x, y };
				break;
			/* Point 10 */
			case 9:
				x = d.openTimeInMillis + d.sizeInMillis * 0.6;
				y = d.low;
				points[i] = { x, y };
				break;
			/* Point 11 */
			case 10:
				x = d.openTimeInMillis + d.sizeInMillis * 0.4;
				y = d.low;
				points[i] = { x, y };
				break;
			/* Point 12 */
			default:
				x = d.openTimeInMillis + d.sizeInMillis * 0.4;
				y = d.open <= d.close ? d.open : d.close;
				points[i] = { x, y };
		}
	}
	return points;
};

const filterUnwanted = (arr) => {
	const required = arr.filter((el) => {
		return el && el.open && el.close && el.low && el.high;
	});
	return required;
};
const formatBase = (value, counter) => {
	switch (counter) {
		case 'USD':
			return `$${yootils.commas(value.toFixed(2))}`;
		case 'EUR':
			return `€${yootils.commas(value.toFixed(2))}`;
		case 'GBP':
			return `£${yootils.commas(value.toFixed(2))}`;
		default:
			return `${yootils.commas(value.toFixed(2))}\n${counter}`;
	}
};

export { genPolygon, filterUnwanted, formatBase };
