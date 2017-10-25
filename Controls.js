
// Input and control configuration

var move_left = K_A
var move_right = K_D
var move_up = K_W
var move_down = K_S

/**
 * Simple function to check for pressed keys and execute relevant code.
 */
function checkKeys() {
	if (keysDown[move_left]) {
		player.moveLeft()
	}
	if (keysDown[move_right]) {
		player.moveRight()
	}
	if (keysDown[move_up]) {
		player.moveUp()
	}
	if (keysDown[move_down]) {
		player.moveDown()
	}
	if (document.mouseClicked) {
		player.fireLaser()
	}
}