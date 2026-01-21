// LIGHT AND DARK MODE FUNCTION
const theme= document.querySelector("#theme1");
theme.onclick=function ()
{
  document.body.classList.toggle("light-mode");

  const card= document.querySelectorAll(".card");
  card.forEach((card)=>(card.classList.toggle("themecard")));

  const button= document.querySelectorAll(".btn");
  button.forEach((bttn)=>(bttn.classList.toggle("btnlight")));

  const title= document.querySelectorAll(".title");
    title.forEach((title)=>( title.classList.toggle("titlelight")));

  theme.textContent=theme.textContent=="DARK MODE"?"LIGHT MODE":"DARK MODE";
 
}

// SHADOW FUNCTION
const shdow= document.querySelector("#btn1");
shdow.onclick=function()
{
     const card= document.querySelectorAll(".card");
  card.forEach((card)=>(card.classList.toggle("shadow")));
}

// ANIMATION FUNCTION
const anim= document.querySelector("#btn2");
anim.onclick= function()
{
    const card= document.querySelectorAll(".card");
    card.forEach((card)=>(card.classList.toggle("animate-box")));

}

// CIRCLE TRANSITION
const circle= document.querySelector("#btn3");
circle.onclick= function()
{


    const img= document.querySelectorAll("img");
    img.forEach((img)=>(img.classList.toggle("circle")));

}

// RESET BUTTON FUNCTION
const reset= document.querySelector("#btn4");

reset.onclick=function()
{
    // removing shadow 
    const card1= document.querySelectorAll(".card");
  card1.forEach((card)=>(card.classList.remove("shadow")));

//   removing Animation
const card2= document.querySelectorAll(".card");
    card2.forEach((card)=>(card.classList.remove("animate-box")));

    // removing Circle Animation
    const img= document.querySelectorAll("img");
    img.forEach((img)=>(img.classList.remove("circle")));



}