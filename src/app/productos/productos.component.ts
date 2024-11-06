import { NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  categorias: any[] = [];
  productos: any[] = [];
  categoriaSeleccionada: any = null; // Categoría seleccionada

  constructor(
    private categoriaService: CategoriaService,
    private productosService: ProductosService
  ) {}

  ngOnInit(): void {
    // Obtener las categorías y los productos
    this.categorias = this.categoriaService.getCategorias();
    this.productos = this.productosService.getProductos();
  }

  // Método para seleccionar una categoría y mostrar sus productos
  seleccionarCategoria(categoria: any): void {
    // Si la categoría ya está seleccionada, la ocultamos, si no, la mostramos
    this.categoriaSeleccionada = this.categoriaSeleccionada?.id === categoria.id ? null : categoria;
  }

  // Obtener los productos de la categoría seleccionada
  obtenerProductosPorCategoria(categoria: any): any[] {
    return this.productos.filter(producto => producto.categoria_id === categoria.id);
  }
}
