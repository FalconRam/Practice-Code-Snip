// function greet(name) {
//   console.log(`Hello, ${name}! I'm ${this.name}.`);
// }

// const person = { name: "John" };

// greet.call(person, "Alice");

function Car(type, fuelType){
	this.type = type;
	this.fuelType = fuelType;
  return this
}

function setBrand(brand){
	console.log((Car("convertible", "petrol")).fuelType)
	this.brand = brand;
	console.log(`Car details = `, this);
}

// function definePrice(price){
// 	Car.call(this, "convertible", "diesel");
// 	this.price = price;
// 	console.log(`Car details = `, this);
// }

const newBrand = new setBrand('Brand1');
// const newCarPrice = new definePrice(100000);