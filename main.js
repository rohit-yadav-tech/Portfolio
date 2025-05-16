const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const listItems = document.querySelector(".navbar-list").children;



function removeClass(e){

 nav_header.classList.toggle("active");

}


for (let item of listItems){
  item.addEventListener("click", removeClass)
}




const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());





