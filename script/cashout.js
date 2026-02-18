document.getElementById("cashout-btn").addEventListener("click", function () {
  const cashoutNumber = getValueFromInput("cashout-number");
  if (cashoutNumber.length != 11) {
    alert("Invalid Number");
    return;
  }

  const cashoutAmount = getValueFromInput("cashout-amount");

  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  // console.log(balance);

  const newBalance = Number(balance) - Number(cashoutAmount);
  // console.log(newBalance);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }

  const pin = getValueFromInput("cashout-pin");
  if (pin === "1234") {
    alert("Cashout Successful");
    balanceElement.innerText = newBalance;
  } else {
    alert("Invalid Pin");
    return;
  }
});

// document.getElementById("cashout-btn").addEventListener("click", function () {
//   // 1. check the cashout number
//   const cashoutNumberInput = document.getElementById("cashout-number");
//   const cashoutNumber = cashoutNumberInput.value;
//   console.log(cashoutNumber);
//   if (cashoutNumber.length != 11) {
//     alert("Invalid Agent Number");
//     return;
//   }

//   // check cashout amount
//   const cashoutAmountInput = document.getElementById("cashout-amount");
//   const cashoutAmount = cashoutAmountInput.value;
//   console.log(cashoutAmount);

//   // check the main balace
//   const balanceElement = document.getElementById("balance");
//   const balance = balanceElement.innerText;
//   console.log(balance);

//   // calculate newBalance
//   const newBalance = Number(balance) - Number(cashoutAmount);
//   if (newBalance < 0) {
//     alert("Insufficient balance");
//     return;
//   }

//   // check the pin and withdrow or not
//   const cashoutPinInput = document.getElementById("cashout-pin");
//   const pin = cashoutPinInput.value;
//   console.log(pin);

//   if (pin === "1234") {
//     alert("cashout successful");
//     console.log("New balance:", newBalance);
//     balanceElement.innerText = newBalance;
//   } else {
//     alert("Invalid pin");
//   }
// });
