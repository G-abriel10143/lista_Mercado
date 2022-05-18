var campoTexto = document.getElementById("inputTexto");
campoTexto.addEventListener("keydown", function(e){
    if(e.code == "Enter"){
        adicionarItem();
    }
});

function adicionarItem() {
    var ol = document.getElementById("listinha");
    var qtdFilhos = ol.childElementCount;
    var li = document.createElement("li");
    li.setAttribute("id", qtdFilhos);
    li.setAttribute("onclick", "removerItem("+qtdFilhos+")");
    var valorInput = document.getElementById("inputTexto").value;
    var dinheiroColocado = document.getElementById("inputDinheiro").value;
   
    var text = document.createTextNode(valorInput);
    var pegarReais = document.createTextNode(dinheiroColocado);
    var concatenarTexto = document.createTextNode(valorInput + " - R$ " + dinheiroColocado);
    
    if(dinheiroColocado <= 0) {
        alert("Valor Invalido");
        return;
}
    if(valorInput == ""){
        alert("Insira o produto");
        return;
    }

    li.append(concatenarTexto);
    ol.append(li);
    document.getElementById("inputTexto").value = "";
    document.getElementById("inputDinheiro").value = "";
    calcularTotal(dinheiroColocado);
}

function calcularTotal(dinheiroColocado) {
    var comprado = document.getElementById("totalComprado").textContent;
    comprado = parseFloat(comprado) + parseFloat(dinheiroColocado);
    document.getElementById("totalComprado").textContent = comprado;
}
function removerItem(idItem) {
    document.getElementById(idItem).remove();
}
