document.addEventListener("DOMContentLoaded", () => {
  const expensesList = document.getElementById("expenses-list");
  const expenseInput = document.getElementById("expense-input");
  const amountInput = document.getElementById("amount-input");
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  function renderExpenses() {
    expensesList.innerHTML = "";
    expenses.forEach((expense, index) => {
      const expenseItem = document.createElement("div");
      expenseItem.classList.add("expense-item");
      expenseItem.innerHTML = `
                <span>${expense.description}</span>
                <span>$${expense.amount}</span>
                <button onclick="deleteExpense(${index})">Delete</button>
            `;
      expensesList.appendChild(expenseItem);
    });
  }
  function addExpense() {
    const description = expenseInput.value;
    const amount = parseFloat(amountInput.value);

    if (description && !isNaN(amount)) {
      expenses.push({ description, amount });
      renderExpenses();
      expenseInput.value = "";
      amountInput.value = "";
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  }
  function deleteExpense(index) {
    expenses.splice(index, 1);
    renderExpenses();
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }
  renderExpenses();
});
