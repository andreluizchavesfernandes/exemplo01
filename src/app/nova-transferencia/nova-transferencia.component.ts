import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;
  mensagem: string;

  transferir() {
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(valorEmitir);

    if(this.valor > 0){
      this.mensagem = 'Solicitação efetuada com sucesso!';
    } else {
      this.mensagem = 'Solicitação não permitida!';
    }
      
    this.limparCampos();
  } 

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }

}
