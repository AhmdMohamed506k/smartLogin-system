let sName = document.querySelector("#sName");
let sEmail = document.querySelector("#sEmail");
let spassword = document.querySelector("#spword");
let sbtn = document.querySelector("#sbtn");
let userlist;
// /////////////////  - [ S T A R T ] - ////////////////
if(localStorage.getItem("user") == null){
    userlist=[];

}else{
 userlist =JSON.parse(localStorage.getItem("user"));

}

//================================================================================================================//

function signup(){
    let data = {
        name: sName.value,
        Email: sEmail.value,
        pass: spassword.value,
    }
    if(userlist.length == 0){
        userlist.push(data);
        localStorage.setItem("user", JSON.stringify(userlist));
        document.querySelector("#exist").innerHTML = ` <span class="text-success m-3"  >Success</span>`;
        
    
    }
    
    if(emptysingin()== false){
        document.querySelector("#exist").innerHTML=`'<span class="text-danger m-3">All inputs is required</span>'`;
       return false;
    }
    if(existsEmail() == false){
        document.querySelector("#exist").innerHTML=`'<span class="text-danger m-3">email already exists</span>'`
        return false;
        
    }if(existsName()== false){
        document.querySelector("#exist").innerHTML=`'<span class="text-danger m-3">Name already exists</span>'`
       
    }
    else{
        userlist.push(data);
        localStorage.setItem("user", JSON.stringify(userlist));
        document.querySelector("#exist").innerHTML = ` <span class="text-success m-3"  >Success</span>`;
    
    }
}

//=================================================================================================================//
 function emptysingin() {
 if(sName.value == "" || sEmail.value == "" || spassword.value == ""){ 
    return false 
 }else{
    return true
    }
 }
function existsEmail(){
    for(let i =0 ;i<userlist.length;i++){
        if(userlist[i].Email == sEmail.value){
            return false
        }
        
    }

}
function existsName(){
    for(let i =0 ;i<userlist.length;i++){
        if(userlist[i].name == sName.value){
            return false

        }
    }
}

sbtn.addEventListener("click", signup);
