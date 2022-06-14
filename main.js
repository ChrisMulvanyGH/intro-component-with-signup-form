const form = document.querySelector("form");
const formInputs = document.querySelectorAll("input");
const formErrImg = document.querySelectorAll(".signup__form--error-img");
const formErrTxt = document.querySelectorAll(".signup__form--error-txt");
const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;


form.addEventListener('submit', function (event) {
    event.preventDefault();

    for(let i=0; i<formInputs.length; i++) {

        if (formInputs[i].value !== "") {
            
            formInputs[i].style.borderColor = 'green';

        } else if(formInputs[i].type == "email" && emailRegex.test(formInputs[i].value)) {
            
            formInputs[i].style.borderColor = 'green';

        } else if(formInputs[i].type == "email" && !emailRegex.test(formInputs[i].value)) {

            formInputs[i].setAttribute('placeholder', 'email@example/com');
            formInputs[i].className += ' redPlaceHolder';

            formInputs[i].style.borderColor = 'red';
            formErrImg[i].classList.remove("hidden");
            formErrImg[i].classList.add("show");
            
            formInputs[i].style.marginBottom = '.2rem';
            formErrTxt[i].classList.remove("hidden");
            formErrTxt[i].classList.add("show");
        }
        
        else {

            formInputs[i].setAttribute('placeholder', '');

            formInputs[i].style.borderColor = 'red';
            formErrImg[i].classList.remove("hidden");
            formErrImg[i].classList.add("show");
            
            formInputs[i].style.marginBottom = '.2rem';
            formErrTxt[i].classList.remove("hidden");
            formErrTxt[i].classList.add("show");
        }
    }

});
