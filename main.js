const form = document.querySelector('#signup');
const fName = document.querySelector('#fname');
const lName = document.querySelector('#lname');
const eMail = document.querySelector('#email');
const pwd = document.querySelector('#pwd');
const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;


form.addEventListener('submit', function(event) {
    
    // Prevent the default form behviour
    event.preventDefault();

    // Check each of the form fields
    checkTextField(fName);
    checkTextField(lName);
    checkEmailField(eMail);
    checkTextField(pwd);


    // Check the text input fields
    function checkTextField(field) {
        if(field.value != "") {
            field.classList.add('success');
            // form.reset();
        }
        else 
        {
            field.classList.add('errShow');
        }
    }

    // Check the email input field
    function checkEmailField(field) {
        if(field.value != "" && emailRegex.test(eMail.value)) {
            field.classList.add('success');
            form.reset();
        }
        else
        {
            field.classList.add('errShow');
        }
    }
});

