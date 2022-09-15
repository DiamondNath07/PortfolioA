const menuBtn = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".show-sidebar");

menuBtn.addEventListener("click", function () {
  console.log(sidebar.classList);
  sidebar.classList.toggle("show-sidebar");
});
