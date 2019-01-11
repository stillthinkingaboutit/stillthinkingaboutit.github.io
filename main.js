setInterval(signuptest,10);
function signuptest(){
  var form = document.getElementById("signup");
  form.action = encodeURI("https://websiteSignUp--pixlperfect01.repl.co?username="+document.getElementById("usernameSignUp").value+"&password="+document.getElementById("passwordSignUp").value+"&email="+document.getElementById("email").value);
}
function verify(){
  var a = document.getElementById("usernameSignUp").value;
  var b = document.getElementById("passwordSignUp").value;
  var c = document.getElementById("confirmPasswordSignUp").value;
  var d = document.getElementById("email").value;
  var e = document.getElementById("signup");
  if(a.length>=8){
    if(b.length>=8&&c.length>=8){
      if(b===c){
        if(d.checkValidity()&&d.length!==0){
          e.submit();
        }else{
          //invalid email
        }
      }else{
        //passwords do not match
      }
    }else{
      //password is not long enough
    }
  }else{
    //username is not long enough
  }
}
