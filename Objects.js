
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

	this.update_position = function () {
		
		checkKeys()
		
		this.drainInertia()

		this.sprite.update()
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

	this.jumpUp = function () {
		this.sprite.setChangeY(-10)
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
		for (var index in kelp_list) {
			if (this.sprite.collidesWith(kelp_list[index])) {

			}
		}
	}
}

var base_types = {

	"crab_base": function(scene, x, y) {

		// Simple inheritance
		entity_base.call(this, x, y, "img/crab.png", 80, 80)

		this.update = function () {
			this.update_position()
		}
	},
	"kelp_base": function (scene, x, y) {
		entity_base.call(this, x, y, "img/kelp.png", 48, 64)

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