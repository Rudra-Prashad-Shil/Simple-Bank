document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passField = document.getElementById('user-pass');
    const password = passField.value;

    if(email== 'user@gmail.com' && password == '123456'){
        window.location.href = 'bank.html'
    }
    else{
        console.log('invalid user');
        alert('Invalid Email or Password');
        emailField.value = '';
        passField.value = '';
    }
})