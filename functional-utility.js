// getting input values
function getInputFieldById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldAmountString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldAmountString);
    if(inputField.value === ''){
        alert('empty value');
        return 0;
    }
    inputField.value = '';
    return inputFieldValue;
}

// getting previousTotal values
function getElementValueByID(elementId){
    const textElement = document.getElementById(elementId);
    const textElementTotalString = textElement.innerText;
    const textElementTotal = parseFloat(textElementTotalString);
    return textElementTotal;
}


// setting element values
function setTextElementValueByID(elementID,newValue){
    const setTextElement = document.getElementById(elementID);
    setTextElement.innerText = newValue;
}

document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositAmount = getInputFieldById('deposit-field');
    const previousDepositTotal = getElementValueByID('deposit-total');
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueByID('deposit-total',newDepositTotal);

    //calculating balance
    const prevBalanceTotal = getElementValueByID('balance');
    const newBalance = prevBalanceTotal + newDepositAmount;
    setTextElementValueByID('balance',newBalance);
})

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputFieldById('withdraw-field');
    const prevBalanceTotal = getElementValueByID('balance');
    if(newWithdrawAmount>prevBalanceTotal){
        alert("You Don't have Enough Balance to Withdraw");
        return;
    }
    const prevWithdrawTotal = getElementValueByID('withdraw-total');
    const newWithdrawTotal = prevWithdrawTotal + newWithdrawAmount;
    setTextElementValueByID('withdraw-total',newWithdrawTotal);

    //calculating balance
    const newBalance = prevBalanceTotal - newWithdrawAmount;
    setTextElementValueByID('balance',newBalance);
})