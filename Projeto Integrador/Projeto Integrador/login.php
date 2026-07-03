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

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $usuario = trim($_POST['usuario']);
    $senha = trim($_POST['senha']);
    $email = trim($_POST['email']);

    
    if (empty($usuario) || empty($senha) || empty($email)) {
        header("Location: loginerrado.html");
        exit();
    }

  
    if (!str_contains($email, '@')) {
        header("Location: loginerrado.html");
        exit();
    }

   
    $sql_verificar = "SELECT * FROM usuarios WHERE usuario = '$usuario'";
    $resultado_verificar = mysqli_query($conexao, $sql_verificar);

    if (mysqli_num_rows($resultado_verificar) > 0) {
        
        header("Location: loginerrado.html");
        exit();
    }

        $sql_inserir = "INSERT INTO usuarios (usuario, senha, email) VALUES ('$usuario', '$senha', '$email')";
    
    if (mysqli_query($conexao, $sql_inserir)) {
        
        header("Location: login.html");
        exit();
    } else {
      
        header("Location: loginerrado.html");
        exit();
    }
}

mysqli_close($conexao);

?>