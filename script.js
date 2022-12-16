


function getPassword() {
    let passInput = document.getElementById("passwordBtn")
    let passInput2 = document.getElementById("passwordBtn2")

    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
    let passwordLength = 15;
    let password = "";
    let password2 = "";

    for (i = 0; i < passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      let randomNumber2 = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
      password2 += chars.substring(randomNumber2, randomNumber2 + 1);
    }

    passInput.textContent = password
    passInput2.textContent = password2
  }
  