function loadAboutMe(version) {
    const aboutText = document.getElementById("about-text");

    // Define different versions of the text
    const aboutVersions = {
        v1: "Hi, I'm Ilia Degtiarev, an Amazon PPC specialist. I optimize campaigns for better ROI.",
        v2: "Ilia here! I help Amazon sellers drive sales through data-backed PPC strategies.",
        v3: "Amazon PPC is my expertise – I create scalable strategies for brands that want to grow!"
    };

    // Update the text inside <p id="about-text">
    aboutText.textContent = aboutVersions[version];
}

// Load default version on page load
document.addEventListener("DOMContentLoaded", () => {
    loadAboutMe("v1"); // Loads Version 1 by default
});
