const LogInForm=document.querySelector(".LogIn");
const LogInName=document.querySelector("#LogInNameBar");
const LogInBtn=document.querySelector('#LogInBtn');
const LogInAfter=document.querySelector("#AfterLogIn");



const LocalSavedValue=localStorage.getItem("username");
console.log(LocalSavedValue);

if(LocalSavedValue===null){
    LogInForm.classList.remove("FormHide");
    LogInForm.addEventListener("submit",LogInSubmit);
}else{
    LogInAfter.classList.remove("FormHide");
    LogInAfter.innerText=`Be FLCL ${LocalSavedValue}`;
    
}
function LogInSubmit(userType){
    userType.preventDefault();
    const userValue=LogInName.value;    
    localStorage.setItem("username",userValue);
    LogInAfter.innerText=`Being FLCL ${userValue}`;
    }

LogInForm.addEventListener("submit",LogInSubmit);