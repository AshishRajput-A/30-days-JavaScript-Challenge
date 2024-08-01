// Private fields

// Task-9  Define a class Account with pricate firlds for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

// Task-10 create an instance of the Account class and text the deposite and withdrew methods. loggin the balance after each operation

class Account {
  #balance;

  constructor(initialBalance) {
    // if (
    //   typeof initialBalance !== "number" ||
    //   isNaN(initialBalance) ||
    //   initialBalance < 0
    // ) {
    //   throw new Error("Initial balance be a non-negative number");
    // }
    this.#balance = initialBalance;
  }

  deposite(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log("You deposite successfully", amount, "$");
    } else {
      console.log(`Deposite amount must be positive.`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log("You withdraw successfully", amount, "$");
    } else {
      console.log("Invalid withdraw amount.");
    }
  }

  getbalance() {
    console.log("Your total balance is ", this.#balance, "$");
  }
}

const account1 = new Account(100);

account1.deposite(100);
account1.getbalance();

account1.withdraw(25);
account1.getbalance();
