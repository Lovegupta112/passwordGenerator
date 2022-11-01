

let lengthSlider=document.querySelector('.pass-length input ');
let btn=document.querySelector('.btn');
let options=document.querySelectorAll('.option input')
let passwordInput=document.querySelector('.inputbox input');
let passIndicator=document.querySelector('.pass-indicator');
let copyIcon=document.querySelector('.inputbox span');

let charcters={
    lowercase:'abcdefghijklmnopqrstuvwxyz',
    uppercase:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number:"0123456789",
    symbols:"^@#$*(){}[]|_+*/<>/.;,:=|~%^&"
}

function genratePassword(){
    let staticPassword="";
    let passLength=lengthSlider.value;
    let randomPassword="";
    let duplicate=false;
    options.forEach((option)=>{
        if(option.checked){
            // console.log(charcters[option.id]);
if(option.id!=='duplicate' && option.id!=='spaces'){
    staticPassword =staticPassword+charcters[option.id];
}
else if(option.id==='spaces'){
staticPassword = ` ${staticPassword} `;
}
else{
    duplicate=true;
}
        }

    })
    for(let i=0;i<passLength;i++){
    // console.log(staticPassword[Math.floor(Math.random()*10)] );
    // randomPassword=randomPassword+staticPassword[Math.floor(Math.random()*staticPassword.length)];
    let randomChar=staticPassword[Math.floor(Math.random()*staticPassword.length)];

    if(duplicate){
        // if(!randomPassword.includes(randomChar) || randomChar ==" "){
        //     randomPassword=randomPassword+randomChar;
        // }
        // else{
        //     i--;
        // }
        // or
        !randomPassword.includes(randomChar) || randomChar==" "? (randomPassword=randomPassword+randomChar) :i--;
    }else{
        randomPassword=randomPassword+randomChar;
    }
  
}
// console.log(randomPassword);
passwordInput.value=randomPassword;

}
function updateIndicator(){
passIndicator.id=lengthSlider.value<=8?"weak":lengthSlider.value<=16?"medium":"strong";
}

function updateSlider(){
    // console.log(lengthSlider.value);
    document.querySelector('.pass-length .value').innerText=lengthSlider.value;
    if(lengthSlider.value<=8){
        // lengthSlider.style.color="red"
        // console.log(lengthSlider.value)
    document.querySelector('.pass-length .value').style.color="red";
    }else if(lengthSlider.value<=16){
        document.querySelector('.pass-length .value').style.color="#f48c06";
    }
    else{
        document.querySelector('.pass-length .value').style.color=" rgb(0, 131, 96)";
    }
    updateIndicator();
    genratePassword();
    
}

updateSlider(); 

function copyPassword(){
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.innerText="check";

 setTimeout(()=>{
    copyIcon.innerText="content_copy";
 },1600)
}

lengthSlider.addEventListener('input',updateSlider);
btn.addEventListener('click',genratePassword);

copyIcon.addEventListener('click',copyPassword);



