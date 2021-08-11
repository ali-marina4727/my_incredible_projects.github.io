"use strict";
const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
    panel.addEventListener("mouseover", () => {
        let active = document.querySelector(".active");
        active.classList.remove("active");
        panel.classList.add("active");
    });
});