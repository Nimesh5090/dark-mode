let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let body = document.querySelector(".body");
let heading = document.querySelector(".desc");

function changedark(){
  body.style.backgroundColor="black";
  heading.style.color="white";
  btn2.style.backgroundColor="white";
  btn1.style.backgroundColor="black";
}
function changelight(){
    body.style.backgroundColor="white";
    heading.style.color="black";
    btn1.style.backgroundColor="white";
    btn2.style.backgroundColor="black";
}
btn2.addEventListener("click",changedark);
btn1.addEventListener("click",changelight);

