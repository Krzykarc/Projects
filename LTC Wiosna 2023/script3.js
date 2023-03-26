// rekomendacja mobile ----------------------------------------------------
const rekomendacjeMob = document.querySelectorAll(
  ".rekomendacje-mobilne__avatar"
);
const rekomendacjeOpisMob = document.querySelectorAll(
  ".rekomendacje-mobilne__opis"
);
var counterRekomendacjaMob = 0;
const nextRekomendacjaMob = document.querySelector(".avatary__btn--next");
const previousRekomendacjaMob = document.querySelector(
  ".avatary__btn--previous"
);
nextRekomendacjaMob.addEventListener("click", function () {
  rekomendacjeMob[counterRekomendacjaMob].classList.remove("active");
  rekomendacjeOpisMob[counterRekomendacjaMob].classList.remove("active");
  if (counterRekomendacjaMob < rekomendacjeMob.length - 1) {
    counterRekomendacjaMob++;
  } else {
    counterRekomendacjaMob = 0;
  }
  rekomendacjeMob[counterRekomendacjaMob].classList.add("active");
  rekomendacjeOpisMob[counterRekomendacjaMob].classList.add("active");
});
previousRekomendacjaMob.addEventListener("click", function () {
  rekomendacjeMob[counterRekomendacjaMob].classList.remove("active");
  rekomendacjeOpisMob[counterRekomendacjaMob].classList.remove("active");
  if (counterRekomendacjaMob > 0) {
    counterRekomendacjaMob--;
  } else {
    counterRekomendacjaMob = rekomendacjeMob.length - 1;
  }
  rekomendacjeMob[counterRekomendacjaMob].classList.add("active");
  rekomendacjeOpisMob[counterRekomendacjaMob].classList.add("active");
});
// rekomendacje ----------------------------------------------------------
const rekomendacje = document.querySelectorAll(".rekomendacje__rekomendacja");
const rekomendacjeNext = document.querySelector(".rekomendacje__next");
const rekomendacjePrevious = document.querySelector(".rekomendacje__previous");
var rekomendacjaOrder;
var rekomendacjaTop;
var rekomendacjaLeft;
var rekomendacjaStyle;

rekomendacje.forEach(function (rekomendacja, i) {
  rekomendacja.addEventListener("click", function () {
    const rekomendacjaActive = document.querySelector(
      ".rekomendacje__rekomendacja.active"
    );
    rekomendacjaStyle = window.getComputedStyle(rekomendacja);
    rekomendacjaTop = rekomendacjaStyle.getPropertyValue("top");
    rekomendacjaLeft = rekomendacjaStyle.getPropertyValue("left");
    rekomendacjaActive.style.top = rekomendacjaTop;
    rekomendacjaActive.style.left = rekomendacjaLeft;
    rekomendacja.style.top = "170px";
    rekomendacja.style.left = "130px";
    var j = 0;
    do {
      rekomendacje[j].classList.remove("active");
      rekomendacjeOpisMob[j].classList.remove("active");
      rekomendacjeMob[j].classList.remove("active");
      j++;
    } while (j + 1 <= rekomendacje.length);

    rekomendacja.classList.add("active");
    counterRekomendacjaMob = i;
    rekomendacjeMob[counterRekomendacjaMob].classList.add("active");
    rekomendacjeOpisMob[counterRekomendacjaMob].classList.add("active");
  });

  rekomendacjePrevious.addEventListener("click", function () {
    rekomendacjaStyle = window.getComputedStyle(rekomendacja);
    rekomendacjaTop = rekomendacjaStyle.getPropertyValue("top");
    rekomendacjaLeft = rekomendacjaStyle.getPropertyValue("left");
    if (
      rekomendacjaTop == "12px" ||
      rekomendacjaTop == "104px" ||
      rekomendacjaTop == "196px"
    ) {
      rekomendacja.style.opacity = "1";
      rekomendacja.style.visibility = "visible";
      rekomendacja.style.pointerEvents = "visible";
    }
    if (rekomendacjaLeft == "12px") {
      if (rekomendacjaTop != "12px" && rekomendacjaTop == "104px") {
        rekomendacja.style.top = "12px";
        rekomendacja.style.opacity = "1";
        rekomendacja.style.visibility = "visible";
        rekomendacja.style.pointerEvents = "visible";
      }
      if (rekomendacjaTop != "104px" && rekomendacjaTop == "196px") {
        rekomendacja.style.top = "104px";
        rekomendacja.style.opacity = "1";
        rekomendacja.style.visibility = "visible";
        rekomendacja.style.pointerEvents = "visible";
      }
      if (rekomendacjaTop != "196px" && rekomendacjaTop == "288px") {
        rekomendacja.style.top = "196px";
        rekomendacja.style.opacity = "1";
        rekomendacja.style.visibility = "visible";
        rekomendacja.style.pointerEvents = "visible";
      }
      if (rekomendacjaTop != "288px" && rekomendacjaTop == "-80px") {
        rekomendacja.style.top = "288px";
        rekomendacja.style.opacity = "0";
        rekomendacja.style.visibility = "hidden";
        rekomendacja.style.pointerEvents = "none";
      }
      if (rekomendacjaTop != "-80px" && rekomendacjaTop == "12px") {
        rekomendacja.style.top = "-80px";
        rekomendacja.style.opacity = "0";
        rekomendacja.style.visibility = "hidden";
        rekomendacja.style.pointerEvents = "none";
      }
    }
  });

  rekomendacjeNext.addEventListener("click", function () {
    rekomendacjaStyle = window.getComputedStyle(rekomendacja);
    rekomendacjaTop = rekomendacjaStyle.getPropertyValue("top");
    rekomendacjaLeft = rekomendacjaStyle.getPropertyValue("left");
    if (
      rekomendacjaTop == "12px" ||
      rekomendacjaTop == "104px" ||
      rekomendacjaTop == "196px"
    ) {
      rekomendacja.style.opacity = "1";
      rekomendacja.style.visibility = "visible";
      rekomendacja.style.pointerEvents = "visible";
    }
    if (rekomendacjaLeft == "12px") {
      if (rekomendacjaTop != "12px" && rekomendacjaTop == "-80px") {
        rekomendacja.style.top = "12px";
        rekomendacja.style.opacity = "1";
        rekomendacja.style.visibility = "visible";
        rekomendacja.style.pointerEvents = "visible";
      }
      if (rekomendacjaTop != "104px" && rekomendacjaTop == "12px") {
        rekomendacja.style.top = "104px";
        rekomendacja.style.opacity = "1";
        rekomendacja.style.visibility = "visible";
        rekomendacja.style.pointerEvents = "visible";
      }
      if (rekomendacjaTop != "196px" && rekomendacjaTop == "104px") {
        rekomendacja.style.top = "196px";
        rekomendacja.style.opacity = "1";
        rekomendacja.style.visibility = "visible";
        rekomendacja.style.pointerEvents = "visible";
      }
      if (rekomendacjaTop != "288px" && rekomendacjaTop == "196px") {
        rekomendacja.style.top = "288px";
        rekomendacja.style.opacity = "0";
        rekomendacja.style.visibility = "hidden";
        rekomendacja.style.pointerEvents = "none";
      }
      if (rekomendacjaTop != "-80px" && rekomendacjaTop == "288px") {
        rekomendacja.style.top = "-80px";
        rekomendacja.style.opacity = "0";
        rekomendacja.style.visibility = "hidden";
        rekomendacja.style.pointerEvents = "none";
      }
    }
  });
});

// hamburger menu ---------------------------------------------------------
let menuBtn = document.querySelector(".sub-nav--menu");
let menuBox = document.querySelector(".main-nav__content");

// HOVER

menuBtn.addEventListener("mouseenter", function () {
  menuBtn.classList.add("active");
  menuBox.classList.add("active");
});

menuBox.addEventListener("mouseleave", function () {
  menuBtn.classList.remove("active");
  menuBox.classList.remove("active");
});

//smooth scrolling animation --------------------------------------------

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("nav-btn")) {
      mobileNav.classList.toggle("active");
      menuBtn.classList.toggle("active");
    }
    menuBox.classList.remove("active");
    menuBtn.classList.remove("active");
  });
});

//hidden buttons ---------------------------------------------------------
let backTopBtnHidden = document.getElementById("back-arrow");
let menuBtnHidden = document.getElementById("menu-btn");
window.onscroll = function hiddenBtn() {
  if (document.documentElement.scrollTop < 700) {
    backTopBtnHidden.style.opacity = "0";
    backTopBtnHidden.style.visibility = "hidden";
    backTopBtnHidden.style.pointerEvents = "none";
    menuBtnHidden.style.opacity = "0";
    menuBtnHidden.style.visibility = "hidden";
    menuBtnHidden.style.pointerEvents = "none";
    menuBox.classList.remove("active");
    menuBtn.classList.remove("active");
  } else {
    backTopBtnHidden.style.opacity = "1";
    backTopBtnHidden.style.visibility = "visible";
    backTopBtnHidden.style.pointerEvents = "auto";
    menuBtnHidden.style.opacity = "1";
    menuBtnHidden.style.visibility = "visible";
    menuBtnHidden.style.pointerEvents = "auto";
  }
  trenerScena.style.height = getHeight(trenerWysokosc[trenerNumber]) + "px";
};

//sub-nav ----------------------------------------------------------------
let darkBox = document.querySelector(".dark-box");
let darkBoxContent = document.querySelector(".dark-box__content");
let kontaktBox = document.querySelector(".dark-box__kontakt");
let faqBox = document.querySelector(".dark-box__faq");
let seeMoreFaq = document.querySelector(".sub-nav--faq");
let seeMoreKontakt = document.querySelector(".sub-nav--kontakt");

// GALERIA -------------------------------------------------------------
let seeMorePicture = document.querySelectorAll(".poprzednie-edycje__zdjecie");
let pictureBox = document.querySelector(".dark-box__picture");
let pictures = document.querySelectorAll(".pictures__picture");
const pictureBtns = document.querySelectorAll(".picture__btn");
let picturePrevious = document.getElementById("picture__previous");
let pictureNext = document.getElementById("picture__next");
let pictureAutor = document.querySelector(".pictures__autor");
seeMorePicture.forEach(function (picture, i) {
  picture.addEventListener("click", function () {
    pictureBox.classList.toggle("active");
    darkBox.classList.toggle("active");
    darkBoxContent.classList.toggle("active");
    pictureNumber = i;
    pictures[i].classList.add("active");
    if (
      pictureNumber == 1 ||
      pictureNumber == 4 ||
      pictureNumber == 17 ||
      pictureNumber == 18 ||
      pictureNumber == 22 ||
      pictureNumber == 23
    ) {
      pictureAutor.classList.add("active");
    } else {
      pictureAutor.classList.remove("active");
    }
  });
});

darkBox.addEventListener("click", function () {
  pictures[pictureNumber].classList.remove("active");
});

picturePrevious.addEventListener("click", function () {
  pictures[pictureNumber].classList.remove("active");
  pictureNumber--;
  if (pictureNumber == -1) {
    pictureNumber = 23;
  }
  pictures[pictureNumber].classList.add("active");
  if (
    pictureNumber == 1 ||
    pictureNumber == 4 ||
    pictureNumber == 17 ||
    pictureNumber == 18 ||
    pictureNumber == 22 ||
    pictureNumber == 23
  ) {
    pictureAutor.classList.add("active");
  } else {
    pictureAutor.classList.remove("active");
  }
});
pictureNext.addEventListener("click", function () {
  pictures[pictureNumber].classList.remove("active");
  pictureNumber++;
  if (pictureNumber == 24) {
    pictureNumber = 0;
  }
  pictures[pictureNumber].classList.add("active");
  if (
    pictureNumber == 1 ||
    pictureNumber == 4 ||
    pictureNumber == 17 ||
    pictureNumber == 18 ||
    pictureNumber == 22 ||
    pictureNumber == 23
  ) {
    pictureAutor.classList.add("active");
  } else {
    pictureAutor.classList.remove("active");
  }
});

//picture hidden buttons---------------
pictureBtns.forEach(function (btn) {
  pictureBox.addEventListener("mouseleave", function () {
    btn.classList.remove("active");
  });
  pictureBox.addEventListener("mouseenter", function () {
    btn.classList.add("active");
  });
});

// HOVER
seeMoreFaq.addEventListener("mouseleave", function () {
  seeMoreFaq.classList.remove("active");
});
seeMoreFaq.addEventListener("mouseenter", function () {
  seeMoreFaq.classList.add("active");
});
seeMoreKontakt.addEventListener("mouseleave", function () {
  seeMoreKontakt.classList.remove("active");
});
seeMoreKontakt.addEventListener("mouseenter", function () {
  seeMoreKontakt.classList.add("active");
});

const kontaktLogo = document.querySelector(".kontakt__logo");
const linkLogo = document.querySelector(".logo__link");
const hoverLogo = document.querySelector(".logo__hover");

kontaktLogo.addEventListener("mouseleave", function () {
  hoverLogo.classList.remove("active");
  linkLogo.classList.add("active");
});
kontaktLogo.addEventListener("mouseenter", function () {
  hoverLogo.classList.add("active");
  linkLogo.classList.remove("active");
});

// CLICK
seeMoreKontakt.addEventListener("click", function () {
  darkBox.classList.add("active");
  kontaktBox.classList.add("active");
});

seeMoreFaq.addEventListener("click", function () {
  darkBox.classList.add("active");
  faqBox.classList.add("active");
});

// DARK BOX - usuwanie ---------------------------------------------------------

darkBox.addEventListener("click", function () {
  darkBox.classList.remove("active");
  darkBoxContent.classList.remove("active");
  faqBox.classList.remove("active");
  kontaktBox.classList.remove("active");
  pictureBox.classList.remove("active");

  var j = 0;
  do {
    FAQ[j].classList.remove("active");
    answerFAQ[j].style.height = "0";
    j++;
  } while (j + 1 <= FAQ.length);
});

// TRENERZY -----------------------------------

// Pobieranie transform
function getTranslateXY(element) {
  const style = window.getComputedStyle(element);
  const matrix = new DOMMatrixReadOnly(style.transform);
  return {
    translateX: matrix.m41,
    translateY: matrix.m42,
  };
}
function getHeight(element) {
  const style = window.getComputedStyle(element);
  height = style.height;
  height = parseInt(height.replace(/px/, ""));
  return height;
}
const trenerPozycja = document.querySelector(".scena__trenerzy");
const trenerzy = document.querySelectorAll(".carousel__trener");
var displayNumber = 1;
var trenerNumber = 0;
var trenerPozycjaHeight;
let trenerScena = document.querySelector(".trenerzy__scena");
let trenerWysokosc = document.querySelectorAll(".carousel__trener");

var nextButton = document.querySelector(".next-button");
nextButton.addEventListener("click", function () {
  var j = 0;
  do {
    trenerzy[j].classList.remove("active");
    j++;
  } while (j + 1 <= trenerzy.length);
  displayNumber++;
  trenerNumber++;

  if (displayNumber > 12) {
    displayNumber = 1;
    trenerNumber = 0;
  }
  document.getElementById("carousel__nr").innerHTML = displayNumber + "/12";

  let trenerWysokosc = document.querySelectorAll(".carousel__trener");
  trenerPozycjaTransform = getTranslateXY(trenerPozycja).translateY;
  trenerScena = document.querySelector(".trenerzy__scena");
  if (trenerNumber < 0) {
    trenerPozycjaHeight = getHeight(trenerzy[trenerNumber - 1]);
  } else {
    trenerPozycjaHeight = getHeight(trenerScena);
  }
  trenerPozycjaTransform = trenerPozycjaTransform - trenerPozycjaHeight;

  if (displayNumber == 1) {
    trenerPozycja.style.transform = "translateY(0px)";
    console.log(trenerzy[trenerNumber]);
  } else {
    trenerPozycja.style.transform =
      "translateY(" + trenerPozycjaTransform + "px)";
    console.log(trenerzy[trenerNumber]);
  }
  trenerzy[trenerNumber].classList.add("active");
  trenerScena = document.querySelector(".trenerzy__scena");
  trenerScena.style.height = getHeight(trenerWysokosc[trenerNumber]) + "px";
});

var prevButton = document.querySelector(".previous-button");
prevButton.addEventListener("click", function () {
  var j = 0;
  do {
    trenerzy[j].classList.remove("active");
    j++;
  } while (j + 1 <= trenerzy.length);

  displayNumber--;
  trenerNumber--;
  if (displayNumber < 1) {
    displayNumber = 12;
    trenerNumber = 11;
  }
  document.getElementById("carousel__nr").innerHTML = displayNumber + "/12";

  let trenerWysokosc = document.querySelectorAll(".carousel__trener");
  trenerPozycjaTransform = getTranslateXY(trenerPozycja).translateY;
  trenerScena = document.querySelector(".trenerzy__scena");
  trenerPozycjaHeight = getHeight(trenerzy[trenerNumber - 1]);
  trenerPozycjaTransform = trenerPozycjaTransform + trenerPozycjaHeight;

  if (displayNumber == 12) {
    trenerPozycja.style.transform = "translateY(0px)";
  } else {
    trenerPozycja.style.transform =
      "translateY(" + trenerPozycjaTransform + "px)";
  }

  trenerzy[trenerNumber].classList.add("active");
  trenerScena = document.querySelector(".trenerzy__scena");
  trenerScena.style.height = getHeight(trenerWysokosc[trenerNumber]) + "px";
});

// FAQ ----------------------------------------------------------------------------
var answerFAQStyle;
var answerFAQHeight;
const FAQ = document.querySelectorAll(".faq-box");
const answerFAQ = document.querySelectorAll(".faq-box__answer");
const answerFAQText = document.querySelectorAll(".faq-box__answer p");
FAQ.forEach(function (FAQel, i) {
  FAQel.addEventListener("click", function () {
    const activeFAQ = document.querySelector(".faq-box.active");

    var j = 0;
    do {
      answerFAQ[j].style.height = "0";
      FAQ[j].classList.remove("active");
      j++;
    } while (j + 1 <= FAQ.length);

    answerFAQStyle = window.getComputedStyle(answerFAQText[i]);
    answerFAQHeight = answerFAQStyle.getPropertyValue("height");
    answerFAQ[i].style.height = answerFAQHeight;
    FAQel.classList.add("active");

    if (activeFAQ == FAQel) {
      answerFAQ[i].style.height = "0";
      activeFAQ.classList.remove("active");
    }
  });
});
const FAQbtn = document.querySelector(".kontakt__decsription>.anchor-btn");
FAQbtn.addEventListener("click", function () {
  kontaktBox.classList.remove("active");
  faqBox.classList.add("active");
});
