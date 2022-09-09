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
    });
    item.addEventListener("mouseleave", () => {
      circle.classList.remove("cursor_scale");
    });
  });
};
addEventListener("mousemove", onMove);

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
