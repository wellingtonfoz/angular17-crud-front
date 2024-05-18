import { Acessorio } from './acessorio';
import { Marca } from './marca';

export class Carro {
  id!: number;
  nome!: string;
  marca!: Marca;
  acessorios: Acessorio[] = [];

  constructor(id: number, nome: string, marca: Marca | null) {
    this.id = id;
    this.nome = nome;
    if (marca) this.marca = marca;
  }
}
