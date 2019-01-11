function signuptest(){
  var form = document.getElementById("signup");
  form.action = encodeURI("https://test--pixlperfect01.repl.co?username="+document.getElementById("usernameSignUp").value+"&password="+document.getElementById("passwordSignUp").value+"&email="+document.getElementById("email").value);
}
function verify(){
  var t=document.getElementById("errs");
  for(var i=0;i<t.children.length;i++){
    t.children[i].style.hidden=true;
  }
  var a = document.getElementById("usernameSignUp").value;
  var b = document.getElementById("passwordSignUp").value;
  var c = document.getElementById("confirmPassword").value;
  var d = document.getElementById("email").value;
  var e = document.getElementById("signup");
  if(a.length>=8){
    if(b.length>=10&&c.length>=10){
      if(b===c){
        if(d.checkValidity()&&d.length!==0){
          e.action = encodeURI("https://test--pixlperfect01.repl.co?username="+document.getElementById("usernameSignUp").value+"&password="+document.getElementById("passwordSignUp").value+"&email="+document.getElementById("email").value);
          e.submit();
        }else{
          t.children[0].style.hidden=false;
        }
      }else{
        t.children[1].style.hidden=false;
      }
    }else{
      t.children[2].style.hidden=false;
    }
  }else{
    t.children[3].style.hidden=false;
  }
}
