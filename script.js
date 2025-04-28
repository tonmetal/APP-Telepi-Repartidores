function Telepi(horas,pedidos,bar){
    return horas*7.67 + pedidos*0.48 + bar*0.5
}

function calcular(){

    let bar = parseFloat(document.getElementById("Bar").value);
    let pedidos = parseFloat(document.getElementById("Pedidos").value);
    let horas = parseFloat(document.getElementById("Horas").value);

    if (isNaN(horas) || horas < 0 || horas > 200  || horas.toString().length > 6 ||  isNaN(pedidos) || pedidos < 0 || pedidos > 400 ||isNaN(bar) || bar < 0 || bar > 100 || !Number.isInteger(bar) ||!Number.isInteger(pedidos) ){
        alert("Por favor, ingresa valores válidos para todos los campos.");
        return;
    }

    let resultado = Telepi(horas,pedidos,bar);

    document.getElementById("Resultado").textContent = resultado.toFixed(2) + "€"

}

function resetear(){
    const inputs = document.querySelectorAll('input[type="number"]');
        inputs.forEach(input => input.value = 0);


}

function limpiarValor(input){
    
    if (input.value == "0"){
        input.value = "";

    }


}