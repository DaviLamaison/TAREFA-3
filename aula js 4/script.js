let produtos = [];
let preços = [];
let posicao = 0;


function botao1() {
    let nameproduto = document.getElementById("inputName1").value;
    let valorproduto = parseFloat(document.getElementById("inputValor1").value);
    let Texto = document.getElementById("pProduto");

    if (nameproduto == "" || valorproduto == "") {
        Texto.textContent = "";
    }

    else{
        document.getElementById("pProduto").textContent = "Produto cadastrado";
        produtos.push(nameproduto);
        preços.push(valorproduto);
    }
}

function botao2() {
    let qnt = document.getElementById("quantidaade");
    let lista = document.getElementById("lista");
    let valorc = document.getElementById("valorrr");
    let valorb = document.getElementById("valorbbb");
    let total = document.getElementById("valortotalll");

    let soma = 0;
    
    let caro = 0;
    let barato = 999999999;
    
    let ncaro = "";
    let nbarato = "";


    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    for (let i = 0; i < produtos.length; i++) {
        let item = document.createElement("li");
        item.textContent = produtos[i];
        lista.appendChild(item);
        soma += preços[i];


        if (preços[i] > caro) {
            caro = preços[i];
            ncaro = produtos[i];
        }

        if (preços[i] < barato) {
            barato = preços[i];
            nbarato = produtos[i];
        }
    }
    qnt.textContent = "quantidade de produtos cadastrados  " + produtos.length;
    total.textContent = "total de preços do produto é: " + soma;
    valorc.textContent = "produto mais caro é: " + "R$" + caro;
    valorb.textContent = "produto mais barato é: " + "R$" + barato.toFixed(2);
}

function apagar() {
    produtos.pop()
    preços.pop()
    botao2()
}