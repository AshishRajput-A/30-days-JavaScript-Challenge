// class inheritance

// Task-3 define a class student that extends the person class. add a property studentID and a methos to return studetnID create a instance of student class and log the student ID.

// Task-4 Override the freeting method in the student class to include the student ID in the message . log the overridden greeting message.

class person {
  constructor(name, std) {
    this.name = name;
    this.std = std;
  }

  greet() {
    console.log(`MR.${this.name} is a our student.`);
  }
}

class student extends person {
  constructor(studentid, name, std) {
    super(name, std);
    this.studentid = studentid;
  }

  studentID() {
    console.log("student id .:", this.studentid);
    console.log("student name.:", this.name);
    console.log("standred.:", this.std);
  }

  greet() {
    console.log(
      `My name is ${this.name} and i study in ${this.std} and my student id is ${this.studentid}`
    );
  }
}

const s1 = new student(1111, "Ashish", 12);
const s2 = new student(2222, "Vijay", 10);

s1.studentID();
s2.studentID();
s1.greet();
