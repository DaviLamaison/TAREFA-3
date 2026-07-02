<?php

session_start();

$servidor = "sql306.infinityfree.com";
$usuarioBanco = "if0_41534558";
$senhaBanco = "sKnkUm5U6955";
$nomeBanco = "if0_41534558_sitebrabo";

$conexao = mysqli_connect($servidor, $usuarioBanco, $senhaBanco, $nomeBanco);

if (!$conexao) {
    die("Erro ao conectar com o banco de dados: " . mysqli_connect_error());
}

$usuario = $_POST['usuario'];
$senha = $_POST['senha'];
$email = $_POST['email'];

$sql = "SELECT * FROM usuarios WHERE usuario = '$usuario' AND senha = '$senha' AND email = '$email'";
$resultado = mysqli_query($conexao, $sql);

if (mysqli_num_rows($resultado) > 0) {

    $dados = mysqli_fetch_assoc($resultado);

    $_SESSION['usuario'] = $dados['usuario'];
    $_SESSION['email'] = $dados['email'];

    header("Location: perfil.php");
    exit();

} else {
    header("Location: loginerrado.html");
    exit();
}

mysqli_close($conexao);
?>