function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  // console.log(id, value);
  return value;
}

function showOnly(id) {
  const addMoney = document.getElementById("add-money");
  const cashOut = document.getElementById("cashout");
  // console.log(`add money-${addMoney} , cash Out - ${cashOut}`);
  // sobai ke hide kore dao
  addMoney.classList.add('hidden')
  cashOut.classList.add('hidden')
  // id wala element ke tumi show koro
  const selected = document.getElementById(id);
  selected.classList.remove('hidden')
}
