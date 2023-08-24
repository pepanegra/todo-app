const d = document;
const tares = d.querySelector(".tt");
const añadir = d.querySelector(".button");
const aside = d.querySelector("aside");
const tt = d.querySelector(".pendientes");
const btn = d.querySelector(".btn");
const nombre = d.querySelector("#name");
const descripcion = d.querySelector("#descripcion");
let id = 1;

añadir.addEventListener("click", () => {
  aside.classList.toggle("abrir");
});

function agregartarea() {
  const div = d.createElement("div");
  div.id = id;
  id++;
  div.className = "dunk";

  const h3 = d.createElement("h3");
  h3.textContent = nombre.value;
  h3.className = "nb";

  const div2 = d.createElement("div");
  div2.className = "d";
  const p = d.createElement("p");
  p.className = "nb";
  p.textContent = descripcion.value;

  const eliminar = d.createElement("button");
  eliminar.className = "eliminar";
  const img = d.createElement("img");
  img.setAttribute("src", "basura.png");

  function eliminarTarea() {
    
  }

  if (nombre.value !== "" && descripcion !== "") {
    tt.append(div);
    div.append(h3);
    div.append(div2);
    div2.append(p);
    div.append(eliminar);
    eliminar.append(img);

    descripcion.value = "";
    nombre.value = "";
    aside.classList.toggle("abrir");
  } else {
    return aside.classList.toggle("abrir");
  }
}

btn.addEventListener("click", () => {
  agregartarea();
  eliminarTarea();
});
