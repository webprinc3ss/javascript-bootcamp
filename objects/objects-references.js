let myAccount = {
    name: 'Danielle Branton',
    expenses: 0,
    income: 0
}

//addExpense
let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
    return account
}

// addIncome (account, amount)
let addIncome = function (account, amount) {
    account.income = account.income + amount
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let accountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has ${balance}. $${account.income} in income and $${account.expenses} in expenses.`
}

addIncome (myAccount, 2000)
addExpense(myAccount,2.50)
addExpense(myAccount,160)
console.log(accountSummary(myAccount))
resetAccount(myAccount)
console.log(accountSummary(myAccount))


//resetAccount (reset income and expenses of account to 0)

// getAccountSummary 
//Account for Andrew has $900, $1000 in income and $100 in expenses.

//addIncome
//addExpenes
//addExpene
//getAccountSummary
//resetAccount
//getAccountSummary

