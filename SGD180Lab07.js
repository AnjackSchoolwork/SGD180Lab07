
/**
 * Initialize the environment. Create the canvas and load the config.
 */
function setup() {

	kelp_list = []

	game = new Scene()

	// Create the player
	player = generateMob(game, "crab_base", 200, 300)

	// Create some kelp
	for (var i = 0; i < 15; i++) {
		generateKelp(game)
	}

	game.start()
}


function update() {
	game.clear()

	player.update()

	for (var index in kelp_list)
		kelp_list[index].update()

}

function generateMob(scene, base_type, x_pos, y_pos) {
	var tempMob = new base_types[base_type](scene, x_pos, y_pos)

	return tempMob
}

function generateKelp(scene) {

	var x_pos = getRandomInt(0, scene.width)
	var y_pos = getRandomInt(0, scene.height)
	
	var temp_kelp = generateMob(scene, "kelp_base", x_pos, y_pos) 
	
	kelp_list.push(temp_kelp)
}