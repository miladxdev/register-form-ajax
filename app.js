// DOM
const form = document.querySelector("#form");
const inputFname = document.querySelector("#input-fname");
const inputLname = document.querySelector("#input-lname");
const inputUsername = document.querySelector("#input-username");
const inputCity = document.querySelector("#input-city");
const inputState = document.querySelector("#input-state");
const inputZip = document.querySelector("#input-zip");

function getUser() {
  const url = "http://localhost:3000/users";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      console.log(response);
    }
  };

  xhr.send();
}
// getUser();

function postUser() {
  const url = "http://localhost:3000/users";
  const xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      console.log("response");
    }
  };

  let data = {
    id: Math.random(),
    "first name": inputFname.value,
    "last name": inputLname.value,
    username: inputUsername.value,
    city: inputCity.value,
    state: inputState.value,
    zip: inputZip.value,
  };

  xhr.send(JSON.stringify(data));
}

form.addEventListener(
  "submit",
  function (event) {
    event.preventDefault();
    console.log("submit clicked");
    postUser();
  },
  false
);
