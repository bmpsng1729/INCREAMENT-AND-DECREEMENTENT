console.log('hello ji kaise ho');
let countValue=document.querySelector('.neu-button')
// changing the text into int type
let value=parseInt(countValue.innerHTML)
function decrement(){
    value=value-1;
    countValue.innerHTML=value;
};
function increment(){
    value=value+1;
    countValue.innerHTML=value;
};
