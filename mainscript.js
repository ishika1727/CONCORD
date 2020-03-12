function subs(){

    document.getElementById("sign").addEventListener("click", function(event){
        event.preventDefault()
      });
    var sname=document.forms["sign"]["fname"].value;
    var sphone=document.forms["sign"]["num"].value;
    var semail=document.forms["sign"]["email"].value;
    var spass=document.forms["sign"]["pass"].value;
     
    var e=/[0-9]{10}/;
    console.log(sname);
    
    console.log(sphone);
    console.log(spass);
    
    console.log(semail);
    if(sname==null)
    {
        alert("Please enter name!");
    } 
    if(!e.test(sphone))
    {
        alert("Please enter valid phone number");
    }
    if(semail=="")
    {
        alert("Please enter email!");
    } 
    var obj={
        "name" : sname,
        "phone" : sphone,
        "email" : semail,
        "password" : spass
    };
    $.ajax({
        type: "POST",
        url: "https://h4c.herokuapp.com/signUp",
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(obj),
        success:(res,status,xhr)=>{
            
            console.log(res + status + xhr);
        }
           
            
        
});
        





    

}
function subl(){
    document.getElementById("sign").addEventListener("click", function(event){
        event.preventDefault()
      });
    var lemail=document.forms["log"]["email"].value;
    var lpass=document.forms["log"]["pass"].value;  
    console.log(lpass);
    console.log(lemail);
    if(lemail=="")
    {
        alert("Please enter email!");
    } 

    var obj={
        "email" : lemail,
        "password" : lpass
    };
    $.ajax({
        type: "POST",
        url: "https://h4c.herokuapp.com/login",
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(obj),
        success:(res,status,xhr)=>{
            r=JSON.parse(JSON.parse(JSON.stringify(xhr)).responseText);
            console.log(r);
            mes=r.response;
            mess=mes.userFound;
            if(mess==false)
            {
                alert("User not registered");
            }
            console.log(res + status + xhr);
        }
           
            
        
});
     
}
