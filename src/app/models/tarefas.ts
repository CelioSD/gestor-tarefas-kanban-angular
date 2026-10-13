
// Definição dos tipos para a prioridade e estado das tarefas

export type PrioridadeTarefa = 
    | "Baixa"
    | "Média"
    | "Alta";

export type EstadoTarefa = 
    | "Por Fazer"
    | "Em Progresso"
    | "Concluída";

export interface Tarefa{
    id: number;
    titulo: string;
    descricao: string;
    prioridade: PrioridadeTarefa;
    estado: EstadoTarefa;
}
    