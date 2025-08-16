const overlay = document.querySelector(".backdrop-filter");
const item = document.querySelectorAll(".item");
const exitOverlay = document.querySelector(".leave");

const vrstaMotora = document.querySelector(".vrsta-motora");
const snaga = document.querySelector(".snaga");
const mjenjac = document.querySelector(".mjenjac");
const pogon = document.querySelector(".pogon");
const ubrzanje = document.querySelector(".ubrzanje");
const maxSpeed = document.querySelector(".max-brzina");
const duljina = document.querySelector(".duljina");
const sirina = document.querySelector(".sirina");
const visina = document.querySelector(".visina");
const masa = document.querySelector(".masa");
const imeVozila = document.querySelector(".ime-vozila");
const slika = document.querySelector(".img-handler img");

console.log(imeVozila);
const automobili = [
  {
    ime: "iX",
    vrsta_motora: "Elektricni",
    snaga: "400(544)",
    mjenjac: "1-stupanjski, automatski",
    pogon: "Pogon na sve kotace",
    ubrzanje: "4,6 s",
    najveca_brzina: "200 KM/h",
    duljina: "4,965 mm",
    sirina: "1,970 mm",
    visina: "1,695 mm",
    masa: "2,580 kg",
    img: "https://www.bmw.com.my/en/topics/discover/magazine/updates-for-bmw-ix/_jcr_content/root/maincontent/contentblueprint/contentblueprint/carousel/item_1685367360001/contentblueprint/image.coreimg.png/1748863772582/update-on-ix.png",
  },
  {
    ime: "M8",
    vrsta_motora: "Benzinski,V8",
    snaga: "460(625)",
    mjenjac: "8-stupanjski, automatski",
    pogon: "xDrive (AWD)",
    ubrzanje: "3,2 s",
    najveca_brzina: "250 KM/h",
    duljina: "4.867 mm",
    sirina: "1.907 mm",
    visina: "1.362 mm",
    masa: "1.975 kg",
    img: "M8PNG.png",
  },
  {
    ime: "iX2",
    vrsta_motora: "Elektricni",
    snaga: "230(313)",
    mjenjac: "1-stupanjski, automatski",
    pogon: "Pogon na sve kotace",
    ubrzanje: "5,6 s",
    najveca_brzina: "180 KM/h",
    duljina: "4.554 mm",
    sirina: "1.845 mm",
    visina: "1.560 mm",
    masa: "2.095 kg",
    img: "https://www.piston.my/wp-content/uploads/2024/04/PISTON.MY-First-Ever-BMW-iX2-xDrive30_3.png",
  },
];

item.forEach((element) => {
  const nameOfCar = element.querySelector(".model");
  element.addEventListener("click", () => {
    console.log(nameOfCar.textContent);
    for (let i = 0; i < automobili.length; i++) {
      const vehName = automobili[i].ime;

      if (vehName === nameOfCar.textContent) {
        vrstaMotora.textContent = automobili[i].vrsta_motora;
        snaga.textContent = automobili[i].snaga;
        mjenjac.textContent = automobili[i].mjenjac;
        pogon.textContent = automobili[i].pogon;
        ubrzanje.textContent = automobili[i].ubrzanje;
        maxSpeed.textContent = automobili[i].najveca_brzina;
        duljina.textContent = automobili[i].duljina;
        sirina.textContent = automobili[i].sirina;
        visina.textContent = automobili[i].visina;
        masa.textContent = automobili[i].masa;
        imeVozila.textContent = automobili[i].ime;
        slika.src = automobili[i].img;
      } else {
        continue;
      }
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.body.style.overflow = "hidden";
    overlay.classList.remove("hide");
  });
});
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.add("hide");
    document.body.style.overflow = "";
  }
});
exitOverlay.addEventListener("click", () => {
  overlay.classList.add("hide");
  document.body.style.overflow = "";
});
