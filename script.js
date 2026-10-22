
document.addEventListener("DOMContentLoaded", () => {
  // Automatically update the copyright year.
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  // Mobile navigation.
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation");

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      });
    });
  }

  // Project detail dialog.
  const projectDialog = document.querySelector("#project-dialog");
  const dialogTitle = document.querySelector("#dialog-title");
  const dialogDescription = document.querySelector("#dialog-description");
  const closeDialogButton = document.querySelector(".dialog-close");
  const doneButton = document.querySelector(".dialog-done");

  document.querySelectorAll(".project-details").forEach((button) => {
    button.addEventListener("click", () => {
      if (!projectDialog || !dialogTitle || !dialogDescription) return;

      dialogTitle.textContent = button.dataset.title || "Project";
      dialogDescription.textContent =
        button.dataset.description || "Project details are not available.";

      projectDialog.showModal();
    });
  });

  function closeProjectDialog() {
    if (projectDialog?.open) {
      projectDialog.close();
    }
  }

  closeDialogButton?.addEventListener("click", closeProjectDialog);
  doneButton?.addEventListener("click", closeProjectDialog);

  projectDialog?.addEventListener("click", (event) => {
    if (event.target === projectDialog) {
      closeProjectDialog();
    }
  });

  // Contact form: validate and prepare an email.
  const contactForm = document.querySelector("#contact-form");
  const formStatus = document.querySelector("#form-status");

  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    // Replace this placeholder with your actual email address.
    const recipient = "zion.jameelarin@gmail.com";

    if (recipient === "zion,jamelarin@gmail.com") {
      if (formStatus) {
        formStatus.textContent =
      }
      return;
    }

    const emailSubject = encodeURIComponent(subject);
    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    if (formStatus) {
      formStatus.textContent = "Opening your email application...";
    }

    window.location.href =
      `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;
  });
});
