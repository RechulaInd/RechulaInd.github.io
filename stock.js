// STOCK DE RE CHULA
// Para cada prenda: código, nombre, categoría, precio de lista, talles disponibles,
// nuevo (true = aparece en "Nuevos ingresos"), agotado / oculto (true = no se muestra), foto (archivo de imagen, opcional)
window.CONFIG = {
  descuento: 15,          // % de descuento en efectivo o transferencia
  redondeo: 0,            // 0 = sin redondeo (el precio con descuento queda exacto)
  whatsapp: "5493813341164",         // número con código de país, sin + ni espacios. Ej: 5493511234567
  tiktok: "rechula.ind"
};

window.STOCK = [
  { codigo: "RC029", nombre: "Blusa Helecho", categoria: "Blusas", precio: 42000, talles: ["L"], nuevo: true, foto: "RC029.jpg",
    descripcion: "Blusa liviana con bordado de hojas en relieve, escote en V, botones de presilla y puños anchos." },
  { codigo: "RC030", nombre: "Top Pantera", categoria: "Tops", precio: 20000, talles: ["Único"], nuevo: true, foto: "RC030.jpg",
    variantes: ["Leopardo clásico", "Leopardo tostado"],
    descripcion: "Top escote en V profundo con puntilla de encaje negro. Elegí entre dos estampas: leopardo clásico (izquierda) o leopardo tostado (derecha)." },
  { codigo: "RC031", nombre: "Conjunto Margarita", categoria: "Conjuntos", precio: 67500, talles: ["M"], nuevo: true, foto: "RC031.jpg",
    descripcion: "Conjunto de dos piezas en bordado calado de flores color beige: chaleco con botones y short al tono." },
  { codigo: "RC032", nombre: "Pantalón Caramelo", categoria: "Pantalones", precio: 33500, talles: ["XL"], nuevo: true, foto: "RC032-033.jpg",
    descripcion: "Pantalón ancho color caramelo (el de atrás en la foto) con bordados blancos y guarda étnica en la botamanga. Cintura con elástico atrás, botón y bolsillos." },
  { codigo: "RC033", nombre: "Pantalón Oliva", categoria: "Pantalones", precio: 33500, talles: ["XXL"], nuevo: true, foto: "RC032-033.jpg",
    descripcion: "Pantalón ancho verde oliva (el de adelante en la foto) con bordados blancos y guarda étnica en la botamanga. Cintura con elástico atrás, botón y bolsillos." },
  { codigo: "RC034", nombre: "Camisola Duna", categoria: "Blusas", precio: 13500, talles: ["L"], nuevo: true, foto: "RC034.jpg",
    descripcion: "Camisola de lino color nude con escote en V, frunce en la cintura y mangas amplias con vuelo." },
  { codigo: "RC035", nombre: "Conjunto Canela", categoria: "Conjuntos", precio: 66000, talles: ["M"], nuevo: true, foto: "RC035.jpg",
    descripcion: "Conjunto de dos piezas color camel: top corset de breteles finos con botones y pantalón ancho con cintura elastizada." },
  { codigo: "RC036", nombre: "Vestido Rosa Mosqueta", categoria: "Vestidos", precio: 39000, talles: ["L"], nuevo: true, foto: "RC036.jpg",
    descripcion: "Vestido camisero midi rosa con cuello, botones dorados, bolsillos al frente, cintura con lazo ajustable y volado en el ruedo." },
  { codigo: "RC037", nombre: "Body Esencial", categoria: "Bodys", precio: 15800, talles: ["M/L"], nuevo: true, foto: "RC037.jpg",
    variantes: ["Negro", "Celeste", "Chocolate"],
    descripcion: "Body de morley con escote en V, manga corta y broche abajo. Un básico que combina con todo." },
  { codigo: "RC038", nombre: "Blusa Azahar", categoria: "Blusas", precio: 39000, talles: ["L"], nuevo: true, foto: "RC038.jpg",
    descripcion: "Blusa sin mangas blanca con bordado de flores en relieve, cuello mao y botones de presilla con perlas." },
  { codigo: "RC039", nombre: "Musculosa Brisa", categoria: "Tops", precio: 16000, talles: [], nuevo: true, foto: "RC039.jpg", oculto: true,
    variantes: ["Topo", "Celeste", "Chocolate"],
    descripcion: "Musculosa de morley con escote redondo y push up incluido. Cómoda, ajustada y lista para usar sola o debajo de un blazer." },
  { codigo: "RC040", nombre: "Blusa Camelia", categoria: "Blusas", precio: 39500, talles: ["L"], nuevo: true, foto: "RC040-chocolate.jpg",
    variantes: ["Chocolate", "Crudo"],
    fotosVariante: { "Chocolate": "RC040-chocolate.jpg", "Crudo": "RC040-crudo.jpg" },
    descripcion: "Blusa de manga larga en tela texturizada, con gran cuello volado, cascada de volados al frente y lazo para atar." },
  { codigo: "RC041", nombre: "Camisaco Roca", categoria: "Camisacos", precio: 52000, talles: ["1/2"], nuevo: true, foto: "RC041.jpg",
    variantes: ["Beige", "Blanco"],
    descripcion: "Camisaco oversize con tachas plateadas en los bolsillos, botones metálicos y bordes desflecados. Ideal para usar abierto como abrigo liviano." },
  { codigo: "RC042", nombre: "Blusa Victoria", categoria: "Blusas", precio: 47000, talles: ["Único"], nuevo: true, foto: "RC042.jpg",
    variantes: ["Chocolate", "Blanco"],
    descripcion: "Blusa romántica con volados en el escote y al frente, puntillas caladas, alforzas, mangas abullonadas con volado y peplum en la cintura." },
  { codigo: "RC043", nombre: "Top Luna", categoria: "Tops", precio: 23000, talles: [], nuevo: true, foto: "RC043.jpg", oculto: true,
    descripcion: "Top halter color crudo en tela satinada, con cuello volcado y lazo para atar en la nuca." }
];
