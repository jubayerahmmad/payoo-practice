document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const pinNum = document.getElementById("pin-number").value;
    const addMoneyInput = document.getElementById("input-add-money").value;
    const currentBalance = document.getElementById("current-balance").innerText;
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
        document.getElementById("pin-number").value = "";
      } else {
        alert("Invalid current balance");
        document.getElementById("input-add-money").value = "";
        document.getElementById("pin-number").value = "";
      }
    } else {
      alert("Please enter a valid 4-digit PIN");
      document.getElementById("input-add-money").value = "";
      document.getElementById("pin-number").value = "";
    }
  });
