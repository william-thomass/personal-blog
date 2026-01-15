# 🚀 Personal Blog Backend

Este é um projeto **independente** desenvolvido com o objetivo de aplicar e consolidar conhecimentos avançados de **SOLID** e **Clean Architecture**. A aplicação foi construída do zero para replicar e aprofundar os conceitos de arquitetura escalável e tipagem estrita que venho estudando.

## 🧠 Filosofia do Projeto

A ideia central aqui é a prática da "Independência Técnica". Utilizei o que aprendi sobre princípios de engenharia de software para criar uma estrutura que suporta mudanças e é fácil de testar:

- **Aplicação de SOLID:** O projeto foca no Princípio da Responsabilidade Única (SRP) e na Inversão de Dependência (DIP), garantindo que a lógica de negócio não conheça detalhes de infraestrutura.
- **Clean Architecture:** Divisão clara entre camadas de entrada (HTTP), regras de negócio (Use Cases) e persistência de dados (Repositories).


## 🏗️ Estrutura e Organização

A estrutura de pastas reflete a aplicação prática dos padrões de design aprendidos:

- **`src/http`**: Onde residem os `controllers` e a definição das `routes`. É a porta de entrada da aplicação.
- **`src/use-cases`**: Contém a lógica de negócio pura, isolada de frameworks externos.
- **`src/repositories`**: Implementação da persistência de dados. Atualmente utiliza o **Node.js File System (fs)** para salvar dados em arquivos JSON, demonstrando flexibilidade na manipulação de I/O.
- **`src/factories`**: Centraliza a criação de instâncias e injeção de dependências.

## 📡 Endpoints da API

As rotas foram implementadas para atender aos fluxos de um blog real:

### Públicas
- `POST /sessions`: Autenticação e geração de JWT.
- `GET /home`: Lista os artigos para o feed inicial.
- `GET /article/:id`: Busca o conteúdo completo de um post.

### Administrativas (Protegidas por JWT)
- `GET /admin`: Dashboard com lista de gerenciamento.
- `POST /new`: Criação de novos artigos.
- `PUT /edit/:id`: Edição de posts existentes.
- `DELETE /admin/:id`: Remoção de artigos do sistema.

## 🛠️ Tecnologias Utilizadas

- **Node.js** com **Fastify** (Performance e modularidade).
- **TypeScript** (Tipagem estrita e segurança).
- **JWT** (Autenticação e proteção de rotas).
- **FS (File System)** (Persistência de dados em arquivos locais).

---

## 📫 Contato 

Estou sempre aberto a trocar ideias sobre arquitetura de software e desenvolvimento backend:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/william-thomass/)