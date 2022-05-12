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
    var text = document.createTextNode(valorInput);
    
    li.appendChild(text);
    ol.appendChild(li);
    
    document.getElementById("inputTexto").value = "";
}

function removerItem(idItem) {
    document.getElementById(idItem).remove();

}
