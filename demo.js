$(document).ready(function(){
    alert('amit')
 });
 $("#button").click(function(event){
    event.preventDefault();
    $("p").hide();
  });
$("#ul").append($("<li>").text("Some Text."));
console.log("jai")