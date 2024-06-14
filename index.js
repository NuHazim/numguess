const number=document.getElementById("num");
const text=document.getElementById("textresult");
const triess=document.getElementById("tries");
const tryagain=document.getElementById("tryagain");
let tries=10;
let rnum=Math.floor(Math.random()*100)+1;
number.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
        tries--;
        let numbe=number.value;
        numbe=Number(numbe);
        if(numbe==rnum){
            text.textContent="Congrats! the number was "+rnum;
            text.style.color="green";
            number.disabled=true;
            tryagain.style.display="block";
            triess.textContent="Tries: "+tries;
        }
        else if(tries==0){
            text.textContent="Wrong and you have run out of tries lmfao, the number was "+rnum;
            text.style.color="red";
            number.disabled=true;
            tryagain.style.display="block";
            triess.textContent="Tries: "+tries;
        }
        else{
            if(numbe<rnum){
                text.textContent="your number is lower from the real number";
                text.style.color="red";
                triess.textContent="Tries: "+tries;
            }
            else if(numbe>rnum){
                text.textContent="your number is higher from the real number";
                text.style.color="red";
                triess.textContent="Tries: "+tries;
            }
        }
        number.value="";
        number.focus();
    }
})
tryagain.onclick=function(){
    rnum=Math.floor(Math.random()*100)+1;
    tries=10;
    triess.textContent="Tries: "+tries;
    number.disabled=false;
    number.value="";
    text.textContent="";
    tryagain.style.display="none";
}
