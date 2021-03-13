import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }

  enviarCorreo(datos:any):Promise<string>{
    return new Promise<string>(resolve => {
      this.http.post(`${apiUrl}/enviarCorreo`, datos).subscribe((data:any) => {
        const msg = data['msg']
        resolve(msg)
      })
    })
  }

}
