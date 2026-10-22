"use strict";

// Hämtar menyknapp och huvudnavigation från DOM.
const menu = document.querySelector(".menu");
const mainNav = document.querySelector("#main-nav");

menu.addEventListener("click", function () {
    // Funktion för att öppna och stänga mobilmeny, uppdaterar även knappens aria-attribut.
    if (mainNav.classList.contains("is-open")) {
        mainNav.classList.remove("is-open");
        menu.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-label", "Öppna meny");
    } else {
        mainNav.classList.add("is-open");
        menu.setAttribute("aria-expanded", "true");
        menu.setAttribute("aria-label", "Stäng meny");
    }
});