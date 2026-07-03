<?php
$servidor = "sql306.infinityfree.com";
$usuarioBanco = "if0_41534558";
$senhaBanco = "sKnkUm5U6955";
$nomeBanco = "if0_41534558_sitebrabo";

$conexao = mysqli_connect($servidor, $usuarioBanco, $senhaBanco, $nomeBanco);

if (!$conexao) {
    die("Erro ao conectar com o banco de dados: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $usuario = trim($_POST['usuario']);
    $senha = trim($_POST['senha']);
    $email = trim($_POST['email']);

    // Verifica se algum campo está vazio
    if (empty($usuario) || empty($senha) || empty($email)) {
        header("Location: cadastroerrado.html");
        exit();
    }

    // Verifica se já existe um usuário ou e-mail igual
    $verifica = "SELECT * FROM usuarios
                 WHERE usuario = '$usuario'
                 OR email = '$email'";

    $resultado = mysqli_query($conexao, $verifica);

    if (mysqli_num_rows($resultado) > 0) {
        // Usuário ou e-mail já cadastrado
        header("Location: cadastroerrado.html");
        exit();
    }

    // Cadastra o novo usuário
    $sql = "INSERT INTO usuarios (usuario, senha, email)
            VALUES ('$usuario', '$senha', '$email')";

    if (mysqli_query($conexao, $sql)) {
        header("Location: cadastrocorreto.html");
        exit();
    } else {
        header("Location: cadastroerrado.html");
        exit();
    }
}

mysqli_close($conexao);
?>