const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Анимация при нажатии
const animBtn = document.querySelector(".animate-btn");
animBtn.addEventListener("click", () => {
    animBtn.textContent = "Yippee!";
    window.scrollTo({ top: 0, behavior: "smooth" });
    animBtn.style.backgroundColor = "green";
    animBtn.style.transform = "scale(1.2)";
    setTimeout(() => {
        animBtn.textContent = "Up";
        animBtn.style.backgroundColor = "cornflowerblue";
        animBtn.style.transform = "scale(1)";
    }, 1000);
});

const learn_more_Btn = document.getElementById("learn_m-btn");
learn_more_Btn.addEventListener("click", () => {
    window.open("https://ru.wikipedia.org/wiki/Portal", "_blank");
});

const learn_more_Btn2 = document.getElementById("learn_m-btn2");
learn_more_Btn2.addEventListener("click", () => {
    window.open("https://ru.wikipedia.org/wiki/Portal_2", "_blank");
});

const learn_more_Btn3 = document.getElementById("learn_m-btn3");
learn_more_Btn3.addEventListener("click", () => {
    window.open("https://ru.wikipedia.org/wiki/Portal:_Revolution", "_blank");
});

const learn_more_Btn4 = document.getElementById("learn_m-btn4");
learn_more_Btn4.addEventListener("click", () => {
    window.open("https://ru.wikipedia.org/wiki/Bridge_Constructor_Portal", "_blank");
});

$(document).ready(function () {
    $(".jquery-btn").click(function () {
        $(".jquery-content").slideToggle(300);
    });
});

$(document).ready(function () {
    $(".jquery-btn2").click(function () {
        $(".jquery-content2").slideToggle(300);
    });
});

$(document).ready(function () {
    $(".jquery-btn3").click(function () {
        $(".jquery-content3").slideToggle(300);
    });
});

$(document).ready(function () {
    $(".jquery-btn4").click(function () {
        $(".jquery-content4").slideToggle(300);
    });
});

$(document).scroll(function() {
  navbarScroll();
});

function navbarScroll() {
  var y = window.scrollY;
  if (y > 12) {
    $('.header').addClass('small');
  } else if (y < 12) {
    $('.header').removeClass('small');
  }
}