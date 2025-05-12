const animateButton = document.getElementById("animateButton");
const saveColorBtn = document.getElementById("saveColorBtn");

// Trigger animation on click
animateButton.addEventListener("click", () => {
animateButton.classList.add ("bounce");
setTimeout(() => {
    animateButton.classList.remove("bounce");
}, 500);
});

// save user preference to localstorage
saveColorBtn.addEventListener("click", () => {
    const favoriteColor = prompt("Enter your favorite color: ");
    if (favoriteColor) {
        localStorage.setItem("favColor", favoriteColor);
        alert("Color saved!");
    }
});

// apply user preference on page load
window.onload = () => {
    const savedColor = localStorage.getItem("favColor");
    if (savedColor){
        document.body.style.backgroundColor = savedColor;
    }
};