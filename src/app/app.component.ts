import { Component } from '@angular/core';
import { Pais } from './pais';
import { Cidade } from './cidade';
import {BrowserModule} from '@angular/platform-browser';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [DataserviceService]
})
export class AppComponent {
  TituloAplicacao = 'Cálculo de Juros';
  ValorPrincipal: number;
  Taxa: number;
  Tempo: number;

  transferencias: any[] = [];
  paises : Pais[];
  cidades : Cidade[];
  paisSelecionado : Pais = new Pais(0,'Brasil') ;


  public constructor(private _dataService: DataserviceService){
    this.ValorPrincipal = 1;
    this.Taxa = 1;
    this.Tempo = 1;
    this.paises = this._dataService.getPaises();
  }

  public ValorJuros(): number {
    return (this.ValorPrincipal * this.Taxa * this.Tempo) / 100;
  }

  onSelect(id) {
    this.cidades = this._dataService.getCidades().filter((item)=> item.paisId == id);
  }


}
