// window.onload = function() {
//   alert("Happy Birthday My Girl🤍");
// };

function validateLogin() {
  const name = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  const correctName = "Mythili";
  const correctPassword = "02022025";

  console.log("Checking credentials...");

  if (name === correctName && password === correctPassword) {
    console.log("Login successful — redirecting...");
    localStorage.setItem("username", name);
    window.location.href = "nextpage.html";
    return false; // prevent form reload
  } else {
    console.log("Login failed");
    error.textContent = "Incorrect Name or Password ❌";
    error.style.color = "red";
    return false; // prevent form reload
  }
}
