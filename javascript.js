function ValidateEmail(inputMail) {
console.log(inputMail.value);
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputMail.value.match(mailformat)){

 alert("Message sent succesfully.");    //The pop up alert for a valid email address

return true;
    
  }
  else{
 alert("You have entered an invalid email address!");
  return false;
  }
}

function goTo(){
  
  document.getElementById("home")
  .scrollIntoView({behavior:'smooth'});
}

function goTolinkedin(){
  window.location.href = "https://www.linkedin.com/in/winthegamelaksh";
}

function goToTwitter(){
  window.location.href = "https://twitter.com/hail_laika?s=09";
}

function goToMail(){
  window.location.href = "mailto:info.lakshmigopi@gmail.com";
}
