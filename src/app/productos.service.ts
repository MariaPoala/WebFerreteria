import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productos = [
    {
      id: 1,
      nombre: "Martillo de acero",
      categoria_id: 1,
      descripcion: "Martillo de acero forjado, ideal para trabajos de construcción.",
      precio: 15.99,
      imagen: "https://promart.vteximg.com.br/arquivos/ids/602463-1000-1000/126043.jpg?v=637425304061430000",
      detalles: [
        "Material: Acero forjado",
        "Peso: 500g",
        "Mango antideslizante"
      ]
    },
    {
      id: 2,
      nombre: "Destornillador Philips",
      categoria_id: 1,
      descripcion: "Destornillador de precisión tipo Philips, mango ergonómico.",
      precio: 5.50,
      imagen: "https://www.promelsa.com.pe/media/catalog/product/cache/beccbd461ac94891fe746718d2496617/1/0/1032975-01_1.jpg",
      detalles: [
        "Tipo: Philips",
        "Tamaño: Mediano",
        "Mango ergonómico"
      ]
    },
    {
      id: 3,
      nombre: "Llave inglesa",
      categoria_id: 1,
      descripcion: "Llave inglesa ajustable de alta resistencia.",
      precio: 12.00,
      imagen: "https://promart.vteximg.com.br/arquivos/ids/4221490-1000-1000/image-657e9d9dd0ca476c829afeae0b46541f.jpg?v=637796006221200000",
      detalles: [
        "Material: Acero",
        "Ajustable: Sí",
        "Peso: 300g"
      ]
    },
    {
      id: 4,
      nombre: "Taladro eléctrico 500W",
      categoria_id: 2,
      descripcion: "Taladro potente de 500W, ideal para trabajos de perforación.",
      precio: 55.00,
      imagen: "https://speru.online/wp-content/uploads/2021/10/d3c6cb72ebac77a18df65031b841576b1a642815.jpg",
      detalles: [
        "Potencia: 500W",
        "Velocidad: 1500 rpm",
        "Incluye brocas"
      ]
    },
    {
      id: 5,
      nombre: "Amoladora angular",
      categoria_id: 2,
      descripcion: "Amoladora angular de alta velocidad para corte y pulido.",
      precio: 45.00,
      imagen: "https://cahema.pe/74255-large_default/amoladora-angular-4-12-750w-12000-rpm-stanley-sg7115-b2.jpg",
      detalles: [
        "Diámetro de disco: 115mm",
        "Potencia: 700W",
        "Velocidad: 11000 rpm"
      ]
    },
    {
      id: 6,
      nombre: "Cemento 50kg",
      categoria_id: 3,
      descripcion: "Saco de cemento de 50 kg para construcción.",
      precio: 8.50,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_997856-MLU75028399216_032024-O.webp",
      detalles: [
        "Peso: 50kg",
        "Uso: Construcción",
        "Resistencia: Alta"
      ]
    },
    {
      id: 7,
      nombre: "Arena de construcción",
      categoria_id: 3,
      descripcion: "Arena de alta calidad para uso en construcción.",
      precio: 3.00,
      imagen: "https://materialeselarenal.io/wp-content/uploads/2024/07/1000060635.jpg",
      detalles: [
        "Peso: 1m³",
        "Libre de impurezas",
        "Uso: Construcción"
      ]
    },
    {
      id: 8,
      nombre: "Ladrillos cerámicos",
      categoria_id: 3,
      descripcion: "Ladrillos cerámicos resistentes para construcción.",
      precio: 0.30,
      imagen: "https://lh6.googleusercontent.com/proxy/-EBFV5Wbnsa4B6o7J-neTBt4gwr2_k1E-akaW3ZL3FkXq9QloAQ5NOfTNeRvlpxhf7uwOYKwvKB_EnvAwhPrNboW9qFSpdXuRURWTEbY6hgc99YQbTlnWVurvP_q",
      detalles: [
        "Material: Cerámico",
        "Dimensiones: 20x10x6 cm",
        "Resistencia: Alta"
      ]
    },
    {
      id: 9,
      nombre: "Pintura acrílica blanca 1L",
      categoria_id: 4,
      descripcion: "Pintura acrílica blanca de secado rápido.",
      precio: 6.50,
      imagen: "https://mercantiles.com.ec/cdn/shop/files/PINTACRILICA1000ML_BLANCO.jpg?v=1697890607&width=1000",
      detalles: [
        "Color: Blanco",
        "Contenido: 1L",
        "Secado rápido"
      ]
    },
    {
      id: 10,
      nombre: "Rodillo para pintura",
      categoria_id: 4,
      descripcion: "Rodillo de pintura con mango ergonómico.",
      precio: 4.00,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCaU5A71yulInSKZcjqDHJ7jv1qLMDLjhVg&s",
      detalles: [
        "Material: Microfibra",
        "Tamaño: Mediano",
        "Mango ergonómico"
      ]
    },
    {
      id: 11,
      nombre: "Cable eléctrico 2m",
      categoria_id: 5,
      descripcion: "Cable eléctrico de 2 metros, ideal para conexiones caseras.",
      precio: 2.00,
      imagen: "https://ferreteria.com.pe/wp-content/uploads/2023/10/Cable-CTM-Mellizo-2-por-12-de-2m-de-300-a-500V.jpg",
      detalles: [
        "Longitud: 2m",
        "Voltaje: 220V",
        "Uso: Doméstico"
      ]
    },
    {
      id: 12,
      nombre: "Interruptor de luz",
      categoria_id: 5,
      descripcion: "Interruptor de luz de alta calidad.",
      precio: 3.20,
      imagen: "https://promart.vteximg.com.br/arquivos/ids/537908-1000-1000/120420.jpg?v=637359695339370000",
      detalles: [
        "Material: Plástico",
        "Tipo: Unipolar",
        "Instalación: Empotrable"
      ]
    },
    {
      id: 13,
      nombre: "Grifo de lavabo",
      categoria_id: 6,
      descripcion: "Grifo de alta calidad para lavabo, fácil instalación.",
      precio: 18.00,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmyj39XZgX3XeEzKzFZseTh0qM7MnsSDQeIw&s",
      detalles: [
        "Material: Acero inoxidable",
        "Instalación: Fácil",
        "Uso: Lavabo"
      ]
    },
    {
      id: 14,
      nombre: "Tubería PVC 3m",
      categoria_id: 6,
      descripcion: "Tubería de PVC de 3 metros, ideal para drenaje.",
      precio: 7.00,
      imagen: "https://promart.vteximg.com.br/arquivos/ids/748190-1000-1000/124320.jpg?v=637490034763270000",
      detalles: [
        "Longitud: 3m",
        "Diámetro: 4 pulgadas",
        "Material: PVC"
      ]
    },
    {
      id: 15,
      nombre: "Cerradura de seguridad",
      categoria_id: 7,
      descripcion: "Cerradura de seguridad para puertas exteriores.",
      precio: 25.00,
      imagen: "https://carpintec.com.pe/cdn/shop/files/Cerradura_de_seguridad_LLave_LLave_Eurolock_888x700.jpg?v=1727902895",
      detalles: [
        "Material: Acero",
        "Tipo: Seguridad",
        "Uso: Exteriores"
      ]
    },
    {
      id: 16,
      nombre: "Bisagra para puerta",
      categoria_id: 7,
      descripcion: "Bisagra resistente para puertas de madera.",
      precio: 2.50,
      imagen: "https://promart.vteximg.com.br/arquivos/ids/7271112-1000-1000/140408.jpg?v=638240187558370000",
      detalles: [
        "Material: Acero",
        "Tipo: Resistente",
        "Uso: Puertas de madera"
      ]
    },
    {
      id: 17,
      nombre: "Aspiradora industrial",
      categoria_id: 8,
      descripcion: "Aspiradora industrial de gran capacidad para limpieza.",
      precio: 120.00,
      imagen: "https://dojiw2m9tvv09.cloudfront.net/79550/product/aspiradora-industrial-polvo-y-agua-dca-2300w-60l-avc60-600x6008785.jpg",
      detalles: [
        "Capacidad: 10L",
        "Potencia: 1200W",
        "Uso: Industrial"
      ]
    },
    {
      id: 18,
      nombre: "Manguera de jardín 10m",
      categoria_id: 8,
      descripcion: "Manguera resistente para riego de jardines.",
      precio: 15.00,
      imagen: "https://promart.vteximg.com.br/arquivos/ids/7413391-1000-1000/150656.jpg?v=638272131915430000",
      detalles: [
        "Longitud: 10m",
        "Material: PVC",
        "Uso: Jardinería"
      ]
    },
    {
      id: 19,
      nombre: "Cinta métrica 5m",
      categoria_id: 9,
      descripcion: "Cinta métrica de 5 metros para mediciones precisas.",
      precio: 3.50,
      imagen: "https://tiendaonline.soltrak.com.pe/media/catalog/product/c/i/cinta_30-615_1.png",
      detalles: [
        "Longitud: 5m",
        "Material: Acero",
        "Alta precisión"
      ]
    },
    {
      id: 20,
      nombre: "Nivel de burbuja 60cm",
      categoria_id: 9,
      descripcion: "Nivel de burbuja de 60 cm para trabajos de construcción.",
      precio: 6.00,
      imagen: "https://promart.vteximg.com.br/arquivos/ids/5188085-1000-1000/139882.jpg?v=637844248662430000",
      detalles: [
        "Longitud: 60cm",
        "Alta precisión",
        "Resistente a golpes"
      ]
    }
  ];
  
  
  constructor() { }

  getProductos() {
    return this.productos;
  }
}
