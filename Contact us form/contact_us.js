// Additional script for event handlers
var nameInput = document.getElementById("exampleInputName1");
var emailInput = document.getElementById("exampleInputEmail1");
var text_area = document.querySelector("#floatingTextarea");

if (nameInput) {
  nameInput.addEventListener("focus", function () {
    FocusText(nameInput);
  });

  nameInput.addEventListener("blur", function () {
    LeaveFocus(nameInput);
  });
}

if (emailInput) {
  emailInput.addEventListener("focus", function () {
    FocusText(emailInput);
  });

  emailInput.addEventListener("blur", function () {
    validMail();
  });
}

function FocusText(e) {
  e.style.backgroundColor = "beige";
}

function LeaveFocus(e) {
  e.style.backgroundColor = "white";
  var viewText = document.getElementById("span1");
  if (e.value.trim() === "") {
    viewText.innerHTML = "Name cannot be empty";
  } else {
    viewText.innerHTML = ""; // Clear the error message
  }
}

function validMail() {
  var viewText3 = document.getElementById("span3");
  var mailInput = document.getElementById("exampleInputEmail1").value;
  var patt1 = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  var isValid = patt1.test(mailInput);

  if (isValid) {
    viewText3.innerHTML = "Valid Email";
  } else {
    viewText3.innerHTML = "Invalid Email";
  }
}
function email_send() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: `iti.team.99@gmail.com    `,
    Password: "580A28EC1F06EC381E992E4A765171081190",
    To: "iti.team.99@gmail.com",
    From: `iti.team.99@gmail.com`,
    Subject: `${nameInput.value}`,
    Body: `
    This Message from ${nameInput.value} , 
    <br/>
    Email: ${emailInput.value},
    <br/>
    THE MESSAGE: 
    <br/>
      ${text_area.value}`,
  }).then((message) =>
    alert("Message send successfully, We Will contact with you soon")
  );
}
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  if (
    nameInput.value != "" &&
    emailInput.value != "" &&
    text_area.value != ""
  ) {
    email_send();

    nameInput.value = "";
    emailInput.value = "";
    text_area.value = "";
    nameInput.focus();
  }
});

/**
 *
 */
