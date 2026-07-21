// secure Bank accounts (Factory Function + Closure+ this) 
// Create a factory function named createBankAccount();

function createBankAccount(accountHolder, mobile, email, balance) {

    return {
        accountHolder: accountHolder,
        mobile: mobile,
        email: email,
        balance: balance,

        deposit: function(amount) {
            this.balance = this.balance + amount;
            console.log("Amount deposited: " + amount);
        },

        withdraw: function(amount) {
            if (amount <= this.balance) {
                this.balance = this.balance - amount;
                console.log("Amount withdrawn: " + amount);
            } else {
                console.log("Insufficient balance");
            }
        },

        checkBalance: function() {
            console.log("Current balance: " + this.balance);
        },

        checkBankProfile: function() {
            console.log("Account Holder: " + this.accountHolder);
            console.log("Mobile: " + this.mobile);
            console.log("Email: " + this.email);
            console.log("Balance: " + this.balance);
        }
    };
}

var account = createBankAccount(
    "Ansh Gandhi",
    "6969696969",
    "ansh@gmail.com",
    5000
);
account.checkBalance();
account.deposit(1000);
account.withdraw(500);
account.checkBalance();
account.checkBankProfile();

account.deposit.call(account, 200);
account.withdraw.apply(account, [100]);