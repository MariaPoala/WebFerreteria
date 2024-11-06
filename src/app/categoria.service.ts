import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private categorias = [
    { id: 1, nombre: 'Herramientas Manuales', descripcion: 'Martillos, destornilladores, llaves, alicates, sierras, cinceles, etc.' },
    { id: 2, nombre: 'Herramientas Eléctricas', descripcion: 'Taladros, esmeriles, sierras eléctricas, amoladoras, atornilladores eléctricos.' },
    { id: 3, nombre: 'Materiales de Construcción', descripcion: 'Cemento, arena, grava, cal, ladrillos, bloques, concreto premezclado.' },
    { id: 4, nombre: 'Pinturas y Acabados', descripcion: 'Pinturas, barnices, esmaltes, lacas, rodillos, brochas, removedores de pintura.' },
    { id: 5, nombre: 'Electricidad y Iluminación', descripcion: 'Cables, enchufes, interruptores, focos, lámparas, extensiones eléctricas.' },
    { id: 6, nombre: 'Fontanería y Sanitarios', descripcion: 'Tuberías, conexiones, válvulas, inodoros, fregaderos, grifos, selladores.' },
    { id: 7, nombre: 'Ferretería General', descripcion: 'Clavos, tornillos, pernos, tuercas, bisagras, cadenas, candados.' },
    { id: 8, nombre: 'Jardinería y Exteriores', descripcion: 'Mangueras, aspersores, macetas, herramientas de jardín, fertilizantes, pesticidas.' },
    { id: 9, nombre: 'Seguridad Industrial', descripcion: 'Cascos, guantes, gafas de seguridad, mascarillas, arneses, botas de seguridad.' },
    { id: 10, nombre: 'Carpintería y Ebanistería', descripcion: 'Tableros de madera, aglomerado, MDF, melamina, pegamentos, barnices para madera.' },
    { id: 11, nombre: 'Adhesivos y Selladores', descripcion: 'Siliconas, pegamentos, selladores, cintas adhesivas, resinas epóxicas.' },
    { id: 12, nombre: 'Cerrajería', descripcion: 'Cerraduras, bisagras, manillas, llaves, pestillos, cerrojos de seguridad.' },
    { id: 13, nombre: 'Herramientas de Medición', descripcion: 'Cintas métricas, niveles, escuadras, calibradores, medidores láser.' },
    { id: 14, nombre: 'Revestimientos y Pisos', descripcion: 'Azulejos, cerámicas, porcelanatos, pisos vinílicos, pegamentos para cerámica.' },
    { id: 15, nombre: 'Productos de Limpieza', descripcion: 'Detergentes, desengrasantes, limpiadores, cepillos, escobas, baldes.' },
    { id: 16, nombre: 'Automotriz', descripcion: 'Herramientas para vehículos, lubricantes, aceites, aditivos, baterías, productos para limpieza de autos.' },
    { id: 17, nombre: 'Plomería y Calefacción', descripcion: 'Calentadores de agua, boilers, sistemas de calefacción, filtros de agua.' },
    { id: 18, nombre: 'Accesorios y Organizadores', descripcion: 'Estantes, cajas de herramientas, organizadores, portaherramientas, contenedores.' },
    { id: 19, nombre: 'Aislantes y Protección Térmica', descripcion: 'Materiales aislantes, espumas, cintas térmicas, paneles de aislamiento.' }
  ];

  constructor() { }

  // Método para obtener las categorías
  getCategorias() {
    return this.categorias;
  }
}
