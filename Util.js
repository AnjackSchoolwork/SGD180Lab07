
function getRandomInt(min, max) {
	var min = Math.floor(min)
	var max = Math.ceil(max)

	return Math.floor(Math.random() * (max - min) + min)
}