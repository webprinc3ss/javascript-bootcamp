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

let accountSummary = function (account) {
    let total = account.income - account.expenses
    let summary = (`${account.name} has ${total}. She has $${account.income} in income and $${account.expenses} in expenses.`) 

    console.log ('Summary: '+ summary)
}

let resetAccount = function (account) {

    account.income = '0'
    account.expenses = '0'
    return account
}


addExpense(myAccount,100)
console.log(myAccount)
addExpense(myAccount,200)
console.log(myAccount)
addIncome(myAccount,900)
console.log(myAccount)
accountSummary(myAccount)
resetAccount(myAccount)
console.log(myAccount)
accountSummary(myAccount)

//resetAccount (reset income and expenses of account to 0)

// getAccountSummary 
//Account for Andrew has $900, $1000 in income and $100 in expenses.

//addIncome
//addExpenes
//addExpene
//getAccountSummary
//resetAccount
//getAccountSummary

