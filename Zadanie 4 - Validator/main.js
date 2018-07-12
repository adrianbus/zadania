function checkPassword() {
  let firstName = document.forms.form.firstName.value;
  let lastName = document.forms.form.lastName.value;
  let login = document.forms.form.login.value;
  let password = document.forms.form.password.value;

  if (firstName == "" || lastName == "" || login == "") {
    alert("Enter first name, last name and login");
  } else if (password == "") {
    alert("Password can't be empty");
  } else if (password.search(/[A-Z]/) == -1) {
    alert("Password must contain big letter");
  } else if (password.search(/\d/) == -1) {
    alert("Password must contain number");
  } else if (compareStrings(password, firstName) != -1) {
    alert("Password can't contain first name");
  } else if (compareStrings(password, lastName) != -1) {
    alert("Password can't contain last name");
  } else if (compareStrings(password, login) != -1) {
    alert("Password can't contain login");
  } else {
    alert("Password correct");
  }
}

function compareStrings(string1, string2) {
  string1 = string1.toLocaleLowerCase();
  string2 = string2.toLocaleLowerCase();
  return string1.search(string2);
}
