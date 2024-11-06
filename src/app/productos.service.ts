import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productos = [
    { id: 1, nombre: "Martillo de acero", categoria_id: 1 },
    { id: 2, nombre: "Destornillador Philips", categoria_id: 1 },
    { id: 3, nombre: "Llave inglesa", categoria_id: 1 },
    { id: 4, nombre: "Taladro eléctrico 500W", categoria_id: 2 },
    { id: 5, nombre: "Amoladora angular", categoria_id: 2 },
    { id: 6, nombre: "Cemento 50kg", categoria_id: 3 },
    { id: 7, nombre: "Arena de construcción", categoria_id: 3 },
    { id: 8, nombre: "Ladrillos cerámicos", categoria_id: 3 },
    { id: 9, nombre: "Pintura acrílica blanca 1L", categoria_id: 4 },
    { id: 10, nombre: "Rodillo para pintura", categoria_id: 4 },
    { id: 11, nombre: "Cable eléctrico 2m", categoria_id: 5 },
    { id: 12, nombre: "Interruptor de luz", categoria_id: 5 },
    { id: 13, nombre: "Grifo de lavabo", categoria_id: 6 },
    { id: 14, nombre: "Tubería PVC 3m", categoria_id: 6 },
    { id: 15, nombre: "Cerradura de seguridad", categoria_id: 7 },
    { id: 16, nombre: "Bisagra para puerta", categoria_id: 7 },
    { id: 17, nombre: "Aspiradora industrial", categoria_id: 8 },
    { id: 18, nombre: "Manguera de jardín 10m", categoria_id: 8 },
    { id: 19, nombre: "Cinta métrica 5m", categoria_id: 9 },
    { id: 20, nombre: "Nivel de burbuja 60cm", categoria_id: 9 }
  ];
  
  constructor() { }

  getProductos() {
    return this.productos;
  }
}
