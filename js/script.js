"use strict";

// Hämtar menyknapp och huvudnavigation från DOM.
const menu = document.querySelector(".menu");
const mainNav = document.querySelector("#main-nav");

// Hämtar element för att generera meddelande från kontaktformulär.
const preview = document.querySelector("#preview");
const namePreview = document.querySelector("#name-preview");
const emailPreview = document.querySelector("#email-preview");
const messagePreview = document.querySelector("#message-preview");
const clearPreview = document.querySelector("#clear-preview");

// Hämtar kontaktformuläret
const contactForm = document.querySelector("#contact-form");

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

// Koden körs enbart där formuläret finns.
if (contactForm) {

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");

    const error = document.querySelector("#form-error");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Tar bort tidigare felmeddelanden.
        error.textContent = "";

        // Kontrollerar om något fält saknas.
        if (nameInput.value.trim() === "") {
            const errorItem = document.createElement("li");
            errorItem.textContent = "Fyll i ditt namn.";
            error.appendChild(errorItem);
        }
        if (emailInput.value.trim() === "") {
            const errorItem = document.createElement("li");
            errorItem.textContent = "Fyll i din e-post.";
            error.appendChild(errorItem);
        } else if (!emailInput.value.includes("@")) {
            const errorItem = document.createElement("li");
            errorItem.textContent = "Ange en giltig e-postadress."
            error.appendChild(errorItem);
        }
        if (messageInput.value.trim() === "") {
            const errorItem = document.createElement("li");
            errorItem.textContent = "Skriv din fråga.";
            error.appendChild(errorItem);
        }
        // Visar kortet på sidan om fellistan är tom.
        if (error.children.length === 0) {
            namePreview.textContent = nameInput.value.trim();
            emailPreview.textContent = emailInput.value.trim();
            messagePreview.textContent = messageInput.value.trim();

            preview.hidden = false;
        }
    });
}