import { NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ProductosService } from '../productos.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [NgForOf, NgIf, RouterModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  categorias: any[] = [];
  productos: any[] = [];
  categoriaSeleccionada: any = null;
  productoSeleccionado: any = null;
  searchText: string = ''; // Texto para filtrar productos
  productosFiltrados: any[] = []; // Productos filtrados por el texto

  constructor(
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this.categorias = this.categoriaService.getCategorias();
    this.productos = this.productosService.getProductos();
    // this.productoSeleccionado= null;
    this.route.paramMap.subscribe(params => {
      const categoriaId = +params.get('id')!;

      if (categoriaId) {
        this.categoriaSeleccionada = this.categorias.find(categoria => categoria.id === categoriaId);

      }
    });
  }
  // Filtrar los productos cuando se hace click en el botón Filtrar
  filtrarProductos() {
    console.log("texto-filtrado" + this.searchText)
    if (this.searchText) {
      this.productosFiltrados = this.productos.filter(producto =>
        producto.nombre.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.productosFiltrados = [...this.productos]; // Si no hay texto, mostrar todos
    }
  }

  // Seleccionar la categoría
  seleccionarCategoria(categoria: any) {
    this.categoriaSeleccionada = categoria;
    this.productosFiltrados = this.productos.filter(producto =>
      producto.categoria_id === categoria.id
    );
  }

  // Obtener productos por categoría
  obtenerProductosPorCategoria(categoria: any) {
    return this.productos.filter(producto =>
      producto.categoria_id === categoria.id
    );
  }

  // Seleccionar un producto para ver los detalles
  seleccionarProducto(producto: any) {
    this.productoSeleccionado = producto;
  }

  get filteredProducts() {
    if (this.searchText === '') {
      return []; // Si la búsqueda está vacía, no se muestran productos
    }
    return this.productos.filter(producto => 
      producto.nombre.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  // seleccionarCategoria(categoria: any) {
  //   this.categoriaSeleccionada = this.categoriaSeleccionada?.id === categoria.id ? null : categoria;

  // }

  // obtenerProductosPorCategoria(categoria: any) {
  //   return this.productos.filter(producto => producto.categoria_id === categoria.id);
  // }

  // seleccionarProducto(producto: any) {
  //   this.productoSeleccionado = producto;
  // }

}
