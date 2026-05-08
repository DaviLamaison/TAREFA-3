function buttonVV() {
    let verificar = document.getElementById("VFidade").value;
    let pm = document.getElementById("pMudar");
    if (verificar <= 0) {
        pm.textContent = "Error";
    }
    
    else if (verificar < 12) {
        pm.textContent = "Criança";
    }
    else if (verificar >= 12 && verificar <= 17) {
            pm.textContent = "Adolescente";
            }

    else if (verificar >= 18 && verificar <= 59) {
            pm.textContent = "Adulto";
            }

    else if (verificar >= 60 && verificar <= 1000) {
            pm.textContent = "Idoso";
            }
}

function Usuario() {
    let Usuario = document.getElementById("usuarioNome").value;
    let Senha = document.getElementById("usuarioSenha").value;
    let Texto = document.getElementById("pUsuario");
    if (Usuario == "admin" && Senha == 1234) {
        Texto.textContent = "Login realizado com sucesso";
    }

    if (Usuario == "professor" && Senha == "senac") {
        Texto.textContent = "Bem-vindo, professor"
    }

    if (Usuario == "" && Senha == "") {
        Texto.textContent = "Preencha todos os campo"
    }

    else {
        Texto.textContent = "Usuário ou senha incorretos!"
    } 
}

function descontos() {
    let Valor = document.getElementById("valorDesconto").value;
    let Vip = document.getElementById("vipDesconto").value;
    let Cupom = document.getElementById("cupomDesconto").value;
    let Texto = document.getElementById("pDescontos");
    if ( Valor == "" && Vip == "" && Cupom == "") 
        {
        Texto.textContent = "Error";
    }

    else if (Valor >= 500 && Vip == "sim") {
        Texto.textContent = Valor - (Valor / 20)
    }
}

function avaliacao() {
    let Nota = document.getElementById("notaAvaliacao").value;
    let Frequencia = document.getElementById("frequenciaAvaliacao").value;
    let Texto = document.getElementById("pAvaliacao");
    if (Nota >=  60 &&  Nota <= 100 && Frequencia >= 75 && Frequencia <=100) {
        Texto.textContent = "Aprovado";
    }

    if (Nota >= 40 && Nota <= 59 && Frequencia >= 75) {
        Texto.textContent = "Recuperação";
    }

    if (Nota <= 40 && Frequencia <= 75) {
        Texto.textContent = "Reprovado";
    }

    if (Nota == "" && Frequencia == "") {
        Texto.textContent = "Obrigatório preencher o campo";
    }

    if (Nota >= 101 && Frequencia >=101) {
        Texto.textContent = "Valores inválidos";
    }

}