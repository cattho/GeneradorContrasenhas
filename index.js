const passwordInput = document.getElementById('password');
const copyButton = document.getElementById('buttonCopy');


const genPassword = () =>{
    const characters= '0123456789abcdefghijklmnopqrstuvwxyz!@#$&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const passwordLength= 12;
    let password = ''

    for(let i = 0; i < passwordLength; i++){
        let randomNumber= Math.floor(Math.random() * characters.length);
        password += characters.substring(randomNumber, randomNumber+1)
    }

    document.getElementById('password').value= password;    
}

copyButton.addEventListener('click', function () {
    copyPassword(password.value);
})

const copyPassword = (text) =>{
    navigator.clipboard.writeText(text);
 }



