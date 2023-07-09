const styleSwitchToggler = document.querySelector(".style-switcher-toggler");
styleSwitchToggler.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
});
// hide style switcher on role
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open")
    }
})

// theme colors
const altStyles = document.querySelector(".alternate-style");
function setActiveStyle(color) {
    altStyles.forEach((style) => {
      if(color===style.getAttribute("title"))
      {
        style.removeAttribute('"disabled');
      }
      else
      {
        style.setAttribute('"disabled',"true");
      }  
    });
}



const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else   
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});