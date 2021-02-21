let inputs = document.getElementsByTagName("input");
function check(event){
        for(let i = 0; i < inputs.length; i++){
                 if(event.keyCode === 13 && inputs[i].value === ""){
                         inputs[i].style.border = "2px solid red";
                         setTimeout(function (){
                                inputs[i].style.border = "";
                         }, 2000);
                 }
        }
}
