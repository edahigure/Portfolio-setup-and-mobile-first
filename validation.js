let form=document.querySelector('.contact-form')
let email=document.getElementById("email");
let validate_email=document.querySelector('.validate-email')


console.log(email);
console.log(form);

function is_valid_email(event) {

    console.log(email.value);
    if (email.value == email.value.toLowerCase()) {
        email.setCustomValidity("");        
      } else {        
        email.reportValidity();
        event.preventDefault();   
        validate_email.style.display='block';
      }
}


form.addEventListener("submit", is_valid_email );
