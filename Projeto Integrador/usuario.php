<?php
session_start();

if (!isset($_SESSION['usuario'])) {
    header("Location: login.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Conta - Rêve de Lotus</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class="topo">
        <header>
            <img src="Imagens/img-header.png" alt="Rêve de Lotus">
        </header>

        <nav>
            <a href="index.html">Início</a>
            <a href="contato.html">Contatos</a>
            <a href="sobre.html">Sobre nós</a>
            <a href="login.html">Login</a>
            <a href="register.html">Registre-se</a>
            <a href="usuario.php">
                <img src="Imagens/img login.png" alt="Usuário">
            </a>
        </nav>
    </div>

    <main class="login-dashboard-wrapper">
        <div class="moldura-dashboard">
            <div class="dashboard-container">

                <div class="perfil-coluna">
                    <img src="Imagens/img login.png" alt="Avatar" class="avatar-usuario">

                    <h2 class="titulo-conta">Minha Conta</h2>

                    <input
                        type="text"
                        value="<?php echo htmlspecialchars($_SESSION['usuario']); ?>"
                        id="Uusuario"
                        readonly
                        class="input-perfil">

                    <input
                        type="email"
                        value="<?php echo htmlspecialchars($_SESSION['email']); ?>"
                        id="Uemail"
                        readonly
                        class="input-perfil">

                    <a href="logout.php" class="botao-logout">
                        Sair da Conta
                    </a>

                    <p id="user-alert" class="alerta-logout"></p>
                </div>

                <div class="estatisticas-coluna">
                    <h3 class="titulo-stats">📊 Resumo de Atividades</h3>

                    <div class="stats-grid">

                        <div class="stat-box">
                            <h4>Pedidos Feitos</h4>
                            <p>12</p>
                        </div>

                        <div class="stat-box">
                            <h4>Item Favorito</h4>
                            <p class="txt-destaque">Linha Alto Luxo</p>
                        </div>

                        <div class="stat-box">
                            <h4>Pontos de Fidelidade</h4>
                            <p>350 <span class="txt-unidade">pts</span></p>
                        </div>

                    </div>

                    <div class="fidelidade-container">
                        <div class="fidelidade-topo">
                            <span>Nível: Cliente Bronze</span>
                            <span>350 / 500 pts</span>
                        </div>

                        <div class="barra-progresso-container">
                            <div class="barra-progresso"></div>
                        </div>

                        <p class="fidelidade-subtexto">
                            Faltam 150 pts para alcançar o nível Prata
                        </p>
                    </div>

                </div>

            </div>
        </div>
    </main>

    <footer>
        <div>
            <h3>Localização</h3>
            <p>📍 Av. Paulista 777</p>
        </div>

        <div>
            <h3>Contato</h3>
            <p>
                <img src="Imagens/icon whatssap.png" width="16">
                +55 (34) 99999-8888
            </p>
            <p>
                <img src="Imagens/icon email.png" width="16">
                revelotus@gmail.com
            </p>
        </div>

        <div>
            <h3>Dúvidas</h3>
            <a href="sobre.html">Saiba mais!</a>
        </div>
    </footer>

    <script src="script.js"></script>

</body>
</html>
