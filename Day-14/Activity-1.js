// classes

// class defination

// Task-1 Define a class person with properties name and age and a method to return a greeting a message create an instance of the class and log the greeting message.

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello MR.${this.name} you are successfully login and your age is ${this.age}`
    );
  }

  updateAge(newage) {
    this.age = newage;
    console.log(`New updated age is ${this.age}`);
  }
}

const p1 = new person("Ashish", 20);

p1.greet();

p1.updateAge(32);

// Task-2 Add a method to the person class that updates tha age prperty and log the updated age
