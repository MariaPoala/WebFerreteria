import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgForOf, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  categorias: any[] = [];
  productos: any[] = [];
  categoriaSeleccionada: any = null;

  constructor(
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private productosService: ProductosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Cargar categorías y productos desde los servicios
    this.categorias = this.categoriaService.getCategorias();
    this.productos = this.productosService.getProductos();

    // Suscribirse a los cambios en los parámetros de la URL
    this.route.paramMap.subscribe(params => {
      const categoriaId = +params.get('id')!;
      this.categoriaSeleccionada = this.categorias.find(categoria => categoria.id === categoriaId);

    
    });
    
  }

  seleccionarCategoria(categoria: any): void {
    this.categoriaSeleccionada = categoria;
    
  }

  obtenerProductosPorCategoria(categoria: any): any[] {
    return this.productos.filter(p => p.categoria_id === categoria.id);
  }

  navegarYSeleccionarCategoria(categoria: any): void {
    // Seleccionar la categoría y navegar a su ruta
    this.seleccionarCategoria(categoria);
    this.router.navigate(['/productos/categoria', categoria.id]);

  }
}
