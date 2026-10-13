import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TarefaService }from './services/tarefa.service';
import type { Tarefa, EstadoTarefa, PrioridadeTarefa } from './models/tarefas';

// Componente principal da aplicação
@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, FormsModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private tarefaService = inject(TarefaService);

  // Variáveis para tarefa normal
  titulo: string = "";
  descricao: string = "";
  prioridade: PrioridadeTarefa= "Baixa";
  estado: EstadoTarefa = "Por Fazer"


  // Variáveis para tarefas em edição
  tituloEdicao: string = '';
  descricaoEdicao: string = '';
  prioridadeEdicao: PrioridadeTarefa = 'Baixa';
  estadoEdicao: EstadoTarefa = 'Por Fazer';

  // Variáveis para filtragem das tarefas
  pesquisa: string = '';
  filtroEstado: EstadoTarefa | 'Todos' = 'Todos';

  tarefas = this.tarefaService.obterTarefas();
  //Variável para mensagem de erro
  mensagemErroTitulo: string = '';
  mensagemErroDescricao: string = '';

  mensagemErroTituloEdicao:string = '';
  mensagemErroDescricaoEdicao:string = '';

  // Função para adicionar uma nova tarefa
  adicionarTarefa():void{
    if(!this.titulo.trim()){
      this.mensagemErroTitulo = 'O título é obrigatório';
      return;
    }
    this.mensagemErroTitulo = '';

    if(!this.descricao.trim()){
      this.mensagemErroDescricao = 'A descricao é obrigatória';
      return;
    }

    this.mensagemErroDescricao = '';
    

    const novaTarefa = {
      id: Date.now(),
      titulo: this.titulo,
      descricao: this.descricao,
      prioridade: this.prioridade,
      estado: this.estado
    };
    this.tarefaService.adicionarTarefa(novaTarefa);
    this.tarefas = this.tarefaService.obterTarefas();

    this.titulo = '';
    this.descricao = '';
    this.prioridade = 'Baixa';
    this.estado = 'Por Fazer';
    this.mensagemErroTitulo = '';
    this.mensagemErroDescricao = '';
  }
  // Função para remover uma tarefa
  removerTarefa(id:number):void{
    this.tarefaService.removerTarefa(id)
    this.tarefas = this.tarefaService.obterTarefas()
  }

  // Função para iniciar a edição de uma tarefa
  editando: number | null = null;
  iniciarEdicao(tarefa: Tarefa):void{
    this.editando = tarefa.id;
    this.tituloEdicao = tarefa.titulo;
    this.descricaoEdicao = tarefa.descricao;
    this.prioridadeEdicao = tarefa.prioridade;
    this.estadoEdicao = tarefa.estado;

    this.mensagemErroTituloEdicao = '';
    this.mensagemErroDescricaoEdicao= '';
  }


  // Função para guardar a edição de uma tarefa
  guardarEdicao():void{
    if(!this.tituloEdicao.trim()){
      this.mensagemErroTituloEdicao = 'O título é obrigatório';
      return;
    };
    this.mensagemErroTituloEdicao = '';

    if(!this.descricaoEdicao.trim()){
      this.mensagemErroDescricaoEdicao = 'A descrição é obrigatória';
      return;
    }

    this.mensagemErroDescricaoEdicao = '';

    if(this.editando !== null){
      this.tarefaService.editarTarefa(
        this.editando, 
        this.tituloEdicao,
        this.descricaoEdicao,
        this.prioridadeEdicao,
        this.estadoEdicao
      )
    }
    this.tarefas = this.tarefaService.obterTarefas()
    this.editando = null
    this.mensagemErroTituloEdicao = '';
    this.mensagemErroDescricaoEdicao= '';
  }

  // Função para cancelar a edição de uma tarefa
  cancelarEdicao(): void{
    this.editando = null;
    this.tituloEdicao = '';
    this.descricaoEdicao = '';
    this.prioridadeEdicao = 'Baixa';
    this.estadoEdicao = 'Por Fazer';
    this.mensagemErroTituloEdicao = '';
    this.mensagemErroDescricaoEdicao= '';
  }


  // Função para alterar o estado de uma tarefa
  alterarEstado(id:number, novoEstado:EstadoTarefa):void{
    this.tarefaService.alterarEstadoTarefa(id, novoEstado);
    this.tarefas = this.tarefaService.obterTarefas()
  }


  // Função para alterar a prioridade de uma tarefa
  obterTarefaEstado(estado: EstadoTarefa): Tarefa[]{
    const tarefas = this.obterTarefasFiltradas();
    return tarefas.filter((tarefa) => tarefa.estado === estado );
    
  }

  // Função para obter tarefas filtradas por pesquisa e estado
  obterTarefasFiltradas():Tarefa[]{
    const resultado = this.tarefas.filter((tarefa)=>
    tarefa.titulo
    .toLowerCase()
    .includes(this.pesquisa.toLowerCase())
    );

    return resultado.filter((tarefa)=>{
      return this.filtroEstado === 'Todos' || tarefa.estado === this.filtroEstado;
        
    })
  }


}
