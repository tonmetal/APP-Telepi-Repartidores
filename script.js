function telepi(horas,pedidos,bar){
    return horas*7.67 + pedidos*0.48 + bar*0.5
}

function vacaciones(a,b,c,d,e,f,dias){
    return (((a+b+c+d+e+f)/6)/30) * dias
}

function calcular(){

    let bar = parseFloat(document.getElementById("Bar").value);
    let pedidos = parseFloat(document.getElementById("Pedidos").value);
    let horas = parseFloat(document.getElementById("Horas").value);

    if (isNaN(horas) || horas <= 0.49 || horas > 200  || horas.toString().length > 6 ||  isNaN(pedidos) || pedidos < 0 || pedidos > 400 ||isNaN(bar) || bar < 0 || bar > 100 || !Number.isInteger(bar) ||!Number.isInteger(pedidos)){
        alert("Por favor, ingresa valores válidos para todos los campos.");
        return;
    }

    let resultado = telepi(horas,pedidos,bar);

    document.getElementById("Resultado").textContent = resultado.toFixed(2) + "€"

}

function calcularVacaciones(){

    let bar = parseFloat(document.getElementById("Bar").value);
    let pedidos = parseFloat(document.getElementById("Pedidos").value);
    let horas = parseFloat(document.getElementById("Horas").value);

    let mes1 = parseFloat(document.getElementById("sueldo1").value);
    let mes2 = parseFloat(document.getElementById("sueldo2").value);
    let mes3 = parseFloat(document.getElementById("sueldo3").value);
    let mes4 = parseFloat(document.getElementById("sueldo4").value);
    let mes5 = parseFloat(document.getElementById("sueldo5").value);
    let mes6 = parseFloat(document.getElementById("sueldo6").value);
    let dias = parseFloat(document.getElementById("dias").value);

    let sueldos = [mes1,mes2,mes3,mes4,mes5,mes6]

    if(isNaN(horas) || horas <= 0.49 || horas > 200  || horas.toString().length > 6 ||  isNaN(pedidos) || pedidos < 0 || pedidos > 400 ||!Number.isInteger(pedidos) || isNaN(bar) || bar < 0 || bar > 100 || !Number.isInteger(bar) || sueldos.some(valor => isNaN(valor) ||  valor < 0 ||  valor > 2000 || valor.toString().length > 7) ||isNaN(dias)|| dias < 1|| dias > 31 ||!Number.isInteger(dias)) {
        alert("Por favor, ingresa valores válidos para todos los campos.");
        return;
    }

    let resultado = telepi(horas,pedidos,bar);

    let resultadoVacaciones = vacaciones(mes1,mes2,mes3,mes4,mes5,mes6,dias);

    document.getElementById("Resultado").textContent = (resultado+resultadoVacaciones).toFixed(2) + "€"
    

}

function resetear(){
    const inputs = document.querySelectorAll('input[type="number"]');
        inputs.forEach(input => input.value = 0);
    document.getElementById("Resultado").value = "0€"


}

function limpiarValor(input){
    
    if (input.value == "0"){
        input.value = "";

    }


}