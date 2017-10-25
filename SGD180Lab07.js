
/**
 * Initialize the environment. Create the canvas and load the config.
 */
function setup() {

	shark_list = []

	junk_list = []

	game = new Scene()

	pickup_snd = new Sound("audio/sfx/pickup.mp3")
	laser_snd = new Sound("audio/sfx/Laser_Shoot3.wav")

	// Create the player
	player = generateMob(game, "crab_base", 200, 300)

	// Create some shark
	for (var i = 0; i < 15; i++) {
		generateShark(game)
	}

	game.start()

	var newDiv = document.createElement("div")
	newDiv.id = "InstructionsDiv"
	document.body.appendChild(newDiv)
	var instructions = document.createElement("label")
	instructions.innerHTML = "<br><br>Sharks are attacking! Kill them with your crab-laser!<br><br>Controls:<br>W - Up<br>S - Down<br>A - Left<br>D - Right<br>Left Mouse Button - Fire Laser"
	document.getElementById("InstructionsDiv").appendChild(instructions)
}


function update() {
	game.clear()

	player.update()

	for (var index in shark_list)
		shark_list[index].update()

	for (var index in junk_list) {
		if (junk_list[index].life_span <= 0)
			junk_list.splice(index, 1)
		else
			junk_list[index].update()
	}

}

function generateMob(scene, base_type, x_pos, y_pos) {
	var tempMob = new base_types[base_type](scene, x_pos, y_pos)

	return tempMob
}

function generateShark(scene) {

	var x_pos = getRandomInt(0, scene.width)
	var y_pos = getRandomInt(0, scene.height)
	
	var temp_shark = generateMob(scene, "shark_base", x_pos, y_pos) 
	
	shark_list.push(temp_shark)
}