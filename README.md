# ToDo List

Este projeto é um exemplo educacional para apresentação na Cyber Solutions de uma aplicação ToDo List desenvolvida com Next.js 15, TailwindCSS, Jest e TypeScript. O foco principal do projeto é demonstrar a importância de testes unitários para garantir a confiabilidade do código.

## Tecnologias Utilizadas

-   **Next.js 15** - Framework React para construção de aplicações web.
-   **TypeScript** - Superset do JavaScript que adiciona tipagem estática.
-   **TailwindCSS** - Framework de estilização baseado em utilitários.
-   **Jest** - Framework de testes para JavaScript e TypeScript.
-   **Testing Library** - Biblioteca para facilitar a escrita de testes acessíveis e confiáveis.

## Funcionalidades

-   Adicionar uma nova tarefa.
-   Excluir uma tarefa individualmente.
-   Limpar todas as tarefas.
-   Armazenamento local das tarefas (LocalStorage).
-   Cobertura de testes unitários para garantir a funcionalidade do sistema.

## Instalação e Execução

Nesse projeto foi utilizado [pnpm](https://pnpm.io), mas isso não impede de utilizar um npm ou qualquer outro gerenciador de pacotes.

1. Clone o repositório:
    ```sh
    git clone https://github.com/MGMAdvance/valor-testes-automatizados.git
    ```
2. Acesse o diretório do projeto:
    ```sh
    cd valor-testes-automatizados
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```
    ou
    ```sh
    pnpm install
    ```
4. Execute o projeto localmente:
    ```sh
    npm run dev
    ```
    ou
    ```sh
    pnpm dev
    ```
5. Acesse a aplicação em `http://localhost:3000`

## Executando os Testes

Para rodar os testes unitários, utilize o comando:

```sh
npm test
```

ou

```sh
pnpm test
```
