const intro = document.getElementById("intro");
const story = document.getElementById("story");

let currentScene = 0;

const scenes = document.querySelectorAll(".scene");


function startStory() {

    intro.style.display = "none";

    story.classList.remove("hidden");

    currentScene = 0;

    showScene();

}


function showScene() {

    scenes.forEach(scene => {
        scene.classList.remove("visible");
    });

    if (scenes[currentScene]) {

        scenes[currentScene].classList.add("visible");

        scenes[currentScene].scrollIntoView({
            behavior: "smooth"
        });

    }

}


function nextScene() {

    if (currentScene < scenes.length - 1) {

        currentScene++;

        showScene();

    }

}


function restartStory() {

    currentScene = 0;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    setTimeout(() => {

        story.classList.add("hidden");

        intro.style.display = "flex";

    }, 500);

}


/* =========================
   ANIMAÇÃO AUTOMÁTICA
   AO ENTRAR NA TELA
========================= */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.35
    }

);


scenes.forEach(scene => {

    observer.observe(scene);

});


/* =========================
   CORAÇÕES FLUTUANTES
========================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";

    heart.style.fontSize =
        (12 + Math.random() * 18) + "px";

    heart.style.opacity =
        .15 + Math.random() * .5;

    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);


    const duration =
        5000 + Math.random() * 5000;


    heart.animate(

        [
            {
                transform: "translateY(0) rotate(0deg)",
                opacity: 0
            },

            {
                transform:
                    `translateY(-110vh) rotate(${Math.random() * 180 - 90}deg)`,
                opacity: heart.style.opacity
            },

            {
                transform:
                    `translateY(-120vh) rotate(180deg)`,
                opacity: 0
            }

        ],

        {
            duration: duration,
            easing: "linear"
        }

    );


    setTimeout(() => {

        heart.remove();

    }, duration);

}


setInterval(createHeart, 1800);