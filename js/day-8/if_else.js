var a=8;
if(isFinite(a)){
    if(a%2===0){
        alert(a+'-even')
    }
    else if(a%2!==0){
        alert(a+'-odd')
    }
}
else{
    alert(a+'-not a number')
}


if(isNaN(a)){
    alert(a+'-not a number')
}
else{
    if(a%2===0){
        alert(a+'-even')
    }
    else if(a%2!==0){
        alert(a+'-odd')
    }
}

