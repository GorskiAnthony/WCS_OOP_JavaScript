class Vehicle {
	constructor(name, color, wheels) {
		this.color = color;
		this.name = name;
		this.wheels = wheels;
	}

	getPropsString() {
		return `The name of your vehicle is ✨${this.name}✨ it is 🌈${this.color}🌈 color and has 🛞${this.wheels}🛞 wheel(s)!`;
	}

	logTypeAndProps() {
		console.log(`Vehicle specs: ${this.getPropsString()}`);
	}
}

export default Vehicle;
