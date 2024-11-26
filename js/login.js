var lEmailInput = document.querySelector("#l-email");
var lPassInput = document.querySelector("#l-password");
var loginbtn = document.querySelector("#login");
var wrongEmail = document.querySelector(".wEmail");
var wrongPassword = document.querySelector(".wPassword");
var noAccount=document.querySelector(".noAccount")

var userdata = JSON.parse(localStorage.getItem("userInfoLocal"));
function LoginFunction() {
  var email;
  var pass ;
  var userLog = {
    email: lEmailInput.value,
    password: lPassInput.value,
  };
  if (userdata !== null) {
    for (var i = 0; i < userdata.length; i++) {
      if (userdata[i].email === userLog.email) {
        email = true;
        localStorage.setItem("name", `${userdata[i].name}`);
        if (userdata[i].password === userLog.password) {
          pass = true;
        }else{
          pass = false;
        }
      }else{
        email = false;
      }
    }
    if (email === false) {
      wrongEmail.classList.remove("d-none");
      wrongEmail.classList.add("d-block");
    } else {
      wrongEmail.classList.add("d-none");
      wrongPassword.classList.remove("d-block");
    }
    if (pass === false) {
      wrongPassword.classList.remove("d-none");
      wrongPassword.classList.add("d-block");
    } else {
      wrongPassword.classList.add("d-none");
      wrongPassword.classList.remove("d-block");
    }

    if (email === true && pass === true) {
      window.location.href = "html/home.html";
    }
  } else {
    noAccount.classList.replace("d-none","d-block")
  }
}

loginbtn.addEventListener("click", function () {
  LoginFunction();
});
