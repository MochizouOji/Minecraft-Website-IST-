

function firstquestion() {

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

function thirdquestion() {

    const typed = document.getElementById("filltheblank1input");
    const selectedValue1 = typed.value;
    console.log(selectedValue1);
    const audio = new Audio("../Audio/yes.mp3");
    const noSpaces = selectedValue1.replace(/\s/g, '');

    if (noSpaces.toLowerCase() == "creative") {
        question3.classList.add("hidden");
        question4.classList.remove("hidden");
        audio.play();
    }
    else {
        window.location.href = "dead.html";
    }

}

function fourthquestion() {

     box1 = document.getElementById("img1");
     box2 = document.getElementById("img2");
     box3 = document.getElementById("img3");
     box4 = document.getElementById("img4");
     console.log ("box1.checked:" +box1.checked);
    const audio = new Audio("../Audio/yes.mp3");

    if (box1.checked && !box2.checked && !box3.checked && box4.checked) {
        question4.classList.add("hidden");
        question5.classList.remove("hidden");
        audio.play();
    }
    else {
        window.location.href = "dead.html";
    }

}

function hidemeagain() {
    const audio = new Audio("../Audio/yes.mp3");
    question5.classList.add("hidden");
    question6.classList.remove("hidden");
    audio.play();
}

function sixthquestion() {

    const dropdown2 = document.getElementById("pistonredstone");
    const selectedValue6 = dropdown2.value;
    console.log(selectedValue6);
    const audio = new Audio("../Audio/yes.mp3");

    if (selectedValue6 === "pusher") {
        question6.classList.add("hidden");
        question7.classList.remove("hidden");
        audio.play();   
    }
    else {
        window.location.href = "dead.html";
    }

}

function hidemeagain4() {
    const audio = new Audio("../Audio/yes.mp3");
    question7.classList.add("hidden");
    question8.classList.remove("hidden");
    audio.play();
}

function eigthquestion() {

    const typed3 = document.getElementById("filltheblank1input2");
    const selectedValue3 = typed3.value;
    console.log(selectedValue3);
    const audio = new Audio("../Audio/yes.mp3");
    const noSpaces2 = selectedValue3.replace(/\s/g, '');

    if (noSpaces2.toLowerCase() == "warden") {
        question8.classList.add("hidden");
        question9.classList.remove("hidden");
        audio.play();
    }
    else {
        window.location.href = "dead.html";
    }

}

function ninthquestion() {

    mob1 = document.getElementById("mob1");
    mob2 = document.getElementById("mob2");
    mob3 = document.getElementById("mob3");
    mob4 = document.getElementById("mob4");
    console.log ("mob1.checked:" +mob1.checked);
   const audio = new Audio("../Audio/yes.mp3");

   if (mob1.checked && mob2.checked && mob3.checked && mob4.checked) {
       question9.classList.add("hidden");
       question10.classList.remove("hidden");
       audio.play();
   }
   else {
       window.location.href = "dead.html";
   }

}

function hidemeagainagain() {
    const audio2 = new Audio("../Audio/Party Horn - Sound Effect (HD).mp3");
    body = document.body;
    question10.classList.add("hidden");
    final.classList.remove("hidden");
    document.body.style.backgroundImage = "url('../Images/congratsbg.jpg')";
    audio2.play();
}



