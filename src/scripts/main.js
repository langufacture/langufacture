logoSetup = () => {
    const img = document.createElement("img");
    img.src = "/src/assets/langufacture.svg";
    img.alt = "Langufacture logo (borromean trefoil)";
    img.id = "logo";
    document.body.appendChild(img);
    console.log("setup complete");
    const title = document.querySelector(".title");
    title.insertBefore(img, title.firstChild);
}
window.addEventListener("load", ()=>console.log("do nothing"));
console.log("loaded");
