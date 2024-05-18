import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild, inject } from '@angular/core';
import { Marca } from '../../../models/marca';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { MarcasdetailsComponent } from '../marcasdetails/marcasdetails.component';
import { MarcaService } from '../../../services/marca.service';

@Component({
  selector: 'app-marcaslist',
  standalone: true,
  imports: [RouterLink, MdbModalModule, MarcasdetailsComponent],
  templateUrl: './marcaslist.component.html',
  styleUrl: './marcaslist.component.scss',
})
export class MarcaslistComponent {
  lista: Marca[] = [];
  marcaEdit: Marca = new Marca(0,"");

  @Input("esconderBotoes") esconderBotoes: boolean = false;
  @Output("retorno") retorno = new EventEmitter<any>();

  //ELEMENTOS DA MODAL
  modalService = inject(MdbModalService); // para conseguir abrir a modal
  @ViewChild("modalMarcaDetalhe") modalMarcaDetalhe!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  marcaService = inject(MarcaService);

  constructor() {
    this.listAll();

    let marcaNovo = history.state.marcaNovo;
    let marcaEditado = history.state.marcaEditado;

    if (marcaNovo != null) {
      marcaNovo.id = 555;
      this.lista.push(marcaNovo);
    }

    if (marcaEditado != null) {
      let indice = this.lista.findIndex((x) => {
        return x.id == marcaEditado.id;
      });
      this.lista[indice] = marcaEditado;
    }
  }

  listAll(){

    this.marcaService.listAll().subscribe({
      next: lista => { //quando o back retornar o que se espera
        this.lista = lista;
      },
      error: erro => { //quando ocorrer qualquer erro (badrequest, exceptions..)
        Swal.fire({
          title: 'Ocorreu um erro',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    });

  }

  deleteById(marca: Marca) {
    Swal.fire({
      title: 'Tem certeza que deseja deletar este registro?',
      icon: 'warning',
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.isConfirmed) {


        this.marcaService.delete(marca.id).subscribe({
          next: mensagem => { //quando o back retornar o que se espera
            Swal.fire({
              title: mensagem,
              icon: 'success',
              confirmButtonText: 'Ok',
            });

            this.listAll();
          },
          error: erro => { //quando ocorrer qualquer erro (badrequest, exceptions..)
            Swal.fire({
              title: 'Ocorreu um erro',
              icon: 'error',
              confirmButtonText: 'Ok',
            });
          }
        });


      }
    });
  }

  new(){
    this.marcaEdit = new Marca(0,"");
    this.modalRef = this.modalService.open(this.modalMarcaDetalhe);
  }

  edit(marca: Marca){
    this.marcaEdit = Object.assign({}, marca); //clonando pra evitar referência de objeto
    this.modalRef = this.modalService.open(this.modalMarcaDetalhe);
  }

  retornoDetalhe(marca: Marca){
    this.listAll();
    this.modalRef.close();
  }

  select(marca: Marca){
    this.retorno.emit(marca);
  }

}
