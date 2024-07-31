const wrapper=document.querySelector(".sliderWrapper");
const slideritem=document.querySelectorAll(".menuItems");
slideritem.forEach((item,index) => {
    item.addEventListener("click",(event) =>{
        console.log("you click"+ index);
    })
});
