class banking {
    constructor(accountNumber, accountHolder, balance)
    {
        this.accountNumber = "account number is"+ 45567890;
        this.accountHolder = "John Doe";
        this.balance = 1000;
    }
    deposit(amount)
    {
        this.balance += amount;
    }
    withdraw(amount)
    {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient balance");
        }
    }
    getBalance()
    {
        return this.balance;
    }
}
const myAccount = new banking();
console.log(myAccount);
console.log(myAccount.accountNumber);
console.log(myAccount.accountHolder);
console.log(myAccount.balance);
console.log(myAccount.getBalance());
myAccount.deposit(500);
console.log(myAccount.getBalance());
myAccount.withdraw(200);
console.log(myAccount.getBalance());
myAccount.withdraw(1500);
console.log(myAccount.getBalance());