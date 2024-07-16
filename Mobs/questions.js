

function abc() {

    const dropdown = document.getElementById("passivemobs");
    const selectedValue = dropdown.value;
    console.log(selectedValue);
    const audio = new Audio("../Audio/Correct Answer sound effect.mp3");

    if (selectedValue === "Villager") {
        question1.classList.add("hidden");
        question2.classList.remove("hidden");
        audio.play();
    }
    else {
        window.location.href = "dead.html";
    }

}



