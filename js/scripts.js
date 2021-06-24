$(document).ready(function(){
  $("#questions").submit(function(event){
    event.preventDefault();
    const preference = parseInt($("#pref").val());
    const interest = parseInt($("#interests").val());
    const satisfaction = parseInt($("#satisfaction").val());
    const transportation = parseInt($("#transportation").val());
    const attachments = parseInt($("#attachments").val());
    const total = (preference + interest + satisfaction + transportation + attachments);
    
    
    if (total >12) {
      $("#result").text("swift");
      $("#closing").show();
    } else if (total < 7){
      $("#result").text("javaScript");
      $("#closing").show();
    } else {
      $("#result").text("cSharp");
      $("#closing").show();
    }
    
  });
});
