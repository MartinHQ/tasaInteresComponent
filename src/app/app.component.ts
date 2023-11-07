import { Component, OnInit } from '@angular/core';
import { tasaInteres } from './tasaInteres';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tasaInteres';
  listaTasas:tasaInteres[]=[];

  nuevaTasa:tasaInteres;
  listaTipoTasas:string[]=["Nominal", "Efectiva"]

  nrotasa:number;
  tipotasa:string;
  nrodias:number;

  displayedColumns: string[] = ['nroTasa', 'tipoTasa', 'nroDias'];


  constructor(){}
  ngOnInit(): void {
  }

  registrar(form:NgForm){
    this.nuevaTasa=new tasaInteres(this.nrotasa,this.tipotasa,this.nrodias);
    this.listaTasas.push(this.nuevaTasa);

    form.resetForm();
  }

}
