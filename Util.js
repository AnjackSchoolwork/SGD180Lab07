

/**
 * Takes two numbers and returns a random integer between them.
 * 
 * @param {integer} num1	A number.
 * @param {integer} num2	A number.
 */
function getRandomInt(num1, num2) {
	var min = 0
	var max = 0

	if (num1 < num2) {
		min = Math.floor(num1)
		max = Math.ceil(num2)
	}
	else {
		min = Math.floor(num2)
		max = Math.floor(num1)
	}

	return Math.floor(Math.random() * (max - min) + min)
}