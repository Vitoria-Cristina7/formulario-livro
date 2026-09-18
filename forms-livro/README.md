# ✦ Cadastro de Livros — React.js ✦

> ❀ Projeto de formulário para cadastro de livros desenvolvido em **React.js**, utilizando componentes reutilizáveis, **props** e **estado local (`useState`)** — inspirado no projeto-modelo de cadastro de alunos visto em aula.

─── ⋆⋅☆⋅⋆ ───

## ❥ Sobre o projeto

Este projeto foi desenvolvido como atividade prática da disciplina de **Programação para Internet**, do curso **Técnico Integrado em Informática** — IFRN Campus Pau dos Ferros.

A proposta consistiu em reproduzir a estrutura do formulário de cadastro de alunos apresentado em sala, adaptando-o para o contexto de **cadastro de livros**, mantendo os mesmos conceitos fundamentais:

- ⟡ Componentes reutilizáveis
- ⟡ Passagem de dados via `props`
- ⟡ Gerenciamento de estado com `useState`
- ⟡ Renderização dinâmica de listas com `.map()`
- ⟡ Estilização modular com CSS por componente

─── ⋆⋅☆⋅⋆ ───

## ❀ Funcionalidades

✦ Cadastro de livros com os campos:

| Campo             | Tipo  | Exemplo            |
| ----------------- | ----- | ------------------ |
| Título            | texto | O Senhor dos Anéis |
| Autor             | texto | J.R.R. Tolkien     |
| Ano de publicação | texto | 1954               |
| Gênero            | texto | Fantasia           |

✦ Cada campo é controlado individualmente por um `useState` próprio.

✦ Ao clicar em **Cadastrar**, um novo objeto livro é criado com um identificador único gerado por `Date.now()` e adicionado à lista.

✦ Após o cadastro, todos os campos são automaticamente limpos.

✦ Caso nenhum livro tenha sido cadastrado, é exibida a mensagem:

> _"Nenhum livro cadastrado ainda."_

✦ Os livros cadastrados são exibidos em formato de lista, no padrão:

> **Título** — Autor — Ano — Gênero

─── ⋆⋅☆⋅⋆ ───

## ✧ Print da aplicação

C:\Users\crist\Desktop\PPI\formulario-livro\forms-livro\print.png

─── ⋆⋅☆⋅⋆ ───

## ⟡ Estrutura do projeto

    formulario-livro/
    │
    ├── forms-livro/
    │   │
    │   ├── src/
    │   │   ├── components/
    │   │   │   ├── CampoTexto.jsx
    │   │   │   ├── CampoTexto.css
    │   │   │   ├── Livro.jsx
    │   │   │   ├── FormularioLivro.jsx
    │   │   │   └── FormularioLivro.css
    │   │   │
    │   │   ├── App.jsx
    │   │   ├── index.css
    │   │   └── main.jsx
    │   │
    │   ├── index.html
    │   ├── package.json
    │   ├── vite.config.js
    │   ├── print.png
    │   └── README.md
    │
    └── .gitignore

─── ⋆⋅☆⋅⋆ ───

## ♡ Componentes

### ❥ `CampoTexto.jsx`

Componente reutilizável de campo de texto. Recebe via `props` os atributos `label`, `name`, `value`, `onChange` e demais propriedades repassadas ao `<input>` através do operador _spread_ `...inputProps`. Não possui estado próprio.

### ❥ `Livro.jsx`

Componente responsável por exibir um livro recebido via `props.livro`, mostrando título, autor, ano e gênero em formato de item de lista.

### ❥ `FormularioLivro.jsx`

Componente principal. Gerencia os quatro estados dos campos (título, autor, ano, gênero) e o estado da lista de livros. Responsável por cadastrar, limpar os campos e renderizar a lista.

### ❥ `App.jsx`

Apenas importa e renderiza o componente `FormularioLivro`.

─── ⋆⋅☆⋅⋆ ───

## ✦ Tecnologias utilizadas

- ⟡ **React.js** — biblioteca principal
- ⟡ **Vite** — ambiente de desenvolvimento e build
- ⟡ **JavaScript (ES6+)**
- ⟡ **CSS3**
- ⟡ **Node.js** — ambiente de execução

─── ⋆⋅☆⋅⋆ ───

## ❥ Como rodar o projeto (Windows)

> Pré-requisito: ter o **Node.js** instalado.
> Para verificar, abra o **Prompt de Comando** e digite:

    node -v

### ✧ Passo 1 — Baixe o projeto

**Opção A** (com Git instalado): abra o Prompt de Comando na pasta onde deseja salvar o projeto e rode:

    git clone https://github.com/Vitoria-Cristina7/formulario-livro.git

**Opção B** (sem Git): na página do repositório, clique em **Code → Download ZIP** e extraia a pasta.

### ✧ Passo 2 — Entre na pasta do projeto React

    cd formulario-livro/forms-livro

### ✧ Passo 3 — Instale as dependências

    npm install

### ✧ Passo 4 — Rode o projeto

    npm run dev

### ✧ Passo 5 — Abra no navegador

O terminal exibirá um endereço semelhante a:

    http://localhost:5173

Copie e cole no navegador (ou clique nele segurando `Ctrl`).

> ❀ Para parar o servidor, volte ao terminal e pressione `Ctrl + C`.

─── ⋆⋅☆⋅⋆ ───

## ♡ Aprendizados

Durante o desenvolvimento desta atividade, foram reforçados os seguintes conceitos:

- ⟡ Criação de **componentes funcionais** em React
- ⟡ **Reutilização** de componentes através de `props`
- ⟡ Gerenciamento de **estado local** com `useState`
- ⟡ **Controlled components** — inputs controlados pelo estado
- ⟡ **Renderização condicional** com operador lógico `&&`
- ⟡ **Renderização de listas** com `.map()` e uso de `key`
- ⟡ Organização de estilos em **CSS modular por componente**
- ⟡ Utilização de **operador spread** para repassar props

─── ⋆⋅☆⋅⋆ ───

## ❥ Autoria

Desenvolvido por **Vitória Cristina Fernandes Almeida** ✦
Turma **INFO3MAT** — Técnico Integrado em Informática
IFRN — Campus Pau dos Ferros

─── ⋆⋅☆⋅⋆ ───

## ✧ Referência

Projeto-modelo utilizado como base:

❥ [github.com/JefersonQueiroga/formulario-reactjs](https://github.com/JefersonQueiroga/formulario-reactjs)

─── ⋆⋅☆⋅⋆ ───

> ❀ _"Um livro é um sonho que você segura nas mãos."_ ❀
