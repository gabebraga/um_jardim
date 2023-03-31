function validar(){
    if(document.cadastro.email.value == ""){
        alert('Preencha o campo "E-mail"!')
        document.cadastro.email.focus()
        return false
    }
    if(document.cadastro.email.value.indexOf ('.com') == -1){
        alert('Preencha o campo com um E-mail valido!')
        document.cadastro.email.focus()
        return false
    }
    if(document.cadastro.cpf.value == ""){
        alert('Preencha o campo "CPF"!')
        document.cadastro.cpf.focus()
        return false
    }
    if(document.cadastro.nome.value == ""){
        alert('Preencha o campo "Nome"!')
        document.cadastro.nome.focus()
        return false
    }
    if(document.cadastro.tel.value == ""){
        alert('Preencha o campo "Telefone"!')
        document.cadastro.tel.focus()
        return false
    }
    if(document.cadastro.senha.value == ""){
        alert('Preencha o campo "Senha"!')
        document.cadastro.senha.focus()
        return false
    }
    if(document.cadastro.confirm_senha.value == ""){
        alert('Preencha o campo " Confirme a Senha"!')
        document.cadastro.confirm_senha.focus()
        return false
    }
    if(document.cadastro.senha.value == document.cadastro.confirm_senha.value){
        alert('Senhas não coincidem!')
        document.cadastro.senha.focus()
        return false
    }
}