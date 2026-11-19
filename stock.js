// STOCK DE RE CHULA
// Para cada prenda: código, nombre, categoría, precio de lista, talles disponibles,
// nuevo (true = aparece en "Nuevos ingresos"), agotado (true = no se muestra), foto (archivo de imagen, opcional)
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
    descripcion: "Body de morley con escote en V, manga corta y broche abajo. Un básico que combina con todo." }
];
