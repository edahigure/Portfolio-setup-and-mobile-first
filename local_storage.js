



let data_form = {
    name: '',
    email:'',
    message:''
}
  
let ele_name=document.getElementById("name");
let ele_email=document.getElementById("email");
let ele_msg=document.getElementById("msg");


if(!localStorage.getItem('name')) {    
    localStorage.setItem('name', ele_name.value);
    data_form.name = ele_name.value;
}else{    
    data_form.name = localStorage.getItem('name');
    ele_name.value = data_form.name;
}

if(!localStorage.getItem('email')) {    
    localStorage.setItem('email', ele_email.value);
    data_form.email = ele_email.value;
} else {
    data_form.email = localStorage.getItem('email');
    ele_email.value = data_email.name;
}
 

if(!localStorage.getItem('msg')) {    
    localStorage.setItem('msg', ele_msg.value);
    data_form.msg = ele_msg.value;
} else {
    data_form.msg = localStorage.getItem('msg');
    ele_msg.value = data_msg.name;
}



function name_changed() {
console.log(ele_name.value);   
localStorage.setItem('email', ele_name.value);
data_form.name= ele_name.value;  
}
ele_name.addEventListener("input",  name_changed );


function email_changed() {
    console.log(ele_email.value);   
    localStorage.setItem('email', ele_email.value);
    data_form.email= ele_email.value;  
}
ele_email.addEventListener("input",  email_changed );


function msg_changed() {
    console.log(ele_msg.value);   
    localStorage.setItem('msg', ele_msg.value);
    data_form.msg= ele_msg.value;  
}
ele_msg.addEventListener("input",  msg_changed );














