const kirinSection = document.querySelector(".klany__klan--kirin");
const kitsuneSection = document.querySelector(".klany__klan--kitsune");
const loongSection = document.querySelector(".klany__klan--loong");
const wukongSection = document.querySelector(".klany__klan--wukong");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting) {
      // if (ent.intersectionRatio > 0.4) {
      console.log(ent);
      ent.target.classList.remove("not-active");
    }
  },
  {
    root: null,
    threshold: 0.4,
  }
);
obs.observe(kirinSection);
obs.observe(kitsuneSection);
obs.observe(loongSection);
obs.observe(wukongSection);
