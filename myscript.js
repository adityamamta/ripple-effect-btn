"use strict"

const btn = document.querySelector(".btn");
const circle = document.querySelector(".circle");

btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
})