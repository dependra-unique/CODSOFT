let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");

let str = "";
buttons.forEach((element) => {
    element.addEventListener("click", (e)=>{
        if(e.target.innerText == "="){
            str = String(eval(str)); 
            input.value = str;
            str = "";
        }
        else if (e.target.innerText == "AC"){
            str = "";
            input.value = 0;
        }
        else if (e.target.innerText == "DEL"){
            
                str = str.substring(0, str.length-1);
                input.value = str;
            
        }
        else if (e.target.id == "plus-minus"){
            str = String(-eval(str));
            input.value = str;
        }
        else{
            str += e.target.innerText;
            input.value = str;
            
        }
        
    })
    
})