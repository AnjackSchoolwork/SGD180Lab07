
/**
 * Initialize the environment. Create the canvas and load the config.
 */
function setup() {

	game = new Scene()

	platforms = []
	var tempSprite = new Sprite(game, "img/placeholder.png", 256, 32)
	tempSprite.setPosition(400, 300)
	tempSprite.setSpeed(0)
	platforms.push(tempSprite)

	player = generateMob(game, "crab_base", 200, 300)

	game.start()
}


function update() {
	game.clear()

	for (var index in platforms) {
		platforms[index].update()
	}

	checkKeys()

	player.update()

}

function generateMob(scene, base_type, x_pos, y_pos) {
	var tempMob = new base_types[base_type](scene, x_pos, y_pos)

	return tempMob
}

function generateInteractable() {

}