const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
  document.getElementById("nameInput").value = "";
  document.getElementById("emailInput").value = "";
  document.getElementById("contactInput").value = "";
});

function validate() {
  var returnvalname = false;
  var returnvalemail = false;
  var returnvalcontact = false;
  var name = document.getElementById("nameInput").value;
  var email = document.getElementById("emailInput").value;
  var contact = document.getElementById("contactInput").value;
  var mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  var reg = /^[A-Za-z ]+$/;
  var phoneno = /^\d{10}$/;

  if (mail_format.test(email)) {
    returnvalemail = true;
  } else {
    alert("Enter a valid email");

    returnvalemail = false;
  }
  if (reg.test(name)) {
    returnvalname = true;
  } else {
    alert(
      "Name should contain only spaces and letters. No digits / special characters allowed."
    );
    returnvalname = false;
  }
  if (phoneno.test(contact)) {
    returnvalcontact = true;
  } else {
    alert("Enter Valid Contact Number");
    returnvalcontact = false;
  }

  if (returnvalemail && returnvalcontact && returnvalname) {
    setData();
    setTable();
  }
}

function setData() {
  var name = document.getElementById("nameInput").value;
  var email = document.getElementById("emailInput").value;
  var contact = document.getElementById("contactInput").value;
  localStorage.setItem("username", name);
  localStorage.setItem("useremail", email);
  localStorage.setItem("usercontact", contact);
}

function setTable() {
  const tableBody = document.getElementById("tableBody");
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const nameNode = document.createTextNode(localStorage.getItem("username"));
  td1.appendChild(nameNode);
  const td2 = document.createElement("td");
  const emailNode = document.createTextNode(localStorage.getItem("useremail"));
  td2.appendChild(emailNode);
  const td3 = document.createElement("td");
  const contactNode = document.createTextNode(
    localStorage.getItem("usercontact")
  );
  td3.appendChild(contactNode);
  tr.append(td1, td2, td3);
  tableBody.append(tr);
}
