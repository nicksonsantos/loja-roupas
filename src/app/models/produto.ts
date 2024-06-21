import { Categoria } from "src/app/models/categoria";

export interface Produto {
  id: number;
  titulo: string;
  preco: number;
  descricao: string;
  categoria: Categoria;
  imagens: string[];
}
