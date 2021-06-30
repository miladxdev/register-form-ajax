// DOM
const form = document.querySelector("#form");
const inputFname = document.querySelector("#input-fname");
const inputLname = document.querySelector("#input-lname");
const inputUsername = document.querySelector("#input-username");
const inputEmail = document.querySelector("#input-email");
const inputPassword = document.querySelector("#input-pass");
const dataSection = document.querySelector("#data");

function createTable(data) {
  let html = "";
  let tr = "";
  let tableRows = "";
  let tableHeader = "";

  for (let key in data[0]) {
    if (key !== "id") {
      tableHeader += `<th>${key}</th>`;
    }
  }

  data.map((value) => {
    tr += `
      <tr>
        <td>${value["first name"]}</td>
        <td>${value["last name"]}</td>
        <td>${value.username}</td>
        <td>${value.email}</td>
        <td>${value.password}</td>
      </tr>
    `;

    tableRows += tr;
  });

  html = `<table> ${tableHeader} ${tableRows} </table>`;
  dataSection.innerHTML = html;
}

function getUser() {
  const url = "http://localhost:3000/users";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      // console.log(response.length);

      createTable(response);
    }
  };

  xhr.send();
}
getUser();

function postUser() {
  const url = "http://localhost:3000/users";
  const xhr = new XMLHttpRequest();

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json");

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 201) {
      let response = JSON.parse(this.responseText);
      // console.log(response);
      getUser();
    }
  };

  let data = {
    id: Math.random(),
    "first name": inputFname.value,
    "last name": inputLname.value,
    username: inputUsername.value,
    email: inputEmail.value,
    password: inputPassword.value,
  };

  xhr.send(JSON.stringify(data));
}

form.addEventListener(
  "submit",
  function (event) {
    event.preventDefault();

    postUser();
  },
  false
);
