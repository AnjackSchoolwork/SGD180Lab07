

function getVector2d(x, y, direction, magnitude) {
	return {
		"x": x ? x : 0,
		"y": y ? y : 0, 
		"direction": direction ? direction : 0,
		"magnitude": magnitude ? magnitude : 0
	}
}
