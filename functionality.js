/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const link = [
    "Kurt_Edraira_Resume_wikipedia.html",
    "Kurt_Edraira_Resume_plain.html",
    "ping.html"
];

let a = true;
var scrn_w; 
var scrn_h;
var work_w;
var work_h;
var element_presence;
let status = true;

function defaultscreen(){
document.getElementById("content_container").src === link[1];
        

    }
function resume_toggle(){
    if(status == true){
        document.getElementById("resume_link").href = "Kurt_Edraira_Resume_wikipedia.html";
        document.getElementById("resume_link").innerhtml = "wiki";
        status = false;
        
    }
    else if(status == false){
        document.getElementById("resume_link").href = "Kurt_Edraira_Resume_plain.html";
        document.getElementById("resume_link").innerhtml = "plain";
        status = true;
    }
}

function update(){
    scrn_w = window.innerWidth;
    scrn_h = window.innerHeight;
    work_h = "height:";
    work_w = "width :";
    
    work_h.concat(" ",scrn_h);
    work_w.concat(" ",scrn_w);
    
    document.getElementById("width").innerhtml = work_h;
    document.getElementById("height").innerhtml = work_w;
    console.log("height",scrn_h);
    console.log("width",scrn_w);
    console.log("Hello world!");
    
}
function openNav() {
    document.getElementById("tail").style.width = "250px";
    
}
function closeNav() {
    document.getElementById("tail").style.width = "20px";
}

/*function(e){   
  if (!document.getElementById('mySidenav').contains(e.target) && !document.getElementById('myMenu').contains(e.target)){
    // Clicked in box
   document.getElementById("mySidenav").style.width = "0px";  
  } else{
    //netripped code ; function deemed unneccessary; kept for reference;
    //source: https://stackoverflow.com/questions/58801002/how-to-create-an-auto-hide-sidebar;

  document.getElementById("mySidenav").style.width = "0px";
  }
};*/




/*
window.addEventListener('resize', () => {
    scrn_w = window.innerWidth;
    scrn_h = window.innerHeight;
    element.style.gridTemplateRows = `${h(0.8)} ${h(0.2)}`;
});*/