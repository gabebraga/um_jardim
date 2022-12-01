function validar(){
    if(document.data.email.value == ""){
        alert('Preencha o campo "E-mail"!')
        document.data.email.focus()
        return false
    }
    if(document.data.email.value.indexOf ('.com') == -1){
        alert('Preencha o campo com um E-mail valido!')
        document.data.email.focus()
        return false
    }
    if(document.data.cpf.value == ""){
        alert('Preencha o campo "CPF"!')
        document.data.cpf.focus()
        return false
    }
    if(document.data.nome.value == ""){
        alert('Preencha o campo "Nome"!')
        document.data.nome.focus()
        return false
    }
    if(document.data.sobrenome.value == ""){
        alert('Preencha o campo "Sobrenome"!')
        document.data.sobrenome.focus()
        return false
    }
    if(document.data.tel.value == ""){
        alert('Preencha o campo "Telefone"!')
        document.data.tel.focus()
        return false
    }
    if(document.data.pass.value == ""){
        alert('Preencha o campo "Senha"!')
        document.data.pass.focus()
        return false
    }
    if(document.data.confpass.value == ""){
        alert('Preencha o campo " Confirme a Senha"!')
        document.data.confpass.focus()
        return false
    }
    if(document.data.pass.value == document.data.confpass.value){
        alert('Senhas não coincidem!')
        document.data.pass.focus()
        return false
    }
}