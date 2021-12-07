//Menu mobile
const menu = () => {
  let menuMobile = document.getElementsByClassName("nav--mobile")[0];
  menuMobile.classList.toggle("move");
};

document.getElementsByClassName("menu")[0].onclick = menu;

const moveMenu = () => {
  let linksMobile = document.querySelectorAll(".nav__link--mobile");
  linksMobile.forEach((element) => {
    element.parentElement.parentElement.parentElement.classList.add("move");
  });
};
let linksMobile = document.querySelectorAll(".nav__link--mobile");

linksMobile.forEach((element) => {
  element.onclick = moveMenu;
});

/*Configuraciones de la libreria typed */
const typed = new Typed(".typed", {
  strings: ["Ideas", "Diseños", "Fotos", "Logos"],
  /* stringsElement: "#cadenas-texto", // ID del elemento que contiene cadenas de texto a mostrar. */
  typeSpeed: 70, // Velocidad en mlisegundos para poner una letra,
  startDelay: 200, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  backSpeed: 70, // Velocidad en milisegundos para borrrar una letra,
  /* smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto. */
  shuffle: false, // Alterar el orden en el que escribe las palabras.
  backDelay: 1000, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: true, // Repetir el array de strings
  loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
  showCursor: true, // Mostrar cursor palpitanto
  cursorChar: "|", // Caracter para el cursor
  contentType: "null" // 'html' o 'null' para texto sin formato
});

//Boton para efecto blur
let btnBlur = document.getElementsByClassName("btn--blur")[0];
let cardsBlur = document.querySelectorAll(".project");
let contador = 0;

const blur = () => {
  if (contador % 2 == 0) {
    cardsBlur.forEach((element) => {
      element.style.filter = "blur(0)";
    });
    btnBlur.innerHTML = "Activar Difuminado";
  } else {
    cardsBlur.forEach((element) => {
      element.style.filter = "blur(3px)";
    });
    btnBlur.innerHTML = "Desactivar Difuminado";
  }
  contador++;
};
btnBlur.addEventListener("click", blur);

/* GrayScale*/
const grayScale = () => {
  let body = document.getElementsByTagName("body")[0];
  let element = document.createElement("div");
  element.classList.add("alert");
  element.innerHTML = `
    <div class="alert__content">
      <p class="alert__quest">¿Quisieras activar el modo Escala de grises?</p>
      <div class="alert__options">
        <span class="option option--y">Si</span>
        <span class="option option--n">No</span>
      </div>
    </div>
  `;
  body.appendChild(element);
};

grayScale();

const grayOptions = () => {
  let yes = document.getElementsByClassName("option")[0];
  let no = document.getElementsByClassName("option")[1];

  yes.onclick = () => {
    yes.parentElement.parentElement.parentElement.style.display = "none";
    document.getElementsByTagName("html")[0].style.filter = "grayscale(1)";
  };

  no.onclick = () => {
    no.parentElement.parentElement.parentElement.style.display = "none";
    document.getElementsByTagName("html")[0].style.filter = "grayscale(0)";
  };
};
grayOptions();
