# Meridian Blog API

API desenvolvida para o **Meridian Blog**, um projeto de blog com uma área administrativa destinada ao gerenciamento e à visualização de artigos.

O projeto utiliza Node.js, Express e TypeScript no backend, com autenticação baseada em sessões para controlar o acesso às páginas e aos recursos administrativos.

## 🎯 Objetivo do projeto

Desenvolver uma aplicação web com uma API própria, integrando o frontend ao backend e implementando mecanismos de autenticação e proteção de conteúdo.

O projeto também tem como objetivo colocar em prática conceitos de desenvolvimento web, organização de rotas, gerenciamento de sessões, integração entre frontend e backend e tratamento de requisições HTTP.

## 🚀 Tecnologias utilizadas

- **Node.js** — ambiente de execução JavaScript.
- **TypeScript** — tipagem estática para JavaScript.
- **Express** — criação do servidor HTTP e gerenciamento de rotas.
- **express-session** — gerenciamento de sessões de usuários.
- **dotenv** — carregamento de variáveis de ambiente.
- **HTML, CSS e JavaScript** — construção e funcionamento da interface web.
- **Git e GitHub** — versionamento e publicação do código-fonte.

## ⚙️ Funcionalidades

- Estruturação de uma API utilizando Express e TypeScript.
- Sistema de acesso à área administrativa.
- Verificação de autorização por meio de sessão.
- Proteção da página de visualização de artigos.
- Disponibilização de rotas específicas para autenticação e artigos.
- Integração entre páginas do frontend e endpoints da API.
- Configuração de variáveis de ambiente para proteger informações sensíveis.

## 📁 Estrutura do projeto

A estrutura abaixo representa os principais arquivos e diretórios identificados durante o desenvolvimento. Ajuste os caminhos caso a organização atual do repositório seja diferente.

```text
Meridian-Blog/
├── src/
│   ├── routes/
│   │   ├── access.ts
│   │   └── articles.ts
│   └── server.ts
├── pages/
│   ├── login.html
│   └── article.html
├── style/
├── script/
├── image/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── tsconfig.json
```

### Organização dos arquivos

- `src/server.ts`: inicialização do servidor, configuração do Express, sessões, arquivos estáticos e middleware de autenticação.
- `src/routes/access.ts`: rotas relacionadas ao controle de acesso.
- `src/routes/articles.ts`: rotas relacionadas aos artigos.
- `pages/login.html`: página de acesso à área administrativa.
- `pages/article.html`: página de visualização de artigos.
- `style/`: arquivos de estilização.
- `script/`: scripts JavaScript do frontend.
- `image/`: imagens utilizadas no projeto.
- `.env`: variáveis de ambiente locais.
- `tsconfig.json`: configurações do compilador TypeScript.

## 🔐 Autenticação e controle de acesso

O backend utiliza o pacote `express-session` para manter informações de autenticação entre requisições.

O middleware `requireAccess` verifica a existência da propriedade `authorizedEmail` na sessão. Caso o usuário não esteja autorizado, a aplicação redireciona a requisição para a página de login.

A rota `/pages/article.html` utiliza esse middleware para restringir o acesso à página de visualização dos artigos.

A configuração também utiliza a variável de ambiente `SESSION_SECRET` para assinar a sessão.

## 🔌 Principais rotas

| Método | Endpoint | Finalidade |
|---|---|---|
| POST | `/api/access/check` | Verificação de acesso à área administrativa. |
| GET | `/api/articles/:id` | Consulta de um artigo pelo identificador. |
| GET | `/pages/article.html` | Página de visualização de artigos, protegida por autenticação. |
| GET | `/pages/login.html` | Página de login. |

**Observação:** os endpoints e seus comportamentos devem corresponder à implementação atual dos arquivos de rotas. A proteção da página HTML, por si só, não garante que todos os endpoints da API estejam protegidos.

## 🛠️ Instalação e execução

### 1. Pré-requisitos

- Node.js instalado.
- npm instalado.
- Git instalado, caso deseje clonar o repositório.

### 2. Clone o repositório

```bash
git clone URL_DO_SEU_REPOSITORIO
cd Meridian-Blog
```

Substitua `URL_DO_SEU_REPOSITORIO` pelo endereço real do repositório.

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
SESSION_SECRET=coloque_um_segredo_forte_aqui
```

Utilize um segredo forte e exclusivo para o ambiente. Não compartilhe nem publique esse valor no GitHub.

### 5. Inicie o servidor em desenvolvimento

```bash
npm run dev
```

Com a configuração atual, o servidor utiliza a porta `3000` e fica disponível localmente em:

`http://localhost:3000`

### 6. Compile o projeto

Para verificar a compilação do TypeScript:

```bash
npm run build
```

Os comandos acima dependem dos scripts definidos no `package.json`.

## 🌐 Integração com o frontend

O frontend se comunica com o backend por meio de requisições HTTP para as rotas de autenticação e artigos.

O fluxo previsto inclui a verificação do acesso administrativo, a manutenção da sessão e a solicitação de artigos pelo identificador.

A navegação para um artigo utiliza uma URL no formato:

`/pages/article.html?id=1`

O identificador deve ser utilizado pelo frontend para consultar o artigo correspondente na API.

## 🔒 Boas práticas de segurança

- Não publicar o arquivo `.env` nem credenciais no repositório.
- Utilizar sessões com configurações de cookies adequadas ao ambiente de hospedagem.
- Validar os dados recebidos pela API.
- Proteger os endpoints administrativos, não apenas as páginas HTML.
- Utilizar HTTPS em produção.
- Configurar corretamente as opções de cookies e a política de sessão conforme o ambiente de implantação.

## 📌 Status do projeto

Projeto em desenvolvimento, com estrutura de servidor, rotas de autenticação e artigos, gerenciamento de sessões e integração com páginas do frontend.

Novas funcionalidades e melhorias podem ser adicionadas conforme a evolução da aplicação.

## 👨‍💻 Autor

**Yan Dias**

Projeto desenvolvido para praticar e consolidar conhecimentos em desenvolvimento web, APIs REST, TypeScript, Node.js, Express e integração entre frontend e backend.
