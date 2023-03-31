<?php

$email = $_POST['email'];
$cpf = ($_POST['cpf']);
$nome = ($_POST['nome']);
$tel = ($_POST['tel']);
$senha = ($_POST['senha']);
$confirm_senha = ($_POST['confirm_senha']);
$connect = mysqli_connect('sql210.epizy.com','epiz_33860483','8VEYYhEleTWHIm');
$db = mysqli_select_db('epiz_33860483_um_jardim_data');
$query_select = "SELECT email FROM cadastro WHERE email = '$email'";
$select = mysqli_query($query_select,$connect);
$array = mysqli_fetch_array($select);
$logarray = $array['login'];

  if($emial == "" || $email == null){
    echo"<script language='javascript' type='text/javascript'>
    alert('O campo email deve ser preenchido');window.location.href='
    cadastro.html';</script>";

    }else{
      if($logarray == $email){

        echo"<script language='javascript' type='text/javascript'>
        alert('Esse login já existe');window.location.href='
        cadastro.html';</script>";
        die();

      }else{
        $query = "INSERT INTO cadastro (email , cpf , nome , tel , senha , confirm_senha) VALUES ('$email','$cpf''$nome''$tel''$senha''$confirm_senha')";
        $insert = mysqli_query($query,$connect);

        if($insert){
          echo"<script language='javascript' type='text/javascript'>
          alert('Usuário cadastrado com sucesso!');window.location.
          href='login.html'</script>";
        }else{
          echo"<script language='javascript' type='text/javascript'>
          alert('Não foi possível cadastrar esse usuário');window.location
          .href='cadastro.html'</script>";
        }
      }
    }
?>