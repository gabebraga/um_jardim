<?php
$email = $_POST['email'];
$entrar = $_POST['entrar'];
$senha = md5($_POST['senha']);
$connect = mysqli_connect('sql210.epizy.com','epiz_33860483','8VEYYhEleTWHIm');
$db = mysqli_select_db('epiz_33860483_um_jardim_data');
  if (isset($entrar)) {

    $verifica = mysqli_query("SELECT * FROM cadastro WHERE email =
    '$email' AND senha = '$senha'") or die("erro ao selecionar");
      if (mysqli_num_rows($verifica)<=0){
        echo"<script language='javascript' type='text/javascript'>
        alert('Login e/ou senha incorretos');window.location
        .href='login.html';</script>";
        die();
      }else{
        setcookie("email",$email);
        header("Location:index.html");
      }
  }
?>