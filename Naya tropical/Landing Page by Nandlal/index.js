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
    window.location.href = "/Naya tropical/Kailash search page/java.html";
  } else if (skill == "javascript" || skill == "Javascript") {
    window.location.href = "/Naya tropical/Kailash search page/javascript.html";
  }
  else if (skill == "frontend" || skill == "Frontend") {
    window.location.href = "/Naya tropical/Kailash search page/frontend.html";
  }
    else if (skill == "backend" || skill == "Backend") {
      window.location.href = "/Naya tropical/Kailash search page/backend.html";
    }
}

document.getElementById("qsbSubmit").addEventListener("click", function () {
  datalelo();
});

document.getElementById("t_h3_S").addEventListener("click", function () {
  transfer();
});
const transfer = () => {
  window.location.href = "/Naya tropical/servieces.html/servieces.html";
};
document.getElementById("t_h3_J").addEventListener("click", function () {
  redirect();
});
const redirect=()=>{
  window.location="/Naya tropical/Shaikh.JobSearch/job.html"
}
document.getElementById("mainpagepaileja").addEventListener("click",function(){
  mainpage()
})
const mainpage=()=>{
  window.location.href="./index.html"
}
document.querySelector(".t_button_1").addEventListener("click",function(){
  lejao()
})

function lejao(){
  window.location.href="/navbar/t_login.html"
}

document.querySelector(".t_button_2").addEventListener("click",function(){
  lejaa()
})

function lejaa(){
  window.location.href="/navbar/t_register.html"
}