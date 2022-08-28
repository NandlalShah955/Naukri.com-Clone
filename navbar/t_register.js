let users = JSON.parse(localStorage.getItem("users")) || [];
class user {
  constructor() {}
  validatePass(upassword) {
    let value = upassword.length < 6 ? false : true;
    return value;
  }
  signup(uemail, upassword) {
    let validated = false;
    validated = this.validatePass(upassword);
    if (validated) {
      this.email = uemail;
      this.pass = upassword;
      users.push(this);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(uemail));
      window.location.href = "./t_login.html";
    } else {
        alert("Please fill correct details");
        window.location.reload();
    }
  }
}

function signupUser() {
    
    event.preventDefault();
  let uemail = document.getElementById("u_emailID").value;
  let upassword = document.getElementById("u_Password").value;
  let User = new user();
    
  User.signup(uemail, upassword);
}