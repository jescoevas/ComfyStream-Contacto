import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServicioService } from '../../services/servicio.service';
import Swal from 'sweetalert2'

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
  console.log(form)
  if(form.valid){
    Swal.showLoading()
    const msg = await this.servicio.enviarCorreo(form.value)
    if(msg == 'Exito'){
      Swal.close()
      this.toastr.success('Correo enviado');
      this.datos = {
        email:"",
        asunto:"",
        cuerpo:""
      }
      form.resetForm(this.datos)
    }else{
      Swal.close()
      this.toastr.error('Error al enviar el correo. Comprueba tu configuración SMTP')
    }
  }else{
    Object.values( form.controls ).forEach( control => {
      control.markAsTouched();
    });
  }
}

}
