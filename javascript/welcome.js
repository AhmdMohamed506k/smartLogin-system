let UserName=document.querySelector("#username");
let logoutBTN=document.querySelector("#logoutBTN");



logoutBTN.addEventListener("click",function(){
   localStorage.removeItem("usersession");
   window.location.href="index.html";
})
var username=localStorage.getItem("usersession");
if(username){
    document.querySelector("#username").innerHTML="welcome "+username
}