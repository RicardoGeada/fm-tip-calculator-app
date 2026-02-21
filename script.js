const form = document.getElementById("form");
const bill = form.elements["bill"];
let tipInPercent = document.querySelector('input[name="tip"]:checked').value;
const numberOfPeople = form.elements["numberOfPeople"];
const tipAmount = form.elements["tipAmount"];
const total = form.elements["total"];

const customTip = document.getElementById("customtip");
const customTipInput = document.getElementById("customtipInput");

function updateCustomTip() {
    customTip.value = customTipInput.value;
}

function update() {
    const billValue = bill.valueAsNumber;
    const numberOfPeopleValue = numberOfPeople.value;
    tipInPercent = document.querySelector('input[name="tip"]:checked').value;

    if (billValue > 0 && numberOfPeopleValue > 0) {
        const tipAmountValue = ((billValue / numberOfPeopleValue) * (tipInPercent / 100));
    tipAmount.value = '$' + tipAmountValue;
    total.value = '$' + ((billValue / numberOfPeopleValue) + tipAmountValue);
    }
}

form.addEventListener("input", update);
customTipInput.addEventListener("input", updateCustomTip);

update();