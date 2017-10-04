
// Input and control configuration

var move_left = K_A
var move_right = K_D
var move_up = K_W
var move_down = K_S
var jump = K_SPACE

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
	if (keysDown[jump]) {
		player.jumpUp()
	}
}


function adjustVector2d(target, magnitude) {
	// Adjust vector by magnitude
}