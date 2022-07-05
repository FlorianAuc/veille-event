// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const scrollNav = document.getElementById("navbar");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

let scroll = 0;
window.addEventListener("scroll", () => {
  if (window.scrollY > scroll) {
    scrollNav.style.height = "50px";
  } else {
    scrollNav.style.height = "80px";
  }

  scroll = window.scrollY;
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    popup.style.transform = "translateX(0px)";
    popup.style.opacity = "1";
  } else {
    popup.style.transform = "translateX(400px)";
    popup.style.opacity = 0;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.transform = "translateX(400px)";
  popup.style.opacity = 0;
});
