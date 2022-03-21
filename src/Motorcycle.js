import Vehicle from "./Vehicle";

class Motorcycle extends Vehicle {
	constructor(name, color, wheels = 2) {
		super(name, color, wheels);
	}

	logTypeAndProps() {
		console.log(`Motorcycle specs: ${this.getPropsString()}`);
	}
}

export default Motorcycle;
