<?php
include_once('conexao.php');
$email= $_POST ['email'];
$cpf= $_POST ['cpf'];
$nome= $_POST ['nome'];
$tel= $_POST['tel'];
$senha= $_POST['senha'];
$confirm_senha= $_POST['confirm_senha'];

$sql= "INSERT INTO  cadastro (email,cpf,nome,tel,senha,confirm_senha) VALUES ('$email', '$cpf', '$nome', '$tel', '$senha', '$confirm_senha')";
$enviar= mysqli_query($conexao,$sql);
?>