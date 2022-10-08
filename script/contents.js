// mouse move
const circle = document.querySelector(".circle");
const aTag = document.querySelectorAll("a");

// cursor event
const onMove = (e) => {
  circle.style.left = `${e.pageX - 8}px`;
  circle.style.top = `${e.pageY - 8}px`;

  aTag.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      circle.classList.add("cursor_scale");
      circle.classList.add("cursor_color");
    });
    item.addEventListener("mouseleave", () => {
      circle.classList.remove("cursor_scale");
      circle.classList.remove("cursor_color");
      circle.classList.remove(".circle::before");
    });
  });
};
addEventListener("mousemove", onMove);

//top button
const topBtn = document.querySelector(".top_btn");
const main2 = document.querySelector(".main2");

let height = main2.offsetTop - document.documentElement.clientHeight;
// let height = main2;
topBtn.classList.remove("show_top_btn");
addEventListener("scroll", () => {
  if (scrollY >= height) {
    topBtn.classList.add("show_top_btn");
  } else if (scrollY < height) {
    topBtn.classList.remove("show_top_btn");
  }
});

// contact popup
const contactButton = document.querySelector("#contact-button");
const contactPopup = document.querySelector(".contact_popup");
const removePopup = document.querySelector(".close_btn");
const body = document.querySelector("body");

contactButton.addEventListener("click", () => {
  contactPopup.classList.add("contact_popup_show");
});

removePopup.addEventListener("click", () => {
  contactPopup.classList.remove("contact_popup_show");
});
