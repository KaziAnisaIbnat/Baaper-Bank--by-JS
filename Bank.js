 
// Step-1 : Add event listener to deposit button 
document.getElementById('btn-deposit').addEventListener('click',function(){
/* Step-2 : Get the deposit amount from the deposit input field.
For input field use .value to the value inside the input field.     */                                
const depositField = document.getElementById('deposit-field');
const newDepositAmountString = depositField.value;
const newDepositAmount = parseFloat(newDepositAmountString);
console.log(newDepositAmount);

// Step-3 : Get the current or previous deposit total.
const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalStrong = depositTotalElement.innerText; 
const previousDepositTotal = parseFloat(previousDepositTotalStrong);
console.log(typeof  previousDepositTotal);

// Step-4 : Add numbers to set the deposit.
const currentDepositTotal = previousDepositTotal + newDepositAmount; 
//              set the deposit total
depositTotalElement.innerText = currentDepositTotal;

// Step-5 : Get balance current total.
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);


// Step-6 : Calculate current total balance.
const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
//                  set the balance total.
balanceTotalElement.innerText = currentBalanceTotal;

// Step-7 : Clear the deposit filed
depositField.value = '';
})