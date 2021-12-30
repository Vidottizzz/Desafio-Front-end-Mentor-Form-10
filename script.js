const pinkBtn = document.querySelector('.pink-button');
const emailInpt = document.querySelector('#email');
const footer = document.querySelector('.footer');
const errImg = document.querySelector('.error-image');
const result = document.querySelector('.result-p');


pinkBtn.addEventListener('click', function(){

    if(emailInpt.value == "" || emailInpt.value.indexOf('@') == -1 || emailInpt.value.indexOf('.') == -1){
     
        errImg.classList.remove('hide');
        errImg.classList.add('show');
        emailInpt.classList.add('border-red');
        result.innerHTML = 'Please provide a valid email';
    } else {
        emailInpt.value = " ";
        errImg.classList.add('hide');
        errImg.classList.remove('show');
        emailInpt.classList.remove('border-red');
        result.innerHTML = " ";
    }
      
})

