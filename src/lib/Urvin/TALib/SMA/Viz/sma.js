const Sma = (inReal, inTimePeriod) => {
	var outReal = new Array(inReal.length).fill(0.0);
	var lookbackTotal = inTimePeriod - 1;
	var startIdx = lookbackTotal;
	var periodTotal = 0.0;
	var trailingIdx = startIdx - lookbackTotal;
	var i = trailingIdx;
	if (inTimePeriod > 1) {
		while (i < startIdx) {
			periodTotal += inReal[i];
			i++;
		}
	}
	var outIdx = startIdx;
	do {
		periodTotal += inReal[i];
		let tempReal = periodTotal;
		periodTotal -= inReal[trailingIdx];
		outReal[outIdx] = tempReal / inTimePeriod;
		trailingIdx++;
		i++;
		outIdx++;
	} while (i < outReal.length);
	return outReal;
};

export { Sma };
