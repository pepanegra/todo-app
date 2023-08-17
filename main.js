const d = document;
const tares = d.querySelector(".tt");
const añadir = d.querySelector(".button");
const aside = d.querySelector("aside");
const tt = d.querySelector(".tt");
const btn = d.querySelector(".btn");
const namep = d.querySelector(".name");

añadir.addEventListener("click", () => {
  aside.classList.toggle("abrir");
});

btn.addEventListener("click", () => {
  //   aside.classList.toggle("abrir");
  //   //   const div = d.createElement("div");
  //   //   div.className = "dunk";
  //   //   const p = d.createElement("p");
  //   //   p.textContent("hola");
  //   //   tt.append(p);
  console.log(1);
});
