import Vehicle from "./Vehicle";

class Motorcycle extends Vehicle {
	constructor(name, color, wheels = 2) {
		super(name, color, wheels);
	}

	logTypeAndProps() {
		console.log(`🏍 specs: ${this.getPropsString()}`);
	}
}

export default Motorcycle;
