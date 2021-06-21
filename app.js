function getUser() {
  const url = "http://localhost:3000/users";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    // console.log();
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      console.log(response);
    }
  };

  xhr.send();
}

getUser();
