import { Produto } from "./produto.model";

export interface ProdutoCarrinho {
    produto: Produto;
    quantidade: number;
    valor?: number;
}