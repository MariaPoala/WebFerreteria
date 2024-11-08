import {  HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailService } from './email.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  emailData = {
    nombre: " ",
    email: " ",
    telefono: " ",
    message: " ",
  };

  constructor(private emailService: EmailService) {}

  enviarCorreo() {
    console.log(this.emailData)
    
    this.emailService.enviarCorreo(this.emailData).subscribe(
      response => {
        console.log('Correo enviado:', response);
      },
      error => {
        console.error('Error al enviar el correo:', error); // Muestra todo el error
        if (error.status === 0) {
          console.error('El servidor está inalcanzable. Verifica si está en ejecución.');
        } else {
          console.error(`Error ${error.status}: ${error.message}`);
        }
      }
    );
  }
}
