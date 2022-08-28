import navbar_t from "../components/t_nabar_com.js";
// document.body.append("navbar_t()")
document.getElementById("navibarr").innerHTML = navbar_t();

function datalelo() {
  let skill = document.getElementById("skills").value;
  let exp = document.getElementById("Experie").value;
  let loc = document.getElementById("locat").value;

  document.getElementById("skills").value = null;
  document.getElementById("Experie").value = null;
  document.getElementById("locat").value = null;

  console.log(skill, exp, loc);
  if (skill == "Java" || skill == "java") {
    window.location.href = "/Kailash search page/java.html";
  } else if (skill == "javascript" || skill == "Javascript") {
    window.location.href = "/Kailash search page/javascript.html";
  }
  else if (skill == "frontend" || skill == "Frontend") {
    window.location.href = "/Kailash search page/frontend.html";
  }
    else if (skill == "backend" || skill == "Backend") {
      window.location.href = "/Kailash search page/backend.html";
    }
}

document.getElementById("qsbSubmit").addEventListener("click", function () {
  datalelo();
});

document.getElementById("t_h3_S").addEventListener("click", function () {
  transfer();
});
const transfer = () => {
  window.location.href = "/servieces.html/servieces.html";
};
document.getElementById("t_h3_J").addEventListener("click", function () {
  redirect();
});
const redirect=()=>{
  window.location="/Shaikh.JobSearch/job.html"
}