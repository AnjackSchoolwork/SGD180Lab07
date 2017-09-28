
/**
 * Initialize the environment. Create the canvas and load the config.
 */
function setup() {
	game = new Scene()


	game.start()
}


function update() {

}

function generateMob(base_type, x_pos, y_pos) {
	var tempMob = new base_types[base_type]

	tempMob.vector2d.x = x_pos ? x_pos : tempMob.vector2d.x
	tempMob.vector2d.y = y_pos ? y_pos : tempMob.vector2d.y

	return tempMob
}

function generateInteractable() {

}