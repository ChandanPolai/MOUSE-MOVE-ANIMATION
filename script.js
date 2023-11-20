const dateInput=document.querySelector("#date");
const button=document.querySelector("button");
const span=document.querySelector("span");
const Refersh=document.querySelector("#refersh");

button.addEventListener("click", () =>{
    const CheckTime=new Date(dateInput.value);
    const i=CheckTime.getFullYear();
    const RealTime=new Date();
    const j=RealTime.getFullYear();
    
    if(dateInput.value == "" || i > j){
        alert(`🙏🙏please enter your birth date`);
    }
    else{
        const age=j-i;
         span.textContent=`your age ${age}`
        }
        
    });
    
Refersh.addEventListener("click",()=>{
    location.reload();
});

