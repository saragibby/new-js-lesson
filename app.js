// create a class for a fruit market
class FruitMarket {
    constructor(name, location, fruits) {
        this.name = name;
        this.location = location;
        this.fruits = fruits;
    }
    // create a method to add a fruit to the fruits array
    addFruit(fruit) {
        this.fruits.push(fruit);
    }
    // create a method to remove a fruit from the fruits array
    removeFruit(fruit) {
        this.fruits = this.fruits.filter((f) => f !== fruit);
    }
    // create a method to display the fruits array
    displayFruits() {
        console.log(this.fruits);
    }
    }
    // create a class for a fruit
    class Fruit {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    }
    // create a fruit market object
    const fruitMarket = new FruitMarket("Fruit Market", "London", []);
    // create a fruit object
    const fruit = new Fruit("Apple", 1.5);
    // add a fruit to the fruits array
    fruitMarket.addFruit(fruit);
    // display the fruits array
    fruitMarket.displayFruits();
    // remove a fruit from the fruits array
    fruitMarket.removeFruit(fruit);
    // display the fruits array
    fruitMarket.displayFruits();

module.exports = {
    FruitMarket,
    Fruit
}