function cadastrar(){
    let temail = document.getElementById('txtemail').value;
    let tsenha = document.getElementById('txtsenha').value;
    let tnome = document.getElementById('txtname').value;
    let tcpf = document.getElementById('txtcpf').value;
    let ttel = document.getElementById('txttelefone').value;
    let tcep = document.getElementById('txtcep').value;
     

     //validar se os campos preenchidos

    if (!tnome || !temail || !tsenha || !tcpf || !ttel || !tcep) {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
     //criar o objeto usuario
     const usuario = {
        nome: tnome,
        senha : tsenha,
        email : temail,
        cpf : tcpf,
        tel: ttel,
        cep: tcep
     }

    //Array.push(usuario);
    let array = localStorage.getItem('arrayUsuario');
    let arrayUsuario =  array==null?[]:JSON.parse(array);

    //adicionar no array
    arrayUsuario.push(usuario);

    //salvar na storage
    //JSON.stringify: convert array em String (JSON)
    localStorage.setItem('arrayUsuario', 
              JSON.stringify(arrayUsuario));

    alert("Dados salvos")

    window.location.href = "finalizar.html";
}