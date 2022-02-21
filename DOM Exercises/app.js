const output = document.querySelector('.output');
const userVal = document.querySelector('input[name="userName"]');
const btn = document.querySelector('button');
userVal.style.borderColor = '#333';
btn.onclick = ()=>{
    if(userVal.value.length > 3){
        const message = `Welcome to the site ${userVal.value}`;
        output.textContent =  message;
        userVal.style.display = 'none';
        btn.style.display = 'none';
    }
    else{
        output.textContent = 'Name length must be 3+ characters';
        userVal.style.borderColor = 'red';
    }
}

