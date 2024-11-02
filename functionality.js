/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let a = true;
var scrn_w; 
var scrn_h;
var work_w;
var work_h;
var element_presence;


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





/*
window.addEventListener('resize', () => {
    scrn_w = window.innerWidth;
    scrn_h = window.innerHeight;
    element.style.gridTemplateRows = `${h(0.8)} ${h(0.2)}`;
});*/