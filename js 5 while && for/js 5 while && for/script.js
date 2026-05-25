Produtos = [];
Preços = [];
Posicao = 0;

function addProdutos() {
    let Produto = document.getElementById("produtos").value;
    let Preco = document.getElementById("precos").value;

    Produtos.push(Produto);
    Preços.push(Preco);
}

function verProdutos() {
    let local = document.getElementById("lista2")

    for(Posicao = 0; Posicao < Produtos.length; Posicao++)
    {
        let texto = document.createElement("li");
        texto.textContent = Produtos[Posicao] + " R$" + Preços[Posicao];
        local.appendChild(texto);
    }
}

compras = [];
precosB = [];

function CaixaProduto() {
    let compra = document.getElementById("ComprarP").value;
    let preçoc = parseFloat(document.getElementById("ValorP").value);
    let digiteval = document.getElementById("Pcaixa");

    if (compra == "" || preçoc <= 0) {
        digiteval.textContent = "digite algo valido"
        digiteval.style.color = "red"
    }

     else {
        compras.push(compra + " R$ " + preçoc);
        precosB.push(preçoc);
        digiteval.style.color = "green"
        digiteval.textContent = "compra cadastrado"
        return;
    }
}

function CalcularProduto() {

    let listaB = document.getElementById("lista3");
    let valorK = document.getElementById("valorR")

    let vlr = 0


    while (listaB.firstChild) {
        listaB.removeChild(listaB.firstChild);
    }


    for (let i = 0; i < compras.length; i++) {
        let itm = document.createElement("li");
        itm.textContent = compras[i];
        listaB.appendChild(itm)
        vlr += precosB[i];

        valorK.textContent = "O valor total da compra é " + vlr.toFixed(2);

    }
}

function senhaProduto() {
    let senha = document.getElementById("senha").value;
    let local = document.getElementById("local");
    let contador = 0;
    local.textContent = " ";

    while (senha != "1234" && contador < 3) {
        contador = contador + 1;
        local.textContent = "Tentativas:" + contador;
        senha = prompt("digite a senha correta!");
    }

    if (senha == "1234") {
        let textocorreto = document.createElement("p");
        textocorreto.textContent = "Bem vindo My Brother!";
        local.appendChild(textocorreto);
    }
}