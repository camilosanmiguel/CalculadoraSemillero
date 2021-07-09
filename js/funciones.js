let inputText = document.getElementById("inputText");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");

let btnDiv =  document.getElementById("btnDiv");
let btnMul =  document.getElementById("btnMul");
let btnRes =  document.getElementById("btnRes");
let btnLimpiar =  document.getElementById("btnLimpiar");
let btnBorrar =  document.getElementById("btnBorrar");
let btnIgual =  document.getElementById("btnIgual");
let btnSuma =  document.getElementById("btnSuma");
let btnPunto =  document.getElementById("btnPunto");
let btnParentesisIzquierdo =  document.getElementById("btnParentesisIzquierdo");
let btnParentesisDerecho =  document.getElementById("btnParentesisDerecho");
let btnPorcentaje =  document.getElementById("btnPorcentaje");

btn1.onclick = ()=>{ inputText.value += 1; }
btn2.onclick = ()=>{ inputText.value += 2; }
btn3.onclick = ()=>{ inputText.value += 3; }
btn4.onclick = ()=>{ inputText.value += 4; }
btn5.onclick = ()=>{ inputText.value += 5; }
btn6.onclick = ()=>{ inputText.value += 6; }
btn7.onclick = ()=>{ inputText.value += 7; }
btn8.onclick = ()=>{ inputText.value += 8; }
btn9.onclick = ()=>{ inputText.value += 9; }
btn0.onclick = ()=>{ inputText.value += 0; }

btnDiv.onclick = ()=>{ inputText.value += " / "; }
btnMul.onclick = ()=>{ inputText.value += " X "; }
btnRes.onclick = ()=>{ inputText.value += " - "; }
btnLimpiar.onclick = ()=>{ inputText.value = ""; }
btnBorrar.onclick = ()=>{
    let text = inputText.value
    inputText.value = text.slice(0, -1)
}
btnSuma.onclick = ()=>{ inputText.value += " + "; }
btnPunto.onclick = ()=>{ inputText.value += "."; }
btnParentesisIzquierdo.onclick = ()=>{ inputText.value += " ( "; }
btnParentesisDerecho.onclick = ()=>{ inputText.value += " ) "; }
btnPorcentaje.onclick = ()=>{ inputText.value += " % "; }

btnIgual.onclick = ()=>{ 
    let text = inputText.value
}