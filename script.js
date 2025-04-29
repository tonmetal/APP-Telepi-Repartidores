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

    if (isNaN(horas) || horas <= 0.49 || horas > 200  || horas.toString().length > 6 ||  isNaN(pedidos) || pedidos < 0 || pedidos > 400 ||isNaN(bar) || bar < 0 || bar > 100 || !Number.isInteger(bar) ||!Number.isInteger(pedidos) ){
        alert("Por favor, ingresa valores válidos para todos los campos.");
        return;
    }

    let resultado = telepi(horas,pedidos,bar);

    document.getElementById("Resultado").textContent = resultado.toFixed(2) + "€"

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