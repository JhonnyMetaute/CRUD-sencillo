import { Component } from '@angular/core';
import { Empleados } from './modelos/empleados';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 arregloempleado: Empleados[]=[ // Arreglo necesario para contener los empleados
    {id:1, name : "Jhonny",country:"Colombia" }, //Empleados por defecto
    {id:2, name : "Alexander",country:"Mexico" },
    {id:3, name : "Camilo",country:"Inglaterra" },
 ];

 seleccionar_empleado: Empleados = new Empleados();

 crear_modificar(){  //Crear y almacenar un nuevo empleado
    if(this.seleccionar_empleado.id==0){
      this.seleccionar_empleado.id=this.arregloempleado.length+1;
      this.arregloempleado.push(this.seleccionar_empleado);
      this.seleccionar_empleado=new Empleados();
    }
 }

 abrir_editar(empleados:Empleados){ //Desplegar Empleado existente para editarlo
    this.seleccionar_empleado=empleados;
 }

 borrar(){  //Borra empleado 
   if(confirm("Estas Seguro")){ //Ventana de confirmación 
      this.arregloempleado=this.arregloempleado.filter(x=>x!=this.seleccionar_empleado);
      this.seleccionar_empleado=new Empleados();
   }
 }
}
