function checkInput(){
  var user = document.getElementById("usname").value.trim();
  var pw = document.getElementById("pass").value.trim();
  
  if(user==="" && pw===""){
    console.log("Login Error");
    document.getElementById("error").innerHTML="Please enter username and password";
  } else if(user===""){
    console.log("Login Error");
    document.getElementById("error").innerHTML="Please enter username";
  } else if(pw===""){
    console.log("Login Error");
    document.getElementById("error").innerHTML="Please enter password";
  } else {
    console.log("Login Success");
    document.getElementById("error").innerHTML="You have now logged in!";
  }
}
