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
    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];
    $email = $_POST['email'];


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