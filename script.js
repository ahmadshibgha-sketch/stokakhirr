(function () {
  "use strict";

  const config = window.STOK_AKHIR_CONFIG || {};
  const orderButtons = document.querySelectorAll(".order-button");
  const dialog = document.getElementById("wa-dialog");
  const closeButton = document.getElementById("dialog-close");
  const okButton = document.getElementById("dialog-ok");

  function whatsappUrl() {
    const digits = String(config.whatsappNumber || "").replace(/\D/g, "");
    // WhatsApp phone number must include country code. No fake fallback number.
    if (!/^62[1-9]\d{7,12}$/.test(digits)) return null;
    const message = config.whatsappMessage ||
      "Halo Stok Akhir Kopi, saya ingin pesan kopi Rp18.000. Apakah masih tersedia?";
    return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
  }

  function order() {
    const url = whatsappUrl();
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else if (dialog && typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      window.alert("Nomor WhatsApp belum dikonfigurasi. Isi whatsappNumber di config.js.");
    }
  }

  orderButtons.forEach((button) => button.addEventListener("click", order));
  [closeButton, okButton].forEach((button) => {
    if (button) button.addEventListener("click", () => dialog.close());
  });
  if (dialog) dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  const menuButton = document.getElementById("menu-toggle");
  const nav = document.getElementById("primary-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Buka menu" : "Tutup menu");
      nav.classList.toggle("open", !isOpen);
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Buka menu");
      });
    });
  }

  // Subtle scroll reveal; the content remains visible if JavaScript is unavailable.
  if ("IntersectionObserver" in window &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const elements = document.querySelectorAll(".info-card, .gallery-item, .price-panel");
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          instance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    elements.forEach((el) => {
      el.classList.add("reveal-ready");
      observer.observe(el);
    });
  }
})();
