import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Asegúrate de que esto esté presente para que sea inyectable
})
export class EmailService {
  private apiUrl = 'http://api.lsplus.pe/api/utils/enviar/email-contacto/constrarna/'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  enviarCorreo(emailData: { nombre: string; email: string; telefono: string; message: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, emailData, { headers });
  }
}


