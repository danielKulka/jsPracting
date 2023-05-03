function formSubmit(){
  let myForm = document.forms.myForm;
  if (myForm.mensage.value==""){
    alert ('mensagem obrigatória!')
    return false
  }
}