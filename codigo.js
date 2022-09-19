const lista= document.getElementById("lista");
const productos=[
        {id:1, titulo:"Arroz", Precio:2000},
        {id:2, titulo:"Frijoles", Precio:2800 },
        {id:3, titulo:"Pan", Precio:3000 },
        {id:4, titulo:"Leche", Precio:4500 },
        {id:5, titulo:"Cereal", Precio:7000 }
    ]
    for (producto of productos){
        let contenedor = document.createElement("div")
        contenedor.innerHTML =  `<h3>${producto.titulo}</h3>
        <p>Precio: ${producto.Precio}</p>
        `;
        document.body.appendChild(contenedor);
    }
    const texto = document.querySelector("h2").textContent="Lista del Mercado";
console.log(texto)