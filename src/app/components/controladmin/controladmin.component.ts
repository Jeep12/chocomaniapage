import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-controladmin',
  templateUrl: './controladmin.component.html',
  styleUrls: ['./controladmin.component.css']
})
export class ControladminComponent implements OnInit {
  public archivos: any = [];
  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
  }
  //capturando el evento del input tipo file obtengo mas datos como el tipo de imagen,peso,etc que con un formulario reactivo, que solo me da la path
  capturarFile(event: any) {
    //capturo el file list  event.target.files[0]
    const archivo = event.target.files[0];
    this.archivos.push(archivo);

  }
  subirArchivo(): any {
    try {
      const formularioDeDatos = new FormData();
      this.archivos.forEach((element: any) => {
        formularioDeDatos.append('files', element);
        console.log(element);
      });
    } catch (error) {

    }
  }
  pruebahttp(){
    this.dataService.getAll().subscribe(e=>{
      console.log(e);
    });
  }



}
