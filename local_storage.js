
<<<<<<< HEAD



=======
>>>>>>> 586bbc506fab3a6dc3fa676b09c4530edbea84d7
let data_form = {
    name: '',
    email:'',
    message:''
}
  
<<<<<<< HEAD
=======

>>>>>>> 586bbc506fab3a6dc3fa676b09c4530edbea84d7
let ele_name=document.getElementById("name");
let ele_email=document.getElementById("email");
let ele_msg=document.getElementById("msg");


<<<<<<< HEAD
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



=======
if(!localStorage.getItem('name')) {
//populateStorage();
//console.log("no name in local storage ");
localStorage.setItem('name', ele_name.value);
data_form.name = ele_name.value;
} else {
//setData_from_storage();
//console.log(" name in local storage: ",localStorage.getItem('name'));
data_form.name = localStorage.getItem('name');
ele_name.value = data_form.name;
}


>>>>>>> 586bbc506fab3a6dc3fa676b09c4530edbea84d7
function name_changed() {
console.log(ele_name.value);   
localStorage.setItem('email', ele_name.value);
data_form.name= ele_name.value;  
}
<<<<<<< HEAD
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
=======
email.addEventListener("input",  name_changed );


>>>>>>> 586bbc506fab3a6dc3fa676b09c4530edbea84d7














