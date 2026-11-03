const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    navigation.classList.toggle("is-open", open);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Ouvrir le menu");
      navigation.classList.remove("is-open");
    });
  });
}

const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const fields = new FormData(contactForm);
    const name = String(fields.get("name") || "").trim();
    const phone = String(fields.get("phone") || "").trim();
    const message = String(fields.get("message") || "").trim();
    const status = document.querySelector("#form-status");

    if (!name || !message) {
      if (status) status.textContent = "Merci de renseigner votre nom et votre message.";
      return;
    }

    const smsBody = [
      `Bonjour, je m’appelle ${name}.`,
      phone ? `Mon numéro : ${phone}.` : "",
      `Ma demande : ${message}`,
    ].filter(Boolean).join("\n");

    if (status) status.textContent = "Votre SMS est prêt dans votre application de messagerie. Confirmez son envoi pour transmettre votre demande.";
    window.location.href = `sms:+212661170707?body=${encodeURIComponent(smsBody)}`;
  });
}
