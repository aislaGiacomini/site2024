function cadastrarfinal(){
    let tnamecartao = document.getElementById('txtname').value;
    let tnumcartao = document.getElementById('txtnum').value;
    let tdate = document.getElementById('txtname').value;
    let tcod = document.getElementById('txtcod').value;
     

    if (!tnamecartao || !tnumcartao || !tdate || !tcod) {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
     const usuario = {
        nome: tnamecartao,
        numcartao : tnumcartao,
        datavenc : tdate,
        codseg : tcod
     }

    let array = localStorage.getItem('arrayUsuario');
    let arrayUsuario =  array==null?[]:JSON.parse(array);

    //adicionar no array
    arrayUsuario.push(usuario);

    //salvar na storage
    //JSON.stringify: convert array em String (JSON)
    localStorage.setItem('arrayUsuario', 
              JSON.stringify(arrayUsuario));

    alert("Dados salvos")

    window.location.href = "agradecimento.html";
}

