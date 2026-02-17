console.log("login function comming");

document.getElementById("login-btn").addEventListener("click", function () {
  const inputNumber = document.getElementById("input-number");
  const contactNumber = inputNumber.value;
  console.log(contactNumber);

  const inputPin = document.getElementById("input-pin");
  const pin = inputPin.value;
  console.log(pin);

  if (contactNumber == "01722631957" && pin == "1234") {
    alert("Login Successfull");
    window.location.assign('home.html')
  }
   else {
    alert("Invalid");
    return;
  }
});
