'use strict';

// let money = prompt('What is your monthly budget?');
// let time = prompt('Enter the date in the format YYYY-MM-DD');

let money = 9999;
let time = '2019-08-06';

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
}

console.log(appData.timeData)
const q1 = 'Community expenses';
let q2 = 1254;
let q3 = 'Toys';
let q4 = 311;


appData.expenses[q1] = q2;
appData.expenses[q3] = q4;


console.log(`Your budget for one day is:
1) $${money.toFixed(2)} / 30 days = $${(money / 30).toFixed(2)} per day
2) expenses $${(Number(appData.expenses['Community expenses'] + appData.expenses['Toys']) / 30).toFixed(2)} per day
3) left over free money: $${((money - appData.expenses['Community expenses'] - appData.expenses['Toys']) / 30).toFixed(2)} per day
`);