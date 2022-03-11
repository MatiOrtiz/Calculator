const displayBeforeValue= document.getElementById("before-value");
const displayNewValue= document.getElementById("new-value");
const numButtons= document.querySelectorAll(".number");
const operatorButtons= document.querySelectorAll(".operator");

const display= new Display(displayBeforeValue, displayNewValue);

// $("numButtons").click(function(){
//     display.addNumber(button.html);
// })

numButtons.forEach(button =>{
    button.addEventListener("click",() =>
        display.addNumber(button.innerHTML));
});

operatorButtons.forEach(button =>{
    button.addEventListener("click",() =>
        display.compute(button.value) )
})