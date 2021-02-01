import { Promocao } from "./promocao.model";

export interface Produto {
    nome: string;
    valor: number;
    id?: number;
    promocao?: Promocao;
  }