document.getElementById("loginbutton").addEventListener( 'click', function (e){
 
    e.preventDefault()
    var user = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if(user =="admin" && password =="1234")
    {
        
   window.location.href='Admin.html';
    }
    else{
      
      window.location.href='user.html';
    }
  
});
 


