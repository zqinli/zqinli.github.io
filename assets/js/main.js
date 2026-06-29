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
  localStorage.setItem("theme", theme);
  updateThemeToggle();
}

const themeToggle = document.querySelector(".theme-toggle");
if (themeToggle) {
  updateThemeToggle();
  themeToggle.addEventListener("click", () => {
    setTheme(getCurrentTheme() === "dark" ? "light" : "dark");
  });
}

function getBibtexModal() {
  let modal = document.querySelector(".bibtex-modal");

  if (!modal) {
    modal = document.createElement("div");
    modal.className = "bibtex-modal";
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
}

document.querySelectorAll(".bibtex-open").forEach((button) => {
  button.addEventListener("click", () => {
    const bibtex = button.dataset.bibtex;
    const modal = getBibtexModal();
    const text = modal.querySelector(".bibtex-text");
    const copy = modal.querySelector(".bibtex-copy");
    const status = modal.querySelector(".bibtex-status");

    text.value = bibtex;
    status.textContent = "";
    modal.classList.add("is-visible");

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
});
