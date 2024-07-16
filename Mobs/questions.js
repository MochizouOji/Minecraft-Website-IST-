

function abc() {

    const dropdown = document.getElementById("passivemobs");
    const selectedValue = dropdown.value;
    console.log(selectedValue); //learn to use log to work out when things work or not kinda like print with python//
    const audio = new Audio("../Audio/yes.mp3");

    if (selectedValue === "Villager") {
        question1.classList.add("hidden");
        question2.classList.remove("hidden");
        audio.play();
    }
    else {
        window.location.href = "dead.html";
    }

}

function hideme() {
    const audio = new Audio("../Audio/yes.mp3");
    question2.classList.add("hidden");
    question3.classList.remove("hidden");
    audio.play();
}

function bcd() {

    const typed = document.getElementById("filltheblank1input");
    const selectedValue1 = typed.value;
    console.log(selectedValue1);
    const audio = new Audio("../Audio/yes.mp3");

    if (selectedValue1 == "creative", "Creative", "CREATIVE") {
        question3.classList.add("hidden");
        question4.classList.remove("hidden");
        audio.play();
    }
    else {
        window.location.href = "dead.html";
    }

}



