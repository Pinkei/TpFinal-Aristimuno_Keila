const productos =[
 {
    id: 1,
          name: "BORDE BALLENA 40x40",
          precio: 1350,
          role: "Borde para las pileta de fibra",
          img:"/img/bordeballena40x40.png"
},
{
    id: 2,
          name: "BORDE L",
          precio: 1400,
          role: "Bordes para las piletas de cemento",
          img:"/img/bordeL.png"
},
{
    id: 3,
    name: "ESQUINERO BORDE L",
    precio: 1550,
    role: "Esquienros para pileta de cemento",
    img:"/img/esquinerobordeL.png"
  },
  {
    id: 4,
    name: "CONTRACURVA",
    precio: 1350,
    role: "Esquineros para pileta con arco romano",
    img: "/img/contacurvo.png"
  },
  {
    id: 5,
    name: "BORDE BALLENA 40x60",
    precio: 1350,
    role: "Para una vereda de 60cm",
    img: "/img/bordeballena40x60.png"
  },
  {
    id: 6,
    name: "SOLARIUM",
    precio: 1220,
    role: "Para los arco romanos",
    img: "/img/solarium40x40.png"
  },
  {
    id: 7,
    name: "BORDE BALLENA 40X20",
    precio: 1020,
    role: "Para una vereda de 20cm",
    img: "./img/bordeballena40x20.png"
  }
  
]
let listaProductos = document.getElementById("lista-productos");

for(const dato of productos){
let div = document.createElement("div")

/* --------------------------ARREGLAR LO DE LOS BR ACA____________________________________________________________ */
div.innerHTML = `<img src="${dato.img}" ><br>
${dato.name}<br>
${dato.precio}<br>
${dato.role}
`
listaProductos.appendChild(div)
}



