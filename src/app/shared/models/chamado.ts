import { Categoria } from "./categoria";
import { Colaborador } from "./colaborador";

export class Chamado {
    id?: string;
    titulo!: string;
    descricao!: string;
    prazoSolicitado!: Date;
    prazoAcordado!: Date;
    colaboradorResponsavelId!: number;
    colaboradorSolicitanteId!: number;
    categoriaId!: number;
    colaboradorSolicitante!: Colaborador;
    colaboradorResponsavel!: Colaborador;
    categoria!: Categoria;
}
