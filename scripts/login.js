let form=document.querySelector("form")
let formArr= [];
form.addEventListener("submit",function(event){
    event.preventDefault()
    if(form.fname.value=="" || form.lname.value=="" || form.mail.value=="" ||form.phNum.value=="" ||  form.pass.value==""){
        alert("Please fill the form")
    }
    else{
        let obj={
            firstName:form.fname.value,
            lastName:form.lname.value,
            mail:form.mail.value,
            phoneNum:form.phNum.value,
            password:form.pass.value
        }
        formArr.push(obj)
        console.log(formArr)
        localStorage.setItem("logindata", JSON.stringify(formArr))
        window.location.href="flogin.html"
    }
})

let flog=document.getElementById("flogin")
flog.addEventListener("click",function(){
    window.location.href="flogin.html"
})
