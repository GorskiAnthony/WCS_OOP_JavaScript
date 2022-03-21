import Vehicle from "./Vehicle";

class Car extends Vehicle {
	constructor(name, color, wheels = 4, lockDoors = true) {
		super(name, color, wheels);
		this.lockDoors = lockDoors;
	}

	logTypeAndProps() {
		console.log(
			`Cars specs: ${this.getPropsString()}
LockDoors has a value of ${this.lockDoors}`
		);
	}
}

export default Car;
