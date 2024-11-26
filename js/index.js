var sNameInput = document.querySelector("#Sname");
var sEmailInput = document.querySelector("#Semail");
var sPassInput = document.querySelector("#Spassword");
var signbtn = document.querySelector("#signUp");
var sinputs = document.querySelectorAll(".signUp input");
var signSuccess = document.querySelector(".signSuccess");
var emailExist =document.querySelector(".emailExist")
var notValid =document.querySelector(".notValid")
//log in var

//array
var userInfo;
// ***************** sing up page ***************//
// local storage getitem into array ==> (userInfo)
if (localStorage.getItem("userInfoLocal") == null) {
  userInfo = [];
} else {
  userInfo = JSON.parse(localStorage.getItem("userInfoLocal"));
}

// function signup  add user data to array and check if the data is valid
function signUp() {
  var push = true;
  if (
    sNameInput.classList.contains("is-valid") &&
    sEmailInput.classList.contains("is-valid") &&
    sPassInput.classList.contains("is-valid")
  ) {
    var user = {
      name: sNameInput.value,
      email: sEmailInput.value,
      password: sPassInput.value,
    };

    for (var i = 0; i < userInfo.length; i++) {
      if (userInfo[i].email === user.email) {
        push = false;
        emailExist.classList.replace("d-none" , "d-block")
        

      }
    }
    signSuccess.classList.add("d-none");
    if (push == true) {
      userInfo.push(user);
      localStorage.setItem("userInfoLocal", JSON.stringify(userInfo));
      signSuccess.classList.remove("d-none");
      signSuccess.classList.add("d-block");
    }
  } else {
    notValid.classList.replace("d-none" , "d-block")
  }
}

//function set regex on input
function signUpValid(element) {
  var regex = {
    Sname: /^[A-Z][a-z]{2,10}$/,
    Semail: /^[A-Z][a-z0-9]{3,10}@(yahoo|gmail)\.(net|com)$/,
    Spassword: /^\w{5,10}$/,
  };

  if (regex[element.id].test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    element.nextElementSibling.classList.add("d-none");
    element.nextElementSibling.classList.remove("d-block");
    emailExist.classList.add("d-none")
    notValid.classList.add("d-none")
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    element.nextElementSibling.classList.remove("d-none");
    element.nextElementSibling.classList.add("d-block");
    emailExist.classList.add("d-none")
    notValid.classList.add("d-none")
  }
}
// loop on nodelist to get the current input to call singUpValid function
for (var i = 0; i < sinputs.length; i++) {
  sinputs[i].addEventListener("input", function () {
    signUpValid(this);
  });
}

//add event on sign up button to fire signUp function
signbtn.addEventListener("click", function () {
  signUp();
  clear();
});

// ***************** clear  ***************//

function clear() {
  sNameInput.value = null;
  sEmailInput.value = null;
  sPassInput.value = null;
  sNameInput.classList.remove("is-valid");
  sEmailInput.classList.remove("is-valid");
  sPassInput.classList.remove("is-valid");

}
