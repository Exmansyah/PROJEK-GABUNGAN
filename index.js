let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let indexLink = document.getElementById("indexLink");

let navButton = document.getElementById("navButton");
let loginContainer = document.getElementById("loginContainer");
let lampuContainer = document.getElementById("lampuContainer");

navButton.style.display = "none";
lampuContainer.style.display = "none";


function onLogin() {
  localStorage.setItem("username", usernameInput.value);
  localStorage.setItem("password", passwordInput.value);
  if (usernameInput.value == "admin" && passwordInput.value == "admin123") {
    localStorage.setItem("role", "admin");
    lampuContainer.style.display = "block";
    loginContainer.style.display = "none";
    navButton.style.display = "block";
  }
  else {
    alert("Anda Tidak Terdaftar");
    location.reload();
    localStorage.clear();
    return;
  }
  
  if(localStorage.getItem("username"))
  console.log("testing...");
    localStorage.setItem("role", "admin");
    lampuContainer.style.display = "block";
    loginContainer.style.display = "none";
    navButton.style.display = "block";
}

function onLogout() {
  localStorage.clear();
  location.reload();
}

function mode() {
  alert("COOMING SOON");
}