let typed = "";

document.addEventListener("keydown", (event) => {
    typed += event.key.toLowerCase();


    if (typed.length > 8) {
        typed = typed.slice(-8);
    }


    if (typed === "gifzinho") {
        document.getElementById("gif-container").style.display = "block";
    }
});
