//!add money form
document.getElementById("add-money").addEventListener("click", function (e) {
  const addMoneyForm = document.getElementById("add-money-form");
  addMoneyForm.classList.remove("hidden");
  const cashOutForm = document.getElementById("cash-out-form");
  cashOutForm.classList.add("hidden");
  document
    .getElementById("btn-add-money")
    .addEventListener("click", function (e) {
      e.preventDefault();
      const pinNum = document.getElementById("add-pin-number").value;
      const addMoneyInput = document.getElementById("input-add-money").value;
      const currentBalance =
        document.getElementById("current-balance").innerText;
      // Convert the current balance to a number to perform arithmetic operations
      const addMoneyNumber = parseFloat(addMoneyInput);
      const currentBalanceNumber = parseFloat(currentBalance);

      // Check if the input is a number
      if (pinNum == "1234") {
        // Check if the current balance is a number and not NaN (Not a Number)
        // If it is, perform the addition and update the balance
        // Otherwise, display an error message and clear the input fields
        // Remember to convert the current balance to a number before performing the addition and update the balance to prevent type coercion issues
        if (
          typeof currentBalanceNumber === "number" &&
          typeof currentBalanceNumber !== "NaN" &&
          addMoneyNumber >= 0
        ) {
          let totalBalance = addMoneyNumber + currentBalanceNumber;
          document.getElementById("current-balance").innerText = totalBalance;
          alert("Money added successfully!");
          document.getElementById("input-add-money").value = "";
          document.getElementById("add-pin-number").value = "";
        } else {
          alert("Invalid current balance");
          document.getElementById("input-add-money").value = "";
          document.getElementById("add-pin-number").value = "";
        }
      } else {
        alert("Please enter a valid 4-digit PIN");
        document.getElementById("input-add-money").value = "";
        document.getElementById("add-pin-number").value = "";
      }
    });
});

//! cash out form
document.getElementById("cash-out").addEventListener("click", function () {
  const addMoneyForm = document.getElementById("add-money-form");
  addMoneyForm.classList.add("hidden");
  const cashOutForm = document.getElementById("cash-out-form");
  cashOutForm.classList.remove("hidden");

  document
    .getElementById("btn-cash-out")
    .addEventListener("click", function (e) {
      e.preventDefault();
      const cashOutInput = document.getElementById("input-cash-out").value;
      const cashOutAmount = parseFloat(cashOutInput);
      const pinNum = document.getElementById("out-pin-number").value;
      const currentBalance =
        document.getElementById("current-balance").innerText;
      const currentBalanceNumber = parseFloat(currentBalance);
      // Check if the input is a number
      if (pinNum == "1234") {
        if (
          typeof currentBalanceNumber === "number" &&
          typeof currentBalanceNumber !== "NaN" &&
          cashOutAmount >= 0
        ) {
          let totalBalance = currentBalanceNumber - cashOutAmount;
          document.getElementById("current-balance").innerText = totalBalance;
          alert("Money cashed out successfully!");
          document.getElementById("input-cash-out").value = "";
          document.getElementById("out-pin-number").value = "";
        } else {
          alert("Invalid current balance or amount");
          document.getElementById("input-cash-out").value = "";
          document.getElementById("out-pin-number").value = "";
        }
      } else {
        alert("Please enter a valid 4-digit PIN");
        document.getElementById("input-cash-out").value = "";
        document.getElementById("out-pin-number").value = "";
      }
    });
});
