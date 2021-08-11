"use strict";

const searchBtn = document.querySelector(".search-btn");
const search = document.querySelector(".search");

searchBtn.addEventListener("click", () => {
    if (search.classList.contains("inactive")) {
        search.classList.remove("inactive")
        search.classList.add("active")
        search.value = ""

    } else {
        search.classList.remove("active")
        search.classList.add("inactive")
        search.value = ""
    }
    search.focus()
})