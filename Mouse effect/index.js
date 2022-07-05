// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

const mouse = document.querySelector(".mouse");
const mouse2 = document.getElementById("mouse2");
const mouse3 = document.getElementById("mouse3");

window.addEventListener("mousemove", (e) => {
  mouse.style.left = e.pageX + "px";
  mouse.style.top = e.pageY + "px";
});

window.addEventListener("mousemove", (e) => {
  mouse2.style.left = e.pageX + "px";
  mouse2.style.top = e.pageY + "px";
});

window.addEventListener("mousemove", (e) => {
  mouse3.style.left = e.pageX + "px";
  mouse3.style.top = e.pageY + "px";
});
