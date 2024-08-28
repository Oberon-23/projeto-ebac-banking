const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-Beneficiario');
let formEValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nomeBeneficiario = document.getElementById('nome-Beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta <b>${numeroContaBeneficiario.value}</b>`;

   formEValido = validaNome(nomeBeneficiario.value) // Certifique-se de que o nome da variável está correto
    if (formEValido) {  // Remova o ponto e vírgula desnecessário aqui
        const containerMensagemSucesso = document.getElementById('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        
        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.getElementById('.error-message').style.display = 'block';
    }
});

nomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if (!formEValido) {  
        nomeBeneficiario.classList.add('error');
       // nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});

