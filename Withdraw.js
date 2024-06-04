/**
 (1)  Add event handler with the  withdraw button. 
 (2)  Get the withdraw amount from the withdraw input field.
(2.5) Also make sure to convert the input into a number by using parseFloat
(3)   Get previous withdraw total
(4)   calculate total withdraw amount
(4.4) Set total withdraw amount
(5)   Get the previous balance total
(6)   Calculate new balance total
(7)   Set the new balance total
(7)   Clear the input field
 */

//  Step-1 :
document.getElementById('btn-withdraw').addEventListener('click',function(){

//  Step-2 :
const withdrawField =document.getElementById('withdraw-field');
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);

withdrawField.value='';
if(isNaN(newWithdrawAmount)){
    alert('Please provide a vaild number');
    return;
}

//  Step-3 :
const withdrawTotalElement =document.getElementById('withdraw-total');
 const previousWithdrawTotalStrings = withdrawTotalElement.innerText;
 const previousWithdraw =parseFloat(previousWithdrawTotalStrings);

// Step-5   : 
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// Step-7 :
withdrawField.value='';

if( newWithdrawAmount > previousBalanceTotal){
    alert('BaaPer...Bank...a..ato..TaKa...naiiii!!');
    return;
}

// Step-4 :
const currentWithdrawTotal = previousWithdraw + newWithdrawAmount; 

// Step-4.5 :
withdrawTotalElement.innerText = currentWithdrawTotal;

// Step-6  :
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotalElement.innerText = newBalanceTotal;

})