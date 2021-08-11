"use strict";

const zhmyak = document.querySelector(".zhmyak");
const container = document.querySelector(".container");

zhmyak.addEventListener("click", () => {
    if (container.classList.contains("turned")) {
        container.classList.remove("turned");
    } else container.classList.add("turned");

})