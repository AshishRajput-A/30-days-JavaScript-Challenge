// Static methods and properties

// Task-5 Add static method to the person class that return a generic greeting message. call this static method wothout creating an instance of the class and log the message.

// Task-6 Add a static properties to the student class to keep track of the number of students created. increment this property in the constructor and log the total  number of students.

class person {
  constructor(name, std) {
    this.name = name;
    this.std = std;
  }

  static greet() {
    console.log(`MR.${this.name} is a our student.`);
  }
}

person.greet();

class student {
  static totalStudent = 0;

  constructor(name, std) {
    this.name = name;

    this.std = std;

    student.totalStudent++;
  }

  static totalNumberOFStudent() {
    console.log("Total students are.:", student.totalStudent);
  }
}

const s1 = new student("Ashish", 12);
const s2 = new student("Ajay", 10);
const s3 = new student("Vijay", 10);
const s4 = new student("Amrita", 11);
const s5 = new student("Anamol", 5);

student.totalNumberOFStudent();
