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
    // 1. history-container ke shore niye asbo
    const history = document.getElementById("history-container");

    // 2. new div create korbo
    const newHistory = document.createElement("div");
    // 3. new div innerHTML add korbo
    newHistory.innerHTML = `
     <div class="history-card p-5 bg-base-100 rounded-lg shadow space-y-5">
    <p>
      Add Money Successful from 
      <span class="font-semibold">${bankAccount}</span> 
      at ${new Date().toLocaleString()}
    </p>
  </div>
    `;
    // 4. history contianer e new div append korbo
    history.append(newHistory);
  } else {
    alert("Invalid Pin");
    return;
  }
});
