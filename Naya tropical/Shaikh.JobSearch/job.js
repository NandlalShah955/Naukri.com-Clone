
let arr= [
    {work :"Laravel Web Developer - Work From Home Now",
     comapny :" Keyideas Infotech4.7 ★(40 Reviews)" ,
    Experience :" Experience 1-4 years",   },


    
]

document.getElementById("redierect_kr").addEventListener("click",()=>{
    window.location.href="/index.html"
  })
console.log("Hi")
let datafromLs=JSON.parse(localStorage.getItem("users"))||[]
console.log(datafromLs)

function data() {
    let container=document.getElementById("loginwala")
    container.innerHTML=null;
    datafromLs.forEach((elem) => {
        let name=document.createElement("p")
        name.innerText=elem.email;
        name.style.color="Navy"
        name.style.fontWeight="800";

        container.append(name)
        
    });

}
data()