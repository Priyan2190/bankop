class bank {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log("deposited", amount);
    console.log(this.balance);
  }
  withdraw(amount) {
    if (this.balance <= 0) {
      console.log("no money left paaji");
      return;
    }
    this.balance -= amount;
    console.log("withdrew", amount);
    console.log(this.balance);
  }
}

const hdfc = new bank(0);
console.log(hdfc.balance);

console.log(hdfc.balance);

const depobtn = document.getElementById("deposit");
const amountin = document.getElementById("amount");
const withbtn = document.getElementById("withdraw");
const balanceDiv = document.getElementById("balance");

depobtn.onclick = () => {
  const amnt = Number(amountin.value);
  hdfc.deposit(amnt);
  balanceDiv.innerText = `Balance:${hdfc.balance}`;
};
withbtn.onclick = () => {
  const amnt = Number(amountin.value);
  hdfc.withdraw(amnt);
  balanceDiv.innerText = `Balance:${hdfc.balance}`;
};
