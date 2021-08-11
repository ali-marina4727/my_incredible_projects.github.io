"use strict"
let steps = 0;

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const lines = document.querySelectorAll(".line-pos")
const numbers = document.querySelectorAll(".number")

next.addEventListener("click", () => {
    if (steps == numbers.length - 1) {
        numbers[steps].style.border = "5px solid #9bc5fb";
        next.disabled = true;
        next.classList.add("disabled")


    }
    if (steps < numbers.length - 1) {
        if (lines[steps]) {
            lines[steps].style.width = "100px";
        }
        numbers[steps].style.border = "5px solid #9bc5fb";
        steps++;
        prev.disabled = false;
        prev.classList.remove("disabled")

    }
})

prev.addEventListener("click", () => {
    if (steps >= 0) {
        next.disabled = false;
        next.classList.remove("disabled")

        numbers[steps].style.border = "5px solid #808080"
        steps--;
        if (steps < 0) {
            steps++
        };
        lines[steps].style.width = "0px";

    }
    if (steps == 0) {
        prev.disabled = true;
        prev.classList.add("disabled")
    }

})

let currentStep = 0;

numbers.forEach((num, i) => {
    num.addEventListener("click", () => {
        currentStep = i;
        steps = i;
        if (steps >= 0) {
            next.disabled = false;
        }
        if (steps < numbers.length - 1) {
            prev.classList.remove("disabled")
        }
        for (let j = 0; j < lines.length; j++) {
            lines[j].style.width = "0px";
            numbers[j].style.border = "5px solid #808080";

        }

        for (let j = 0; j < i; j++) {
            lines[j].style.width = "100px";
            numbers[j].style.border = "5px solid #9bc5fb";
        }
    });
});