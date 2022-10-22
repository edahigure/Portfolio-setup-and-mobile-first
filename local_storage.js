
let data_form = {
    name: '',
    email:'',
    message:''
}
  

let ele_name=document.getElementById("name");
let ele_email=document.getElementById("email");
let ele_msg=document.getElementById("msg");


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


function name_changed() {
console.log(ele_name.value);   
localStorage.setItem('email', ele_name.value);
data_form.name= ele_name.value;  
}
email.addEventListener("input",  name_changed );
















