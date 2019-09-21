// creating an empty menu object
const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  
  // creating getters and setters
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  
  // adding a new dish to the specified course
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  
  // geting a random dish from a course
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];    
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  
  // generating a random meal
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');  
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice.toFixed(2)}`;
  },
};

// adding dishes to appetizers, mains, and desserts
menu.addDishToCourse('appetizers', 'salad', 4.00);
menu.addDishToCourse('appetizers', 'wings', 4.50);
menu.addDishToCourse('appetizers', 'fries', 5.00);

menu.addDishToCourse('mains', 'steak', 10.25);
menu.addDishToCourse('mains', 'salmon', 7.75);
menu.addDishToCourse('mains', 'tofu', 11.20);

menu.addDishToCourse('desserts', 'ice cream', 3.00);
menu.addDishToCourse('desserts', 'coffee', 3.00);
menu.addDishToCourse('desserts', 'cake', 3.25);

// generating a meal
const meal = menu.generateRandomMeal();
console.log(meal);
