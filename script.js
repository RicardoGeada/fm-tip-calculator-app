const form = document.getElementById("form");

const bill = form.elements["bill"];
const numberOfPeople = form.elements["numberOfPeople"];
const tipAmount = form.elements["tipAmount"];
const total = form.elements["total"];

const customTip = document.getElementById("customtip");
const customTipInput = document.getElementById("customtipInput");

function getSelectedTipPercent() {
  const selected = document.querySelector('input[name="tip"]:checked');
  return selected ? Number(selected.value) : 0;
}

function formatMoney(value) {
  return "$" + value.toFixed(2);
}

function validate(billValue, peopleValue) {
  if (!billValue || billValue <= 0) return false;
  if (!peopleValue || peopleValue <= 0) return false;
  return true;
}

function updateCustomTip() {
  customTip.value = customTipInput.value;
}

function update() {
  const billValue = bill.valueAsNumber;
  const peopleValue = numberOfPeople.valueAsNumber;
  const tipInPercent = getSelectedTipPercent();

  if (!validate(billValue, peopleValue)) {
    tipAmount.value = "$0.00";
    total.value = "$0.00";
    return
  }

  const billPerPerson = billValue / peopleValue;
  const tipPerPerson = billPerPerson * (tipInPercent / 100);
  const totalPerPerson = billPerPerson + tipPerPerson;

  tipAmount.value = formatMoney(tipPerPerson);
  total.value = formatMoney(totalPerPerson);
  console.log("update");
}

form.addEventListener("input", update);
customTipInput.addEventListener("input", updateCustomTip);

update();
