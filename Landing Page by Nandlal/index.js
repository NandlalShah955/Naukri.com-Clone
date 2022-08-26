import navbar_t from '../components/t_nabar_com.js'
// document.body.append("navbar_t()")
 document.getElementById("navibarr").innerHTML=navbar_t();


function datalelo() {
      let skill=document.getElementById("skills").value;    
      let exp=document.getElementById("Experie").value;
      let loc=document.getElementById("locat").value;

      document.getElementById("skills").value=null;
      document.getElementById("Experie").value=null;
      document.getElementById("locat").value=null;



console.log(skill,exp,loc)
if (skill=="Java"||skill=="java") {
    window.location.href="../java.html"
}
else if (skill=="javascript"||skill=="Frontened Developer") {
    window.location.href="../javascript.html"
}

}

document.getElementById("qsbSubmit").addEventListener("click",function(){
    datalelo()
})

document.getElementById("t_h3_S").addEventListener("click",function(){
    transfer();
})
const transfer=()=>{
    window.location.href="/servieces.html/servieces.html"
}