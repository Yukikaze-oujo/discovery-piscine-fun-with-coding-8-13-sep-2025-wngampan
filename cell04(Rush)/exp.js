function toggleDescription(logoId, descId) {
    const logo = document.getElementById(logoId);
    const desc = document.getElementById(descId);

    logo.addEventListener("click", () => {
        desc.classList.toggle("show");
    });
}

toggleDescription("python-logo", "python-desc");

toggleDescription("java-logo", "java-desc");

toggleDescription("c-logo", "c-desc");

toggleDescription("html-logo", "html-desc");