function enviarEmail(){
    const email = document.getElementById('email').value;
    localStorage.setItem('userEmail', email);
    alert('Email salvo com sucesso!');
}
    