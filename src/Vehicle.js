class Vehicle {
	constructor(name, color, wheels) {
		this.color = color;
		this.name = name;
		this.wheels = wheels;
	}

	getPropsString() {
		return `Name has a value of ${this.name}  
Color has a value of ${this.color}
Wheels has a value of ${this.wheels}`;
	}

	logTypeAndProps() {
		console.log(`Vehicle specs: ${this.getPropsString()}`);
	}
}

export default Vehicle;
