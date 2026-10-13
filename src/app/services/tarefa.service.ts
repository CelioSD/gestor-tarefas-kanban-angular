import { Service, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import type { EstadoTarefa, PrioridadeTarefa, Tarefa } from '../models/tarefas';

// Serviço para gerenciar as tarefas
@Service()
export class TarefaService {

    // injeção de dependência para verificar se o código está sendo executado no navegador
    private platform = inject(PLATFORM_ID);

    // função para obter as tarefas do localStorage
    obterTarefas(): Tarefa[]{
        if(!isPlatformBrowser(this.platform)){
            return [];
        }

        const tarefasGuardadas = localStorage.getItem('tarefas-guardadas');
        if(!tarefasGuardadas){
            return[];
        }
        try{
            return JSON.parse(tarefasGuardadas) as Tarefa[];
        } catch {
            return [];
        }
    }

    // função para guardar as tarefas no localStorage
    guardarTarefas(tarefas: Tarefa[]): void {
        if(!isPlatformBrowser(this.platform)){
            return;
        }

        localStorage.setItem(
            'tarefas-guardadas',
            JSON.stringify(tarefas)
        );
    }

    // função para adicionar tarefa 

    adicionarTarefa(novaTarefa: Tarefa): void {
        const tarefas = this.obterTarefas();
        tarefas.push(novaTarefa);
        this.guardarTarefas(tarefas);
    }


    // função para editar tarefa 
    editarTarefa(id:number, novoTitulo: string, novaDescricao: string, novaPrioridade: PrioridadeTarefa, novoEstado: EstadoTarefa): void {
        const tarefas = this.obterTarefas()
        const tarefasAtualizadas = tarefas.map((tarefa) => {
            if(tarefa.id === id){
                return{
                    ...tarefa,
                    titulo: novoTitulo,
                    descricao: novaDescricao,
                    prioridade: novaPrioridade,
                    estado: novoEstado
                };
            }
            return tarefa
        })

        this.guardarTarefas(tarefasAtualizadas)
    }

    // função para remover tarefa
    removerTarefa(id:number): void {
        const tarefas = this.obterTarefas()
        const tarefasAtualizadas = tarefas.filter((tarefa)=>{
            return tarefa.id !== id;
        });
        this.guardarTarefas(tarefasAtualizadas)
    }

    // função para alterar o estado da tarefa
    alterarEstadoTarefa(id: number, novoEstado: EstadoTarefa): void{
        const tarefas = this.obterTarefas();
        const tarefasAtualizadas = tarefas.map((tarefa)=>{
            if(tarefa.id === id){
                return{
                    ...tarefa,
                    estado: novoEstado
                }
                 
            }
            return tarefa


        });

        this.guardarTarefas(tarefasAtualizadas)

    }

    // função para alterar a prioridade da tarefa
    alterarPrioridadeTarefa(id:number, novaPrioridade: PrioridadeTarefa): void{
        const tarefas = this.obterTarefas();
        const tarefasAtualizadas = tarefas.map((tarefa)=>{
            if(tarefa.id === id){
                return{
                    ...tarefa,
                    prioridade: novaPrioridade
                }
            }
            return tarefa
        });
        this.guardarTarefas(tarefasAtualizadas)
    }
}
