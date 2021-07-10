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
    text = text.split(' ').join('')
    inputText.value = resultado(text);
}

const resultado = (text)=>{
    console.log("texto -> ", text);
    let i = 0;
    let numero1 = null;
    let numero2 = null;
    let primero = true;
    let accion = null
    let parentesis = false;
    do {
        if(text[i] === "("){
            let idx = text.indexOf(")");
            if(idx !== -1){
                if(numero1===null){
                    numero1 = resultado(text.substring(i+1,idx));
                    i = idx;
                    parentesis = true;
                }else if(!primero && numero2 === null){
                    numero2 = resultado(text.substring(i+1,idx));
                    i = idx;
                    parentesis = true;
                }else{
                    alert("Accion Incorrecta");
                    inputText.value = "";
                    break; 
                }
            }else{
                alert("Accion Incorrecta");
                inputText.value = "";
                break; 
            }
        }else if(text[i] === "1" || text[i] === "2" || text[i] === "3" || text[i] === "4" || text[i] === "5" || text[i] === "6" || text[i] === "7" || text[i] === "8" || text[i] === "9" || text[i] === "0"){
            if(!parentesis){
                if(primero){
                    if(numero1 === null){
                        numero1 = parseInt(text[i]);
                    }else{
                        numero1 = (numero1 * 10) + parseInt(text[i]);
                    }
                }else{
                    if(numero2 === null){
                        numero2 = parseInt(text[i]);
                    }else{
                        numero2 = (numero2 * 10) + parseInt(text[i]);
                    }
                }
            }else{
                alert("Accion Incorrecta");
                inputText.value = "";
                break; 
            }
        }else if(text[i] === "%" || text[i] === "/" || text[i] === "x" || text[i] === "-" || text[i] === "+"){
            if(numero1 === null){
                alert("Accion Incorrecta");
                inputText.value = "";
                break; 
            }else if(numero2 === null && accion === null){
                parentesis = false;
                accion = text[i];
                primero = false;
            }else if(numero2 !== null && accion !== null){
                if(text[i] === "%"){
                    let temp = numero1;
                    numero1 = temp % numero2;
                }else if(text[i] === "/"){
                    let temp = numero1;
                    numero1 = temp / numero2;
                }else if(text[i] === "x"){
                    let temp = numero1;
                    numero1 = temp * numero2;
                }else if(text[i] === "-"){
                    let temp = numero1;
                    numero1 = temp - numero2;
                }else if(text[i] === "+"){
                    let temp = numero1;
                    numero1 = temp + numero2;
                }
                numero2 = null;
                accion = null;
            }
        }
        i += 1;
    } while (i<text.length);
    
    if(numero1 !== null && numero2 !== null & accion !== null){
        if(accion === "%"){
            return numero1 % numero2;
        }else if(accion === "/"){
            return numero1 / numero2;
        }else if(accion === "x"){
            return numero1 * numero2;
        }else if(accion === "-"){
            return numero1 - numero2;
        }else if(accion === "+"){
            return numero1 + numero2;
        }
    }else if(numero1 !== null && numero2 === null & accion === null){
        return numero1;
    }else{
        alert("Accion Incorrecta");
        inputText.value = "";
        return 0;
    }
    
}