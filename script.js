function Telepi(horas,pedidos,bar){
    return horas*7.67 + pedidos*0.48 + bar*0.5
}

function calcular(){

    var bar = parseFloat(document.getElementById("Bar").value);
    var pedidos = parseFloat(document.getElementById("Pedidos").value);
    var horas = parseFloat(document.getElementById("Horas").value);

    if (isNaN(horas) || isNaN(pedidos) || isNaN(bar)){
        alert("Por favor, ingresa valores válidos para todos los campos.");
        return;
    }

    var resultado = Telepi(horas,pedidos,bar);

    document.getElementById("Resultado").textContent = resultado.toFixed(2) + "€"

}