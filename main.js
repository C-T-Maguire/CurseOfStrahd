const mobilemenu = document.getElementById("mobile-menu-wrapper");

document.getElementById("mobNavBack").addEventListener("click", closeNav);
document.getElementById("about-link").addEventListener("click", closeNav);
document.getElementById("portfolio=link").addEventListener("click", closeNav);
document.getElementById("contact-link").addEventListener("click", closeNav);

function openNav() {
    document.getElementById("mobNavBack").style.width = "100%";
    document.getElementById("mySidenav").style.width = "250px";
  }
  
function closeNav() {
    document.getElementById("mobNavBack").style.width = "0%";
    document.getElementById("mySidenav").style.width = "0";
}