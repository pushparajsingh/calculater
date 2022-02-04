function init() {
    //input instruction.
    // a = document.getElementById("n1");
    // b = document.getElementById("n2");
    // c = document.getElementById("n3");
    // d = document.getElementById("n4");
    // e = document.getElementById("n5");
    // f = document.getElementById("n6");
    // g = document.getElementById("n7");
    // h = document.getElementById("n8");
    // i = document.getElementById("n9");
    // j = document.getElementById("n10");
    // k = document.getElementById("n11");
    // l = document.getElementById("n12");
    // m = document.getElementById("n13");
    // n = document.getElementById("n14");
    // o = document.getElementById("n15");
    // p = document.getElementById("n16");

    //output instruction.
    output =document.getElementById("output");


 //value of a number
    // value1 = (e.innerText) * 1;
    // value2 = (f.innerText) * 1;
    // value3 = (g.innerText) * 1;
    // value4 = (i.innerText) * 1;
    // value5 = (j.innerText) * 1;
    // value6 = (k.innerText) * 1;
    // value7 = (m.innerText) * 1;
    // value8 = (n.innerText) * 1;
    // value9 = (o.innerText) * 1;
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


// {   val = output.value;
//     alert(val);
//     // output.value = val.pop();