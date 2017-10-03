function entity_base() {

	this.vector2d = getVector2d()

	this.inventory = {}
	this.maxSpeed = 10
	this.maxHealth = 100
	this.currentHealth = 100

	this.update = function () {

	}
}

var base_types = {

	"crab_base": function(scene) {

		// Simple inheritance simulation
		entity_base.call(this)

		/* For prototype inheritance (uncomment if necessary, erase otherwise)
		this.prototype = Object.create(entity_base.prototype)

		this.prototype.constructor = this
		*/

		// Draw it
		this.sprite = new Sprite(game, "img/crab.png", 100, 100)
	}


}