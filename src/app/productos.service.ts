import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productos = [
    { id: 1, nombre: "Martillo de acero", categoria_id: 1, descripcion: "Martillo de acero forjado, ideal para trabajos de construcción.", precio: 15.99, imagen: "martillo_acero.jpg" },
    { id: 2, nombre: "Destornillador Philips", categoria_id: 1, descripcion: "Destornillador de precisión tipo Philips, mango ergonómico.", precio: 5.50, imagen: "destornillador_philips.jpg" },
    { id: 3, nombre: "Llave inglesa", categoria_id: 1, descripcion: "Llave inglesa ajustable de alta resistencia.", precio: 12.00, imagen: "llave_inglesa.jpg" },
    { id: 4, nombre: "Taladro eléctrico 500W", categoria_id: 2, descripcion: "Taladro potente de 500W, ideal para trabajos de perforación.", precio: 55.00, imagen: "taladro_electrico.jpg" },
    { id: 5, nombre: "Amoladora angular", categoria_id: 2, descripcion: "Amoladora angular de alta velocidad para corte y pulido.", precio: 45.00, imagen: "amoladora_angular.jpg" },
    { id: 6, nombre: "Cemento 50kg", categoria_id: 3, descripcion: "Saco de cemento de 50 kg para construcción.", precio: 8.50, imagen: "cemento_50kg.jpg" },
    { id: 7, nombre: "Arena de construcción", categoria_id: 3, descripcion: "Arena de alta calidad para uso en construcción.", precio: 3.00, imagen: "arena_construccion.jpg" },
    { id: 8, nombre: "Ladrillos cerámicos", categoria_id: 3, descripcion: "Ladrillos cerámicos resistentes para construcción.", precio: 0.30, imagen: "ladrillos_ceramicos.jpg" },
    { id: 9, nombre: "Pintura acrílica blanca 1L", categoria_id: 4, descripcion: "Pintura acrílica blanca de secado rápido.", precio: 6.50, imagen: "pintura_acrilica_blanca.jpg" },
    { id: 10, nombre: "Rodillo para pintura", categoria_id: 4, descripcion: "Rodillo de pintura con mango ergonómico.", precio: 4.00, imagen: "rodillo_pintura.jpg" },
    { id: 11, nombre: "Cable eléctrico 2m", categoria_id: 5, descripcion: "Cable eléctrico de 2 metros, ideal para conexiones caseras.", precio: 2.00, imagen: "cable_electrico.jpg" },
    { id: 12, nombre: "Interruptor de luz", categoria_id: 5, descripcion: "Interruptor de luz de alta calidad.", precio: 3.20, imagen: "interruptor_luz.jpg" },
    { id: 13, nombre: "Grifo de lavabo", categoria_id: 6, descripcion: "Grifo de alta calidad para lavabo, fácil instalación.", precio: 18.00, imagen: "grifo_lavabo.jpg" },
    { id: 14, nombre: "Tubería PVC 3m", categoria_id: 6, descripcion: "Tubería de PVC de 3 metros, ideal para drenaje.", precio: 7.00, imagen: "tuberia_pvc.jpg" },
    { id: 15, nombre: "Cerradura de seguridad", categoria_id: 7, descripcion: "Cerradura de seguridad para puertas exteriores.", precio: 25.00, imagen: "cerradura_seguridad.jpg" },
    { id: 16, nombre: "Bisagra para puerta", categoria_id: 7, descripcion: "Bisagra resistente para puertas de madera.", precio: 2.50, imagen: "bisagra_puerta.jpg" },
    { id: 17, nombre: "Aspiradora industrial", categoria_id: 8, descripcion: "Aspiradora industrial de gran capacidad para limpieza.", precio: 120.00, imagen: "aspiradora_industrial.jpg" },
    { id: 18, nombre: "Manguera de jardín 10m", categoria_id: 8, descripcion: "Manguera resistente para riego de jardines.", precio: 15.00, imagen: "manguera_jardin.jpg" },
    { id: 19, nombre: "Cinta métrica 5m", categoria_id: 9, descripcion: "Cinta métrica de 5 metros para mediciones precisas.", precio: 3.50, imagen: "cinta_metrica.jpg" },
    { id: 20, nombre: "Nivel de burbuja 60cm", categoria_id: 9, descripcion: "Nivel de burbuja de 60 cm para trabajos de construcción.", precio: 6.00, imagen: "nivel_burbuja.jpg" }
  ];
  
  
  constructor() { }

  getProductos() {
    return this.productos;
  }
}
