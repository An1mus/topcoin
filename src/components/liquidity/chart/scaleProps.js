// amount of axis to be drawn, that is why I'm providing the following scale setup:
const scaleProps = {
	10: {
		xScale:{type: 'log'},
		yScale:{type: 'log'}
	},
	20: {
		xScale:{type: 'log'},
		yScale:{type: 'log', min:3000000, max: 20000000000}
	},
	50: {
		xScale:{type: 'log', min:10000000, max: 400000000000},
		yScale:{type: 'log', min:10000, max: 100000000000}
	}
};

const linearScaleProps = {
	xScale:{type: 'linear'},
	yScale:{type: 'linear'}
};

export {scaleProps, linearScaleProps};
