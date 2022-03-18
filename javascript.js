function init() {
    
    output =document.getElementById("output");
}

function Event() {
    val = output.value;
    output.value += "=";
    var b = eval(val);
    output.value += b;
}
function backSpace()
{
    val = output.value;
  
output.value = val.slice(0,-1);
}
