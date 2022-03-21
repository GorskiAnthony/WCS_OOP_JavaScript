import Vehicle from "./Vehicle";

class Car extends Vehicle {
	constructor(name, color, wheels = 4, isLocked = false) {
		super(name, color, wheels);
		this.isLocked = isLocked;
	}

	logTypeAndProps() {
		console.log(
			`🚗 specs: ${this.getPropsString()} (🤫 the door is ${
				this.isLocked ? "locked" : "unlocked"
			})`
		);
	}
}

export default Car;
