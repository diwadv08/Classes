const Typing=()=>{
    let error1=document.querySelector("#error1")
    let error2=document.querySelector("#error2")
    let error3=document.querySelector("#error3")
    let error4=document.querySelector("#error4")
    
    let pwd=document.querySelector("#pwd").value;
    let j=pwd.split('');
    if(pwd.length>0){
        const res=j.filter((e)=>{
            return isFinite(e)
        })

        if(res.length>=1){
            error1.style.color="green";
        }
        else{
            error1.style.color="red";
        }
        
        let first_letter= pwd[0];
        if(first_letter===first_letter.toUpperCase()){
            error3.style.color="green";
        }
        else{
            error3.style.color="red";
        }
        if(pwd.length>=8){
            error4.style.color="green";
        }
        else{
            error4.style.color="red";
        }
    }
}   