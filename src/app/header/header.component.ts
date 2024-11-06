import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgForOf, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // categorias: any[] = [];

  // constructor(private categoriaService: CategoriaService) {}

  // ngOnInit() {
  //   this.categorias = this.categoriaService.getCategorias();
  // }

  categorias: any;
  productos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private productosService: ProductosService
  ) {}

  ngOnInit(): void {
    // Obtén el id de la categoría desde la URL
    const categoriaId = +this.route.snapshot.paramMap.get('id')!;
    
    // Busca la categoría y sus productos
    this.categorias = this.categoriaService.getCategorias().find(c => c.id === categoriaId);
    this.productos = this.productosService.getProductos().filter(p => p.categoria_id === categoriaId);
  }
}
