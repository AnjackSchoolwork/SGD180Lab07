

function getVector2d(x, y, direction, velocity) {
	return {
		"x": x ? x : 0,
		"y": y ? y : 0, 
		"direction": direction ? direction : 0,
		"velocity": velocity ? velocity : 0
	}
}