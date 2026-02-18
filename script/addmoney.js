document.getElementById("add-money-btn").addEventListener("click", function () {
  // 1.get the bank
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount == "Select Bank") {
    alert("Please select a bank");
    return;
  }
  //2. get bank account number
  const bankAccountNumber = getValueFromInput("add-money-number");
  // console.log(bankAccountNumber)
  if (bankAccountNumber.length != 11) {
    alert("Invalid Number");
    return;
  }
  // 3. add amount
  const addMoneyAmount = getValueFromInput("add-money-amount");
  // console.log(addMoneyAmount)

  // 4.check the current balace
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
//   console.log(balance);

  const newBalance = Number(addMoneyAmount) + Number(balance);
  //   console.log( 'New Balance',newBalance)

  const pin = getValueFromInput("add-money-pin");
  if (pin == "1234") {
    alert(`Add Money Successful from
         ${bankAccount}
          at ${new Date()}`);
    balanceElement.innerText = newBalance;
  } else {
    alert("Invalid Pin");
    return;
  }
});
