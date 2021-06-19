$(document).ready(function(){
  $("form#questions").submit(function(event){
    event.preventDefault();
    const preference= parseInt($("#preference").val());
    const interest= parseInt($("#interests").val());
    const satisfaction= parseInt($("#satisfaction").val());
    const transportation= parseInt($("#transportation").val());
    const attachments= parseInt($("#attachments").val());
    const add= parseInt(preference+interest+satisfaction+transportation+attachments).val();
  
    if ("add">13){
      let result= "swift";
    } else if ("add"<7){
      let result= "java";
    } else {
      let result= "c-Sharp";
    }
    return result;
  }
}