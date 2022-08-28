
    // function vinay(){
    //     location.href="https://resume.naukri.com/job-alerts-on-mobile-mail"
    // }
    // function savi(){
    //     location.href="https://resume.naukri.com/resume-display?fftid=homepage_desk_rev"
    // }
    // function first(){
    //     location.href="https://resume.naukri.com/resume-maker?fftid=homepage_desk_rev"
    // }
    // function resume(){
    //     location.href="https://resume.naukri.com/resume-samples"
    // }
    // function visual(){
    //     location.href="https://resume.naukri.com/visual-resume-sample"
    // }
    // function cover(){
    //     location.href="https://resume.naukri.com/cover-letter-samples-for-resume"
    // }
    // function long(){
    //     location.href="https://resume.naukri.com/articles/how-to-answer-the-tell-me-about-yourself-question/?fftid=homepage_desk_rev"
    // }
    // function khatam(){
    //     location.href="https://resume.naukri.com/articles/how-to-write-a-cover-letter/?fftid=homepage_desk_rev"
    // }
    // function v(){

    //     location.href="https://resume.naukri.com/articles/how-to-get-a-promotion/?fftid=homepage_desk_rev"
    // }
    // function g(){
    //     location.href="https://resume.naukri.com/cover-letter-samples-for-resume"
    // }
    // function res1(){
    //     location.href="https://resume.naukri.com/resume-critique"
    // }
    // function res2(){
    //     location.href="https://resume.naukri.com/resume-quality-score"
    // }
    // function res3(){
    //     location.href="https://resume.naukri.com/resume-samples"
    // }
    // function res4(){
    //     location.href="https://resume.naukri.com/job-letter-format"
    // }
    // function res5(){
    //     location.href="https://resume.naukri.com/resume-display"
    // }
    // function res6(){
    //     location.href="https://resume.naukri.com/contact-recruiters-hr"
    // }
    // function res7(){
    //     location.href="https://resume.naukri.com/priority-job-application"
    // }
    // function res8(){
    //     location.href="https://www.naukri.com/learning/certification-highlighter"
    // }
    // function res9(){
    //     location.href="https://www.naukri.com/learning/"
    // }
    // function res10(){
    //     location.href="https://www.naukri.com/learning/online-aptitude-test"
    // }
    // function res11(){
    //     location.href="https://resume.naukri.com/job-alerts-on-mobile-mail"
    // }
    // function res12(){
    //     location.href="https://resume.naukri.com/combo-packs"
    // }
    // function res13(){
    //     location.href="https://resume.naukri.com/feedback"
    // }
    // function res14(){
    //     location.href="https://resume.naukri.com/sitemaps/sitemap.html"
    // }
    // function res15(){
    //     location.href="https://resume.naukri.com/"
    // }
    // function res16(){
    //     location.href="https://resume.naukri.com/frequently-asked-questions-faq/category/general/privacyconfidentiality/"
    // }
    document.getElementById("mainpagepaileja").addEventListener("click",function(){
        mainpagepai();
    })

    const mainpagepai=()=>{
        window.location.href="/Naya tropical/Landing Page by Nandlal/index.html"
    }
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