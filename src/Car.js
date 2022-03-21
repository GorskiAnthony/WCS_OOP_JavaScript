import Vehicle from "./Vehicle";

class Car extends Vehicle {
	constructor(name, color, wheels = 4, lockDoors = true) {
		super(name, color, wheels);
		this.lockDoors = lockDoors;
	}

	logTypeAndProps() {
		console.log(
			`🚗 specs: ${this.getPropsString()} (🤫 the door is ${
				this.lockDoors ? "locked" : "unlocked"
			})`
		);
	}
}

export default Car;
