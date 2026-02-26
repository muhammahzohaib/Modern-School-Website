// chnage navbar color when we scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("nav_scroll", window.scrollY > 0);
});

///hide / show faq section
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    /////change icon

    const icon_change = faq.querySelector(".faq_icon i");
    if (icon_change.className === "uil uil-plus") {
      icon_change.className = "uil uil-minus";
    } else {
      icon_change.className = "uil uil-plus";
    }
  });
});

////////
const menu = document.querySelector(".nav_menu");
const menubtn = document.querySelector("#open-menu-btn");
const closebtn = document.querySelector("#close-menu-btn");
menubtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closebtn.style.display = "inline-block";
  menubtn.style.display = "none";
});

closebtn.addEventListener("click", () => {
  menu.style.display = "none";
  closebtn.style.display = "none";
  menubtn.style.display = "inline-block";
});
