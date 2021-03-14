import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  constructor(private servicio:ServicioService, private toastr: ToastrService) { }

  datos:any = {
    email:'',
    asunto:'',
    cuerpo:''
  }

async enviar(form:NgForm){
  if(form.valid){
    const msg = await this.servicio.enviarCorreo(form.value)
    console.log(msg)
    if(msg == 'Exito'){
      this.toastr.success('Correo enviado');
      this.datos = {
        email:"",
        asunto:"",
        cuerpo:""
      }
      form.resetForm(this.datos)
    }else{
      this.toastr.error('Error al enviar el correo. Comprueba tu configuración SMTP')
    }
  }else{
    Object.values( form.controls ).forEach( control => {
      control.markAsTouched();
    });
  }
}

}
