let form=document.querySelector('.contact-form')
let email=document.getElementById("email");

console.log(email);
console.log(form);

function is_valid_email(event) {

    console.log(email.value);
    if (email.value == email.value.toLowerCase()) {
        email.setCustomValidity("");        
      } else {
        email.setCustomValidity("Please write email in lower case");        
        email.reportValidity();
        event.preventDefault();        
      }
}


form.addEventListener("submit", is_valid_email );



