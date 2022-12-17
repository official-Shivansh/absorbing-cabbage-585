let formloginArr=JSON.parse(localStorage.getItem("logindata")) || [];
let chkform=document.querySelector("#flogin");
let phn=document.querySelector("#chkphn")
let passs=document.querySelector("#chkpass")
chkform.addEventListener("submit",function(event){
    event.preventDefault(event)

      formloginArr.forEach(function(element) {
        if(phn.value=="" || passs.value==""){
            alert("Please Enter Your Detail")
        }
       else{
        if(phn.value==element.phoneNum && passs.value==element.password ){
            alert("Succesfully Login")
            
            window.location.href="index.html"
        }
        else{
            alert("Wrong Phone Number or Password")
           }
       }
      });
    
})