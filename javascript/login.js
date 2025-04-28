let LoginUserEmail=document.querySelector("#userE");
let LoginUserpassword=document.querySelector("#Userpass");
let LoginButton=document.querySelector("#lbtn");

let usersContainer=[];

if(localStorage.getItem("user")  != null){
    usersContainer=JSON.parse(localStorage.getItem("user"))
  
}
//===================================================================================================================//
function Userlogin(){
    if(emptylogin()==false){
        document.querySelector("#correct").innerHTML=`'<span class="text-danger m-3">All inputs is required</span>'`;
        return false;
    }
    for(let i=0;i<usersContainer.length;i++){
        if(usersContainer[i].Email == LoginUserEmail.value && usersContainer[i].pass == LoginUserpassword.value){
            localStorage.setItem("usersession",usersContainer[i].name)
            document.querySelector("#correct").innerHTML = ` <span class="text-success m-3"  >Success Login</span>`;
            window.location.href="welcome.html"; 

        }else{



            document.querySelector("#correct").innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>';
           
        }
    }
}



//================================================================================================================//

function emptylogin(){
    if(LoginUserEmail.value=="" || LoginUserpassword.value==""){
        return false
    }
}


LoginButton.addEventListener("click",Userlogin)
   
    

  