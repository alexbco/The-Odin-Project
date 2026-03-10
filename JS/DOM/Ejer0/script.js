const p = document.createElement("p");
p.style.color = "red";
p.textContent = "¡Hola, soy rojo!";

const h3 = document.createElement("h3");
h3.textContent = "¡Soy un h3 azul!";
h3.style.color = "blue";

const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";

div.appendChild(p);
div.appendChild(h3);

const body = document.querySelector("body");
body.appendChild(div);

const btn = document.querySelector(".b");

btn.addEventListener("click", function (e) {
    console.log(  e.target.style.background = "blue");
});

div.addEventListener("click", () => alert("KLKK"));