import navbar_t from "../components/t_nabar_com.js";

document.querySelector("#login_navbar").innerHTML = navbar_t();


class user {
    constructor() {}
    login(uemail, upassword) {
      let users = JSON.parse(localStorage.getItem("users"));
      let data = true;
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === uemail && users[i].pass === upassword) {
          data = true;
          localStorage.setItem("currentUser", JSON.stringify(uemail));
          break;
        } else {
          data = false;
        }
        if (data == true) {
          break;
        }
      }
      if (data == true) {
        window.location.href = "/Shaikh.JobSearch/job.html";
      } else {
          alert("Wrong Credentials");
          window.location.reload();
      }
    }
}

  function loginUser() {
    event.preventDefault();
    let uemail = document.getElementById("t_e_mail").value;
    let upassword = document.getElementById("t_pass_word").value;
    let User = new user();
    User.login(uemail, upassword);
}
document.querySelector(".t_login_submit_btn").addEventListener("click", function () {
    loginUser();
  })