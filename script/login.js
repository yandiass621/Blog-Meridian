const form = document.querySelector('#login-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const message = document.querySelector('#access-message');
const togglePassword = document.querySelector("#toggle-password");

togglePassword.addEventListener('click', () =>{
    if(passwordInput.type === 'password') {
        passwordInput.type = 'text';
    }else{
        passwordInput.type = 'password';
    }
});

form.addEventListener('submit', async (event) =>{
    event.preventDefault();


    try{
        const response = await fetch('/api/access/check', {
            method: 'POST' ,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: emailInput.value,
                password: passwordInput.value,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            message.textContent = data.error;
            return;
        }

        if (data.hasAccess) {
            window.location.href = 'home.html';
            return;
        }

        message.textContent = 'Este e-mail não possui acesso ao painel.';
    }catch{
        message.textContent = 'Não foi possível conectar à API.';
    }
});

// FLUXO DO CÓDIGO:
// Clique em Entrar
// → JavaScript lê o e-mail
// → fetch envia POST para a API
// → API responde hasAccess
// → true abre home.html
// → false mostra a mensagem