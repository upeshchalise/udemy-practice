var displayValue = null;
var prevSymbol = null;

function display(value) {
    var display =  document.getElementById("display");
    var prev = display.innerHTML;
    console.log(prev);
    if(prev != "0"){
        display.innerHTML = prev + value;
    }else{
        display.innerHTML = value;
    }
}

function calculation(symbol) {
    var display = document.getElementById("display");
    var answer = document.getElementById("answer");
    if(displayValue == null || prevSymbol == null){
        displayValue = parseFloat(display.innerHTML);
        prevSymbol = symbol;
        console.log(displayValue);
    } 
    else{   
        switch(prevSymbol) {
            case '+':
                displayValue += parseFloat(display.innerHTML);
                break;
            case '-':
                displayValue -= parseFloat(display.innerHTML);
                break;
            case '*':
                displayValue *= parseFloat(display.innerHTML);
                break;
            case '/':
                displayValue -= parseFloat(display.innerHTML);
                break;
            default:
                console.log("fuck you");
        }   
        prevSymbol=symbol;
        console.log(displayValue);
    } 
    display.innerHTML = 0;
    answer.innerHTML = displayValue;
}
document.getElementById("one").addEventListener("click",()=>{display("1")});
document.getElementById("two").addEventListener("click",()=>{display("2")});
document.getElementById("three").addEventListener("click",()=>{display("3")});
document.getElementById("four").addEventListener("click",()=>{display("4")});
document.getElementById("five").addEventListener("click",()=>{display("5")});
document.getElementById("six").addEventListener("click",()=>{display("6")});
document.getElementById("seven").addEventListener("click",()=>{display("7")});
document.getElementById("eight").addEventListener("click",()=>{display("8")});
document.getElementById("nine").addEventListener("click",()=>{display("9")});

document.getElementById("add").addEventListener("click",()=>{calculation("+")});
document.getElementById("subtract").addEventListener("click",()=>{calculation("-")});
document.getElementById("multiply").addEventListener("click",()=>{calculation("*")});
document.getElementById("divide").addEventListener("click",()=>{calculation("/")});
document.getElementById("equals").addEventListener("click",()=>{
    var display = document.getElementById("display");
    var answer = document.getElementById("answer");
    calculation(null);
    display.innerHTML = answer.innerHTML;
    answer.innerHTML = 0;
});

document.getElementById("clear").addEventListener("click",()=> {
    document.getElementById("display").innerHTML = "0";
    document.getElementById("answer").innerHTML = "0";
    displayValue=null;
})

document.getElementById("delete").addEventListener("click",()=> {
    var display = document.getElementById("display");
    var value = display.innerHTML;
    display.innerHTML = value.length>1?value.substring(0,value.length-1):0;
})


