const openButton = document.getElementById("openButton");
const birthdayReveal = document.getElementById("birthdayReveal");
const welcomeScreen = document.querySelector(".welcome-screen");

const letterButton = document.getElementById("letterButton");
const letterSection = document.getElementById("letterSection");
const memoriesButton = document.getElementById("memoriesButton");
const memoriesSection = document.getElementById("memoriesSection");
const deserveButton = document.getElementById("deserveButton");
const deserveSection = document.getElementById("deserveSection");
const finalSectionButton =
    document.getElementById("finalSectionButton");

const finalSection =
    document.getElementById("finalSection");

const finalButton =
    document.getElementById("finalButton");

const finalMessage =
    document.getElementById("finalMessage");
const fireworksContainer =
    document.getElementById("fireworksContainer");

const confettiContainer = document.getElementById("confettiContainer");


openButton.addEventListener("click", function () {

    welcomeScreen.classList.add("celebrating");

    setTimeout(function () {

        birthdayReveal.classList.add("show");

        createConfetti();

    }, 700);

});


letterButton.addEventListener("click", function () {

    birthdayReveal.classList.remove("show");

    setTimeout(function () {

        letterSection.classList.add("show");

    }, 500);

});


function createConfetti() {

    const colors = [
        "#006D77",
        "#0A9396",
        "#00B4D8",
        "#48CAE4",
        "#90E0EF",
        "#CAF0F8",
        "#FFFFFF"
    ];

    for (let i = 0; i < 80; i++) {

        const piece = document.createElement("span");

        piece.classList.add("confetti-piece");

        piece.style.left = Math.random() * 100 + "%";

        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        piece.style.animationDuration =
            3 + Math.random() * 3 + "s";

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        confettiContainer.appendChild(piece);

    }

}

memoriesButton.addEventListener("click", function () {

    letterSection.classList.remove("show");

    setTimeout(function () {

        memoriesSection.classList.add("show");

    }, 500);

});

deserveButton.addEventListener("click", function () {

    memoriesSection.classList.remove("show");

    setTimeout(function () {

        deserveSection.classList.add("show");

    }, 500);

});

finalSectionButton.addEventListener("click", function () {

    deserveSection.classList.remove("show");

    setTimeout(function () {

        finalSection.classList.add("show");

    }, 500);

});


finalButton.addEventListener("click", function () {
    finalMessage.classList.add("show");

    finalSection.classList.add("celebrating");

    createFireworks();
    createCelebration();
});

function createFireworks() {
    const colors = [
        "#006D77",
        "#0A9396",
        "#00B4D8",
        "#48CAE4",
        "#90E0EF",
        "#FFFFFF"
    ];

    for (let i = 0; i < 8; i++) {
        setTimeout(function () {
            const firework = document.createElement("div");
            firework.classList.add("firework");

            firework.style.left =
                15 + Math.random() * 70 + "%";

            firework.style.top =
                15 + Math.random() * 45 + "%";

            firework.style.backgroundColor =
                colors[Math.floor(Math.random() * colors.length)];

            fireworksContainer.appendChild(firework);

            createParticles(
                firework,
                colors[Math.floor(Math.random() * colors.length)]
            );

            setTimeout(function () {
                firework.remove();
            }, 1500);

        }, i * 400);
    }
}

function createParticles(firework, color) {
    const particleCount = 25;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("span");

        particle.classList.add("firework-particle");

        const angle =
            (Math.PI * 2 * i) / particleCount;

        const distance =
            60 + Math.random() * 100;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        particle.style.setProperty(
            "--x",
            x + "px"
        );

        particle.style.setProperty(
            "--y",
            y + "px"
        );

        particle.style.color = color;
        particle.style.backgroundColor = color;

        particle.style.left =
            firework.offsetLeft + "px";

        particle.style.top =
            firework.offsetTop + "px";

        fireworksContainer.appendChild(particle);

        setTimeout(function () {
            particle.remove();
        }, 1500);
    }
}

function createCelebration() {
    const pieces = ["💙", "✨", "💫", "♡", "✦", "🩵"];

    for (let i = 0; i < 30; i++) {
        setTimeout(function () {
            const piece = document.createElement("div");

            piece.classList.add("celebration-piece");

            piece.textContent =
                pieces[Math.floor(Math.random() * pieces.length)];

            piece.style.left =
                Math.random() * 100 + "%";

            piece.style.top =
                60 + Math.random() * 35 + "%";

            piece.style.animationDuration =
                2 + Math.random() * 2 + "s";

            piece.style.fontSize =
                18 + Math.random() * 20 + "px";

            document.body.appendChild(piece);

            setTimeout(function () {
                piece.remove();
            }, 4000);

        }, i * 100);
    }
}