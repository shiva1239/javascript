function validate(){
  let name = document.forms[0]['name'].value;
  let email = document.forms[0]['email'].value;
  let phone = document.forms[0]['phone'].value;
  let password = document.forms[0]['password'].value;
  let phoneReg = /^[6-9]\d{9}$/
  let emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if(!phoneReg.test(phone)){
    alert('invalid Phone number');
  }
  if(!emailReg.test(email)){
    alert('Invalid Email');
  }
  
}