



var myinput=document.querySelector("#myinput");
var mybutton=document.querySelector("#btn");

mybutton.onclick = function(){
   
    if(mybutton.getAttribute('data-text') == "Show"){
        myinput.setAttribute('type','text');
        mybutton.setAttribute('data-text','hide');
        mybutton.innerHTML="Hide";
    }else{
        myinput.setAttribute('type','password');
        mybutton.setAttribute('data-text','Show');
        mybutton.innerHTML="Show";
    }

}
