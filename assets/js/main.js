document.documentElement.classList.add("js-enabled");

function getCurrentTheme() {
  return document.documentElement.getAttribute("data-theme")
    || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

function updateThemeToggle() {
  const button = document.querySelector(".theme-toggle");
  if (!button) {
    return;
  }

  const theme = getCurrentTheme();
  const nextTheme = theme === "dark" ? "light" : "dark";

  button.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
  button.setAttribute("title", `Switch to ${nextTheme} mode`);
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem("theme", theme);
  } catch (error) {
    // The selected theme still applies for the current page session.
  }
  updateThemeToggle();
}

const themeToggle = document.querySelector(".theme-toggle");
if (themeToggle) {
  updateThemeToggle();
  themeToggle.addEventListener("click", () => {
    setTheme(getCurrentTheme() === "dark" ? "light" : "dark");
  });
}

let lastBibtexTrigger = null;

function getBibtexModal() {
  let modal = document.querySelector(".bibtex-modal");

  if (!modal) {
    modal = document.createElement("div");
    modal.className = "bibtex-modal";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="bibtex-dialog" role="dialog" aria-modal="true" aria-labelledby="bibtex-title">
        <div class="bibtex-dialog-header">
          <h3 id="bibtex-title">BibTeX</h3>
          <button class="bibtex-close" type="button" aria-label="Close BibTeX popup">&times;</button>
        </div>
        <textarea class="bibtex-text" readonly></textarea>
        <div class="bibtex-dialog-actions">
          <span class="bibtex-status" aria-live="polite"></span>
          <button class="button bibtex-copy" type="button">Copy</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener("click", (event) => {
      if (event.target === modal || event.target.classList.contains("bibtex-close")) {
        closeBibtexModal();
      }
    });
  }

  return modal;
}

function closeBibtexModal() {
  const modal = document.querySelector(".bibtex-modal");
  if (modal) {
    modal.classList.remove("is-visible");
  }

  if (lastBibtexTrigger) {
    lastBibtexTrigger.focus();
    lastBibtexTrigger = null;
  }

  if (modal) {
    modal.setAttribute("aria-hidden", "true");
  }
}

document.querySelectorAll(".bibtex-open").forEach((button) => {
  button.addEventListener("click", () => {
    const bibtex = button.dataset.bibtex;
    const modal = getBibtexModal();
    const text = modal.querySelector(".bibtex-text");
    const copy = modal.querySelector(".bibtex-copy");
    const status = modal.querySelector(".bibtex-status");

    lastBibtexTrigger = button;
    text.value = bibtex;
    status.textContent = "";
    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("is-visible");
    modal.querySelector(".bibtex-close").focus();

    copy.onclick = async () => {
      try {
        await navigator.clipboard.writeText(bibtex);
        status.textContent = "Copied";
      } catch (error) {
        text.focus();
        text.select();
        status.textContent = "Select and copy manually";
      }
    };
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeBibtexModal();
  }

  if (event.key === "Tab") {
    const modal = document.querySelector(".bibtex-modal.is-visible");
    if (!modal) {
      return;
    }

    const focusable = Array.from(modal.querySelectorAll("button, textarea, [href], [tabindex]:not([tabindex='-1'])"))
      .filter((element) => !element.disabled);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});
