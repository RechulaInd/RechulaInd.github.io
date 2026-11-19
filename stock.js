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
    descripcion: "Top escote en V profundo con puntilla de encaje negro. Elegí entre dos estampas: leopardo clásico (izquierda) o leopardo tostado (derecha)." }
];
