
/**
 * The base object for entities in the game. All entities should inherit from this.
 * 
 * @param {integer} x_pos			X-coordinate
 * @param {integer} y_pos			Y-coordinate
 * @param {string} sprite_image		Relative path to sprite image
 * @param {integer} width			Width in pixels
 * @param {integer} height			Height in pixels
 */
function entity_base(x_pos, y_pos, sprite_image, width, height) {

	this.x
	this.y
	this.sprite = new Sprite(game, sprite_image, width, height)
	this.sprite.setPosition(x_pos, y_pos)
	this.sprite.setSpeed(0)

	this.inventory = {}
	this.moveInc = 5
	this.currentSpeed = 0
	this.maxSpeed = 10
	this.maxHealth = 100
	this.currentHealth = 100

	this.food_eaten = 0

	this.update_position = function () {
		
		checkKeys()
		
		this.drainInertia()

		this.sprite.update()

		this.sprite.calcSpeedAngle();

		this.y = this.sprite.y
		this.x = this.sprite.x
	}

	this.draw = function () {
		this.sprite.draw()
	}

	this.moveLeft = function () {
		this.sprite.setChangeX(-this.moveInc)
	}

	this.moveRight = function () {
		this.sprite.setChangeX(this.moveInc)
	}

	this.moveUp = function () {
		this.sprite.setChangeY(-this.moveInc)
	}

	this.moveDown = function () {
		this.sprite.setChangeY(this.moveInc)
	}

	this.fireLaser = function () {
		var x_diff = game.getMouseX() - this.x
		var y_diff = game.getMouseY() - this.y

		var width = Math.sqrt((x_diff * x_diff) + (y_diff * y_diff))

		var temp_sprite = new Sprite(game, "img/placeholder.png", 16, 16)
		temp_sprite.setPosition(game.getMouseX(), game.getMouseY())

		junk_list.push(new laser_beam(this.sprite.x + (x_diff / 2), this.sprite.y + (y_diff / 2), this.sprite.distanceTo(temp_sprite), this.sprite.angleTo(temp_sprite)))
	}

	this.drainInertia = function() {
		if (this.sprite.dy < -1 || this.sprite.dy > 1) {
			var modifier = this.sprite.dy / Math.abs(this.sprite.dy)
			this.sprite.setChangeY(this.sprite.dy -= 0.5 * modifier)
		}
		else {
			this.sprite.setChangeY(0)
		}

		if (this.sprite.dx < -1 || this.sprite.dx > 1) {
			var modifier = this.sprite.dx / Math.abs(this.sprite.dx)
			this.sprite.setChangeX(this.sprite.dx -= 0.5 * modifier)
		}
		else {
			this.sprite.setChangeX(0)
		}
	}

	this.checkCollisions = function () {
		// This is where we would take damage if I'd coded it...
	}
}

var base_types = {

	"crab_base": function(scene, x, y) {

		// Simple inheritance
		entity_base.call(this, x, y, "img/crab.png", 80, 80)

		this.update = function () {
			this.update_position()
			this.checkCollisions()
		}
	},
	"shark_base": function (scene, x, y) {
		entity_base.call(this, x, y, "img/shark.png", 256, 73)

		this.update = function() {

			if (getRandomInt(0, 1000) > 900) {
				var angle = getRandomInt(0, 360)
				this.sprite.setMoveAngle(angle)
			}
			if (getRandomInt(0, 100) > 75) {
				var speed = getRandomInt(5, 10)

				this.sprite.setSpeed(speed)
			}
			this.update_position()

		}
	}
}

// Collision is pretty bad on this one since it's a long, angled image.
function laser_beam(start_x, start_y, width, angle) {
	this.life_span = 5
	this.ctx = game.context

	this.sprite = new Sprite(game, "img/laser.png", width, 16)
	this.sprite.setPosition(start_x, start_y)
	this.sprite.setImgAngle(angle)
	this.sprite.setSpeed(0)

	this.update = function () {
		this.sprite.update()
		this.life_span--

		laser_snd.play()

		this.checkCollisions()
	}

	this.checkCollisions = function () {
		for (var index in shark_list) {
			if (this.sprite.collidesWith(shark_list[index].sprite)) {
				shark_list.splice(index, 1)
			}
		}
	}
}