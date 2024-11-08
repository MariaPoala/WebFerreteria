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
      imagen: "martillo_acero.jpg",
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
      imagen: "destornillador_philips.jpg",
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
      imagen: "llave_inglesa.jpg",
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
      imagen: "taladro_electrico.jpg",
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
      imagen: "amoladora_angular.jpg",
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
      imagen: "cemento_50kg.jpg",
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
      imagen: "arena_construccion.jpg",
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
      imagen: "ladrillos_ceramicos.jpg",
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
      imagen: "pintura_acrilica_blanca.jpg",
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
      imagen: "rodillo_pintura.jpg",
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
      imagen: "cable_electrico.jpg",
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
      imagen: "interruptor_luz.jpg",
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
      imagen: "grifo_lavabo.jpg",
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
      imagen: "tuberia_pvc.jpg",
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
      imagen: "cerradura_seguridad.jpg",
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
      imagen: "bisagra_puerta.jpg",
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
      imagen: "aspiradora_industrial.jpg",
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
      imagen: "manguera_jardin.jpg",
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
      imagen: "cinta_metrica.jpg",
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
      imagen: "nivel_burbuja.jpg",
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
