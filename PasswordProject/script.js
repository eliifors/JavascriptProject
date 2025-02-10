const passwordButton = document.querySelector('.passwordButton');
const input = document.querySelector('input');
const faCopy = document.querySelector('.fa-copy');
const alertContainer = document.querySelector('.alertContainer');


passwordButton.addEventListener('click', createPassword);
faCopy.addEventListener('click', copyPassword);


function createPassword() {
    const passwordLength = 10;
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~`|}{[]\:;?><,./-=';

    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        const randomNum = Math.floor(Math.random()*characters.length);
        password += characters[randomNum];
    }

    input.value = password;
    alertContainer.textContent = 'Şifre Kopyalandı';
}

function copyPassword() {
    input.select();
    navigator.clipboard.writeText(input.value);
    
    if(input.value){
        input.select();
        navigator.clipboard.writeText(input.value);
        alertContainer.classList.remove('active');
        setTimeout(() => {
            alertContainer.classList.add('active');
        },2000);
    }
}    
