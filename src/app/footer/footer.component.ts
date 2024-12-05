import { Component } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  categorias: any[] = [];

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit() {
    // this.categorias = this.categoriaService.getCategorias().slice(0, 6);
    this.categorias = this.categoriaService.getCategorias();
  }

}
