import { NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ProductosService } from '../productos.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [NgForOf, NgIf, RouterModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  categorias: any[] = [];
  productos: any[] = [];
  categoriaSeleccionada: any = null;
  productoSeleccionado: any = null;

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
  // seleccionarCategoria(categoria: any): void {
  //   this.categoriaSeleccionada = this.categoriaSeleccionada?.id === categoria.id ? null : categoria;
  // }

  // obtenerProductosPorCategoria(categoria: any): any[] {
  //   return this.productos.filter(producto => producto.categoria_id === categoria.id);
  // }

  seleccionarCategoria(categoria: any) {
    this.categoriaSeleccionada = this.categoriaSeleccionada?.id === categoria.id ? null : categoria;

  }

  obtenerProductosPorCategoria(categoria: any) {
    return this.productos.filter(producto => producto.categoria_id === categoria.id);
  }

  seleccionarProducto(producto: any) {
    this.productoSeleccionado = producto;
  }

}
