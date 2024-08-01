// Getters and Setters
// Task-7 Add a getter method to the person class to return the fullname (assume a firstname and lastname property ). create an instance and log the full name using the getter.

//Task-8 Add a setter method to the person class and update first and lastname by creating update method

class person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get fullname() {
    return `Hello my name is ${this.firstname} ${this.lastname}.`;
  }

  set updatefullname(name) {
    const [firstname, lastname] = name.split(" ");

    this.firstname = firstname;
    this.lastname = lastname;
  }
}

const p1 = new person("Rajput", "Ashish");

console.log(p1.fullname);

p1.updatefullname = "Yadav aayush";
console.log(p1.fullname);
