/*Exercício fácil*/

let numero = 10;

if (numero == 10) {
    alert("O número é 10");
}

let nome = "Davi";
    if(nome == "Davi");
    alert("Nome Correto")

function ffmax() {
    let valor = document.getElementById("pikachu").value;
    if (valor == "ok") {
        alert("Correto!");
    }

}

function verificarnumero() {
    let valores = document.getElementById("cesar").value;
    if (valores == 5) {
        alert("Valor correto")
    }
}

function carg() {
    let cargo = document.getElementById("empresa").value;
    if (cargo == "admin") {
        document.getElementById("adm").textContent = "Correto, seja Bem-vindo!";
    }
}

function mudarp() {
        let MM = document.getElementById("class").value;
        if (MM == "teste") {
            document.getElementById("mude").textContent = "você testou!";
        }
}

function mudecolor() {
    let cor = document.getElementById("preto").value
    if (cor == "azul") {
    document.getElementById("color").style.background = "blue";
    document.getElementById("color").style.padding = "10px";
    }
}

/*Exercício Médio*/

function maior() {
    let nummaior = document.getElementById("number>").value;
    if (nummaior > 10) {
        alert("Maior que 10")
    }

}

function maior2() {
    let nummenor = document.getElementById("number-").value;
    if (nummenor < 50) {
        alert("Menor que 50")
    }
}

function alter() {
    let mudar = document.getElementById("çim").value;
    if (mudar == "senha") {
        document.getElementById("naum").textContent = "çim, melior cuartetu"
    }
}

function generalcolor() {
    let background = document.getElementById("erreiksks").value;
    if (background == "escuro") {
        document.body.style.backgroundColor = "red"
    }
}

function part5() {
    let mudar = document.getElementById("valorant").value;
    if (mudar == "sonic") {
        document.getElementById("roblox").style.color = "grey";
        document.getElementById("roblox").textContent = "Sim, ele ama Assembly e binário";
    }
}

function mudarpg() {
    let mudar = document.getElementById("páginaalgo").value;
    if (mudar == 67) {
        document.getElementById("roblox").textContent = "Ele ama Assembly"
        document.getElementById("roblox").style.color = "green";
    }
}

function pFT() {
    let mudartexto = document.getElementById("txtmuda").value;
    if (mudartexto > 20) {
        document.getElementById("preludio").textContent = "vai ganhar 0,01 centavos por mês."
    }
}

/*Exercício Difícil*/

function buttonD1() {
    let admm = document.getElementById("inputD1").value;
    if (admm == "Davi admin") {
        document.getElementById("pDD1").textContent = "Seja Bem-Vindo";
    } 
}

function buttonD2() {
    let muda2 = document.getElementById("inputD2").value;
    if (muda2 == "raphael ADM") {
        document.getElementById("pDD2").textContent = "Seja Bem-Vindo ADM global";
        document.getElementById("pDD2").style.color = "red"
        document.getElementById("pDD2").style.fontSize = "100px"
    }
}

function buttonD3() {
    let muda3 = document.getElementById("inputD3").value;
    if (muda3 == "aura") {
        document.getElementById("pDD3").textContent = "eu avisei que ia muda";
        document.getElementById("pDD3").style.background = "green";
        document.getElementById("pDD3").style.padding = "20px";
    }
}

function buttonD4() {
    let bodypagina = document.getElementById("inputD4").value;
    if (bodypagina > 100) {
        document.body.style.backgroundColor = "lightgrey";
    }
}

function buttonD5() {
    let slakakaka = document.getElementById("pDD5")
    let colarcopiar = document.getElementById("inputD5")
    if (colarcopiar.value  == "copiar") {
    slakakaka.textContent = colarcopiar.value;
    }
}

function verificarEalterar() {
    let inpuutD = document.getElementById("inputValue").value;
    let divv1 = document.getElementById("divUM");
    let divv2 = document.getElementById("divDOIS");
    if (inpuutD > 10) {
        divv1.textContent = "valor alto";
        divv1.style.backgroundColor = "lightgreen";
    
        divv2.textContent = "valor baixo";
        divv2.style.backgroundColor = "red";
    }
}

function altereMultiplo() {
    let input222 = document.getElementByID("multiploD")
    if (input222 > 29) {
        document.getElementById("pDD5").textContent = "TMJ gestorrr";

        document.getElementById("pDD2").textContent = "Vamos marcar de ir DBD um dia";
    }
}