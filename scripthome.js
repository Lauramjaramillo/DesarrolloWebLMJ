const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
const cardplace = document.getElementsByClassName('contenedorcard')
let carrito = {}



items.addEventListener('click', e => {btnAumentarDisminuir(e)})

let Inventario = [
    {
      name: "Camiseta Unisex negra",
      imgUrl:
        "https://jumbocolombiaio.vtexassets.com/arquivos/ids/213957/7701977052902-1.jpg?v=637814276505570000",
      price: 40000,
      ide: 1,
      bodega: 300,
    },
    {
      name: "Camiseta Unisex blanca",
      imgUrl:
        "https://http2.mlstatic.com/D_NQ_NP_2X_993681-MCO44821893392_022021-F.webp",
      price: 45000,
      ide: 2,
      bodega: 150,
    },
    {
      name: "Jean Mujer wide leg",
      imgUrl:
        "data:image/jpeg;base64,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",
      price: 90000,
      ide: 3,
      bodega: 200,
    },
    {
        name: "Jean Hombre regular fit",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb56I1hn9JQx60CZnMG9eDMpBCi5BQ_HOfxg&usqp=CAU",
        price: 150000,
        ide: 4,
        bodega: 70,
      },
      {
        name: "Tenis Hombre New Balance",
        imgUrl:
          "https://pilatos21.vtexassets.com/arquivos/ids/1216039/Tenis-Para-Hombre-574-New-Balance2233.jpg?v=638253949222970000",
        price: 550000,
        ide: 5,
        bodega: 50,
      },
      {
        name: "Tenis Mujer Nike Air",
        imgUrl:
          "https://falabella.scene7.com/is/image/FalabellaCO/122505529_1?wid=800&hei=800&qlt=70",
        price: 600000,
        ide: 6,
        bodega: 5,
      },
  ];

 

  let div_columna = document.createElement("div"); //Este es el div que va a agrupar los de abajo
  div_columna.className ="row" 
  div_columna.id ="cards";
  //document.body.appendChild(div_columna);
  document.getElementsByClassName('contenedorcard')[0].appendChild(div_columna);
  
  

  div_columna.addEventListener("click", e =>{
    addCarrito(e)
  });
  

  
  
  for (let i = 0; i < Inventario.length; i++) {
    let div_columna_2 = document.createElement("div");
    let divPadre = document.createElement("div");
    let cardBody = document.createElement("div"); //Este es el segundo div
    let titulo = document.createElement("h5");
    let precio = document.createElement("p");
    let disponible = document.createElement("h6");
    let img = document.createElement("img");
    let btn = document.createElement("button");
    


    


    div_columna.appendChild(div_columna_2);
    div_columna_2.appendChild(divPadre);
    div_columna_2.style.padding = "1rem";
    div_columna_2.className="col"
    divPadre.className = "card text-center h-100";
    divPadre.style.width = "15rem";
    divPadre.appendChild(img);
    divPadre.appendChild(cardBody);

    cardBody.className = "card-body";
    cardBody.appendChild(titulo);
    cardBody.appendChild(precio);
    cardBody.appendChild(disponible);
    cardBody.appendChild(btn);
    btn.id =Inventario[i].ide;

  
    titulo.innerHTML = Inventario[i].name;
    precio.innerHTML = Inventario[i].price;
    disponible.innerHTML = Inventario[i].bodega;
    img.src = Inventario[i].imgUrl;
    btn.innerText ="Agregar al carrito"
  
    img.className = "card-img-top h-100 w-100";
    titulo.className = "card-title";
    precio.className ="card text";
    btn.className ="btn btn-dark btn-sm";
    disponible.hidden = true;
  
   
  }

  // Agregar al carrito
const addCarrito = e => {
  if (e.target.classList.contains('btn-dark')) {
    setCarrito(e.target.parentElement)
    
  }
  e.stopPropagation()
}

const setCarrito = item => {
  //console.log(item)
  const producto = {
      title: item.querySelector('h5').textContent,
      precio: item.querySelector('p').textContent,
      id: item.querySelector('button').id,
      cantidad: 1,
      disponible : item.querySelector('h6').textContent-1,
  }
  // console.log(producto)
  if (carrito.hasOwnProperty(producto.id)) {
      producto.cantidad = carrito[producto.id].cantidad + 1
      producto.disponible = carrito[producto.id].disponible - 1
      }
  if(producto.disponible < 0){
    alert("No puedes ingresar mas al carrito")
    producto.cantidad--
    producto.disponible =0
  }
  else{
    carrito[producto.id] = {...producto}
  }
  
  pintarCarrito()
}


const pintarCarrito = () => {
  items.innerHTML = ''

  Object.values(carrito).forEach(producto => {
      templateCarrito.querySelector('th').textContent = producto.id
      templateCarrito.querySelectorAll('td')[0].textContent = producto.title
      templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
      templateCarrito.querySelectorAll('td')[2].textContent = producto.disponible
      templateCarrito.querySelector('span').textContent = producto.precio * producto.cantidad
      
      //botones
      templateCarrito.querySelector('.btn-info').id = producto.id
      templateCarrito.querySelector('.btn-danger').id = producto.id

      const clone = templateCarrito.cloneNode(true)
      fragment.appendChild(clone)
  })
  items.appendChild(fragment)

  pintarFooter()

 
}

const pintarFooter = () => {
  footer.innerHTML = ''
  
  if (Object.keys(carrito).length === 0) {
      footer.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`
      return
  }
  
  // sumar cantidad y sumar totales
  const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
  const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)
  // console.log(nPrecio)

  templateFooter.querySelectorAll('td')[0].textContent = nCantidad
  templateFooter.querySelector('span').textContent = nPrecio

  const clone = templateFooter.cloneNode(true)
  fragment.appendChild(clone)

  footer.appendChild(fragment)

  const botonf = document.querySelector('#finalizar-compra')
  botonf.addEventListener('click', () => {
      alert("Se va a finalizar la compra")
      
  })

  const boton = document.querySelector('#vaciar-carrito')
  boton.addEventListener('click', () => {
      carrito = {}
      pintarCarrito()
  })

}

const btnAumentarDisminuir = e => {   
  if (e.target.classList.contains('btn-info')) {
      const producto = carrito[e.target.id]
      producto.cantidad++
      producto.disponible--
      if(producto.disponible < 0){
        alert("No puedes ingresar mas al carrito")
        producto.cantidad--
        producto.disponible =0
      }
      else{
      carrito[e.target.id] = { ...producto }
      }
      pintarCarrito()
  }

  if (e.target.classList.contains('btn-danger')) {
      const producto = carrito[e.target.id]
      producto.cantidad--
      producto.disponible++
      if (producto.cantidad === 0) {
          delete carrito[e.target.id]
      } else {
          carrito[e.target.id] = {...producto}
      }
      pintarCarrito()
  }
  e.stopPropagation()
}