// document
//   .getElementById("login-btn")
//   .addEventListener("click", function (event) {
//     event.preventDefault();

//     const phoneNum = document.getElementById("phone-number").value;
//     const pinNum = document.getElementById("pin-number").value;
//     //* Perform validation
//     if (phoneNum === "5" || pinNum === "1234") {
//       console.log("Youre logged in successfully");
//     } else {
//       alert("Wrong pin or number");
//     }
//   });

document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const phnNum = document.getElementById("phone-number").value;
    const pinNum = document.getElementById("pin-number").value;

    if (phnNum === "5" && pinNum === "1235") {
      window.location.href = "/home.html";
    } else {
      alert("Invalid phone number or pin number!");
    }
  });
