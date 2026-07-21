function createBankAccount(AccountHolder, Mobile, Email, Balance = 0) {
    let balance = Number(Balance);

    function deposit(amount) {
        if (amount > 0) {
            balance += amount;
            sendMail.call(this, "deposit", amount, balance);zzz
            return `Balance is ₹${balance}`;
        }

        return "Invalid deposit amount";
    }

    function withdraw(amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            sendMail.call(this, "withdraw", amount, balance);
            return `Balance is ₹${balance}`;
        }

        return amount > balance
            ? "Insufficient balance"
            : "Invalid withdraw amount";
    }

    function checkBalance() {
        return `Current Balance is ₹${balance}`;
    }

    return {
        AccountHolder,
        Mobile,
        Email,
        deposit,
        withdraw,
        checkBalance
    };
}

function sendMail(transaction, amount, balance) {
    console.log(`
To: ${this.Email}

Hello ${this.AccountHolder},

This is to inform you that an amount of ₹${amount} has been successfully ${transaction}ed.

Available Balance: ₹${balance}
`);
}

const account = createBankAccount(
    "Ansh",
    "8849967270",
    "ansh@gmail.com",
    10000
);

console.log(account.checkBalance());
console.log(account.deposit(5000));
console.log(account.withdraw(8500));
console.log(account.checkBalance());