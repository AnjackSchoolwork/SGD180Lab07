function entity_base() {

	this.x
	this.y
	this.sprite = new Sprite(game, "", 0, 0)

	this.inventory = {}
	this.moveInc = 5
	this.currentSpeed = 0
	this.maxSpeed = 10
	this.maxHealth = 100
	this.currentHealth = 100

	this.update = function () {

		checkKeys()

		this.followGravity()
		this.drainInertia()
		this.checkCollisions()

		this.y = this.sprite.y
		this.x = this.sprite.x

		this.sprite.update()
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

	this.followGravity = function () {
		// Send me toward the bottom.
		// This is so janky
		if (this.y < game.height - (this.sprite.height / 2)) {
			if (this.sprite.dy == 0)
				this.sprite.setChangeY(this.moveInc)
		}
	}

	this.checkCollisions = function () {
		for (var index in platforms) {
			var that = {}
			that.x = platforms[index].x
			that.y = platforms[index].y
			that.width = platforms[index].width
			that.height = platforms[index].height
			that.x_min = that.x - (that.width / 2)
			that.x_max = that.x + (that.width / 2)
			that.y_min = that.y - (that.height / 2)
			that.y_max = that.y + (that.height / 2)

			var x_min = this.x - (this.sprite.width / 2)
			var x_max = this.x + (this.sprite.width / 2)

			var y_min = this.y - (this.sprite.height / 2)
			var y_max = this.y + (this.sprite.height / 2)

			if (this.sprite.collidesWith(platforms[index])) {
				if (x_max > that.x_min) {
					if (this.sprite.dx > 0) {
						this.sprite.setPosition(this.x + this.moveInc, this.y)
						this.sprite.setChangeX(0)
					}
				}
				if (x_min < that.x_max) {
					if (this.sprite.dx < 0) {
						this.sprite.setPosition(this.x - this.moveInc, this.y)
						this.sprite.setChangeX(0)
					}
				}
				if (y_max > that.y_min) {
					if (this.sprite.dy > 0) {
						this.sprite.setPosition(this.x, this.y + this.moveInc)
						this.sprite.setChangeY(0)
					}
				}
				if (y_min < that.y_max) {
					if (this.sprite.dy < 0) {
						this.sprite.setPosition(this.x, this.y - this.moveInc)
						this.sprite.setChangeY(0)
					}
				}
			}
		}
	}
}

var base_types = {

	"crab_base": function(scene, x, y) {

		// Simple inheritance simulation
		entity_base.call(this)

		/* For prototype inheritance (uncomment if necessary, erase otherwise)
		this.prototype = Object.create(entity_base.prototype)

		this.prototype.constructor = this
		*/

		// Draw it
		this.sprite = new Sprite(game, "img/crab.png", 100, 100)
		this.sprite.setPosition(x, y)
		this.sprite.setSpeed(0)
	}


}