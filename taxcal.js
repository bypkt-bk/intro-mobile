let incomeFieldCount = 1; // Track the number of income fields

function addIncomeField() {
  if (incomeFieldCount >= 3) {
    alert("You can only add up to 3 income fields.");
    return;
  }

  const input = document.createElement("input");
  input.type = "number";
  input.className = "income-input";
  input.oninput = calculateTotalIncome;
  document.getElementById("income-group").appendChild(input);

  incomeFieldCount++;
}

function removeIncomeField() {
  const incomes = document.querySelectorAll(".income-input");
  if (incomes.length > 1) {
    incomes[incomes.length - 1].remove();
    calculateTotalIncome();
    incomeFieldCount--;
  }
}

function calculateTotalIncome() {
  let total = 0;
  document.querySelectorAll(".income-input").forEach((input) => {
    const value = Number(input.value);
    if (isNaN(value) || value < 0) {
      alert("Please enter a valid positive number.");
      input.value = "";
      total = 0; // Reset total if invalid input
    } else {
      total += value;
    }
  });
  document.getElementById("totalIncome").innerText = total;
  calculateTax(total);
}

function calculateTax(income) {
  let tax = 0;
  let rate = 0;

  if (income <= 150000) {
    rate = 0;
    tax = 0;
  } else if (income <= 300000) {
    rate = 5;
    tax = (income - 150000) * 0.05;
  } else if (income <= 500000) {
    rate = 10;
    tax = (income - 300000) * 0.1 + 7500;
  } else if (income <= 750000) {
    rate = 15;
    tax = (income - 500000) * 0.15 + 27500;
  } else if (income <= 1000000) {
    rate = 20;
    tax = (income - 750000) * 0.2 + 65000;
  } else if (income <= 2000000) {
    rate = 25;
    tax = (income - 1000000) * 0.25 + 115000;
  } else if (income <= 5000000) {
    rate = 30;
    tax = (income - 2000000) * 0.3 + 365000;
  } else {
    rate = 35;
    tax = (income - 5000000) * 0.35 + 1265000;
  }

  document.getElementById("taxRate").innerText = rate;
  document.getElementById("totalTax").innerText = tax.toFixed(2);
}
