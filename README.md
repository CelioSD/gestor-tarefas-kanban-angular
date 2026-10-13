## Gestão de Tarefas — Angular

Aplicação web de gestão de tarefas desenvolvida com Angular e TypeScript, que permite organizar atividades num quadro kanban, definir prioridades, acompanhar estados e organizar os dados localmente no navegador.

## Funcionalidades 
-Criar tarefas: Adicionar tarefas com título, descrição, prioridade e estado.
-Editar tarefas: Actualizar os dados de uma tarefa existente.
-Eliminar tarefas: Remover tarefas que já não são necessárias.
-Gestão de estados: Organizar tarefas nas colunas Por Fazer, Em Progresso, e Concluída.
-Gestão de prioridade: Classificar tarefas como Baixa, Média, ou Alta.
-Pesquisa: Procurar tarefas pelo título sem distinguir letrras maiúsculas de minúsculas.
-Validação de formulários: Impedir a criação ou edição de tarefas com título ou descrição vazios.
-Mensagens de erro: Informar o utilizador sobre os campos que precisam de ser preenchidos.
-Persistência de dados: Guardar e recuperar tarefas através do Local Storage do navegador.
-Interface responsiva: Adaptar o quadro Kanban a diferentes tamanhos de ecrã.

## Tecnologias 
-Angular
-TypeScript
-HTML
-CSS3
-Local Strage API

## Conceitos aplicados 
Durante o desenvolvimento foram aolicados conceitos de programação e desenvolvimento web, incluindo:
-Componentes Angular e templates.
-Data binding com [(ngModel)].
-Diretivas de controlo de fluxo, como @if, @else e @for.
-Serviços para separar a ógica de gestão de tarefas da interface.
-Injeção de dependências.
-Interfaces e tipos personalizados em TypeScript.
-Métodos de arrays, como map(), filter() e includes().
-Validação de dados através de métodos como trim().
-Persistênca de dados com localStorage.
CSS responsivo com meida queries.


## Requisitos

## Att: Este projeto foi gerado com recurso ao [Angular CLI](https://github.com/angular/angular-cli) versão 22.1.3.

Par executar o projeto, precisas de:

-Node.js e npm instalados.
Um navegador web atualizado.

## Como executar o projeto

### 1 Entrar na pasta do projeto

cd versao-angular

### 2 Instalar dependências

npm install

### 3 Iniciar a aplicação
Para iniciar um servidor de desenvolvimento local, execute:

```bash
ng serve
```
Após o servidor estar em execução, abra o seu browser e aceda a `http://localhost:4200/`. A aplicação será recarregada 
automaticamente sempre que modificar qualquer um dos ficheiros de origem.


## Armazenamento de dados

As tarefas são guardadas no LocalStorage do navegador, utilizando a chave tarefas-guardadas.
Isto Permite manter os dados após ataualizar a página ou fechar e voltar a abrir o navegador no mesmo perfil.

A aplicação não necessita de uma base de dados ou de um backend para as funcionalidades atuais. Os dados ficam armazenados localmente no navegador utilizado.

## Estrutura do projeto

-models/tarefas.ts: Define a estrutura das tarefas e os tipos de prioridade e estado.

-services/tarefa.service.ts: Centraliza as operações de criação, leitura, edição, eliminação e persistência.

-app.ts: Gere o estado da interface, os formulários, a pesquisa e as interações.

-app.html: Define a estrutura da interface e do quadro Kanban.

-app.css: Contém os estilos e as regras de adaptação a diferentes ecrãs

## Objetivo do projeto
Este projeto foi desenvolvido para consolidar conhecimentos de Angular e TypeScript através da construção de uma aplicação prática, 
com separação de responsabilidades, validação de formulários, gestão de estado e persistência de dados.


## Building

To build the project run:

```bash
ng build
```
Isto irá compilar o seu projeto e armazenar os artefactos de compilação no diretório `dist/`. Por predefinição, a compilação de produção otimiza a sua aplicação para desempenho e velocidade.

## Recursos adicionais

Para obter mais informações sobre como utilizar a CLI do Angular, incluindo referências detalhadas de comandos, visite a página [Visão geral e referência de comandos da CLI do Angular](https://angular.dev/tools/cli).
