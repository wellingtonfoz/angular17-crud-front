import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Carro } from '../../../models/carro';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'
import { CarroService } from '../../../services/carro.service';
import { Marca } from '../../../models/marca';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { MarcaslistComponent } from '../../marcas/marcaslist/marcaslist.component';
import { Acessorio } from '../../../models/acessorio';
import { AcessorioslistComponent } from '../../acessorios/acessorioslist/acessorioslist.component';

@Component({
  selector: 'app-carrosdetails',
  standalone: true,
  imports: [MdbFormsModule, FormsModule, MarcaslistComponent, AcessorioslistComponent],
  templateUrl: './carrosdetails.component.html',
  styleUrl: './carrosdetails.component.scss'
})
export class CarrosdetailsComponent {

  @Input("carro") carro: Carro = new Carro(0,"", null);
  @Output("retorno") retorno = new EventEmitter<any>();
  router = inject(ActivatedRoute);
  router2 = inject(Router);

    //ELEMENTOS DA MODAL
    modalService = inject(MdbModalService); // para conseguir abrir a modal
    @ViewChild("modalMarcas") modalMarcas!: TemplateRef<any>;
    @ViewChild("modalAcessorios") modalAcessorios!: TemplateRef<any>;
    modalRef!: MdbModalRef<any>;

  carroService = inject(CarroService);

  constructor(){
    let id = this.router.snapshot.params['id'];
    if(id > 0){
      this.findById(id);
    }else{
      if(this.carro.id > 0)
        this.findById(id);
    }
  }

  findById(id: number){

    this.carroService.findById(id).subscribe({
      next: retorno => {
        this.carro = retorno;
      },
      error: erro => {
        Swal.fire({
          title: 'Ocorreu um erro',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    });

  }

  save(){
    if(this.carro.id > 0){

      this.carroService.update(this.carro, this.carro.id).subscribe({
        next: mensagem => {
          Swal.fire({
            title: mensagem,
            icon: 'success',
            confirmButtonText: 'Ok',
          });
          this.router2.navigate(['admin/carros'], { state: { carroEditado: this.carro } });
          this.retorno.emit(this.carro);
        },
        error: erro => {
          Swal.fire({
            title: 'Ocorreu um erro',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }
      });

    }else{

      this.carroService.save(this.carro).subscribe({
        next: mensagem => {
          Swal.fire({
            title: mensagem,
            icon: 'success',
            confirmButtonText: 'Ok',
          });
          this.router2.navigate(['admin/carros'], { state: { carroNovo: this.carro } });
          this.retorno.emit(this.carro);
        },
        error: erro => {
          Swal.fire({
            title: 'Ocorreu um erro',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }
      });

    }


  }




  buscarMarca(){
    this.modalRef = this.modalService.open(this.modalMarcas, {modalClass: 'modal-lg'});
  }

  buscarAcessorio(){
    this.modalRef = this.modalService.open(this.modalAcessorios, {modalClass: 'modal-lg'});
  }

  retornoMarca(marca: Marca){
    this.carro.marca = marca;
    this.modalRef.close();
  }

  retornoAcessorio(acessorio: Acessorio){
    if(this.carro.acessorios == null)
      this.carro.acessorios = [];

    this.carro.acessorios.push(acessorio);
    this.modalRef.close();
  }


  desvincularAcessorioCarro(acessorio: Acessorio){
    let posicao = this.carro.acessorios.findIndex(x => {return x.id == acessorio.id});
    this.carro.acessorios.splice(posicao, 1);
  }

}

