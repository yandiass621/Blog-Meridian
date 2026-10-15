# Meridian Blog — Documentação do Projeto

**Autor:** Yan Dias  
**Repositório:** https://github.com/yandiass621/Blog-Meridian  
**Tipo de projeto:** Aplicação web com API própria e acesso restrito à leitura integral de artigos  
**Status:** Em desenvolvimento

---

## 1. Visão geral do projeto

O Meridian Blog é uma aplicação web desenvolvida com o objetivo de disponibilizar artigos em uma interface organizada, permitindo que visitantes conheçam o conteúdo publicado, visualizem os artigos disponíveis e tenham acesso à leitura integral somente quando estiverem autenticados e autorizados.

O projeto utiliza uma arquitetura composta por frontend e backend. O frontend é responsável pela interface visual, navegação e interação com o usuário. O backend gerencia as requisições HTTP, a autenticação, as sessões e o fornecimento dos dados dos artigos.

A principal regra de negócio é separar o conteúdo público do conteúdo restrito. Qualquer visitante pode acessar a página inicial e a listagem de artigos, mas a leitura completa exige autenticação válida.

O projeto também serve como ambiente de aprendizado prático para desenvolvimento web, criação de APIs, organização de código, segurança de aplicações e integração entre tecnologias frontend e backend.

## 2. Objetivos do projeto

Os principais objetivos do Meridian Blog são:

- Desenvolver uma aplicação web com frontend e backend integrados.
- Criar uma API utilizando Node.js, Express e TypeScript.
- Implementar autenticação por e-mail e senha.
- Utilizar sessões para manter o estado de autenticação do usuário.
- Separar o conteúdo público do conteúdo restrito.
- Permitir que visitantes visualizem os artigos disponíveis sem acessar seu conteúdo integral.
- Proteger a leitura completa tanto na navegação pelo site quanto nas requisições diretas à API.
- Praticar boas práticas de organização, manutenção e segurança de código.
- Construir um projeto de portfólio que demonstre conhecimentos de desenvolvimento web.

## 3. Tecnologias utilizadas

### Backend

**Node.js**

Ambiente responsável pela execução do código JavaScript no servidor.

**Express 5**

Framework utilizado para criar o servidor HTTP, configurar middlewares, disponibilizar arquivos estáticos e organizar as rotas da API.

**TypeScript**

Superset do JavaScript que adiciona tipagem estática e facilita a identificação de erros durante o desenvolvimento.

**express-session**

Biblioteca utilizada para gerenciar sessões. Após uma autenticação bem-sucedida, a aplicação mantém informações que permitem reconhecer o usuário nas requisições seguintes.

**bcrypt**

Biblioteca utilizada para comparar a senha fornecida durante o login com o hash armazenado para o usuário.

**dotenv**

Biblioteca utilizada para carregar variáveis de ambiente a partir de um arquivo `.env` durante o desenvolvimento local.

### Frontend

**HTML**

Define a estrutura das páginas, incluindo a página inicial, a listagem de artigos, a página de leitura e a tela de login.

**CSS**

Responsável pela apresentação visual, organização dos elementos, cores, espaçamentos, responsividade e demais aspectos visuais.

**JavaScript**

Responsável pelas interações da interface e pelas requisições ao backend, como autenticação, carregamento de artigos e navegação entre páginas.

### Versionamento

**Git e GitHub**

Utilizados para controlar as alterações do código, manter o histórico de desenvolvimento e disponibilizar o repositório do projeto.

## 4. Arquitetura e organização

O projeto separa os arquivos do servidor, as rotas da API, os dados e os recursos visuais.

A estrutura principal é organizada da seguinte forma:

```text
Blog-Meridian/
├── image/
├── pages/
│   ├── login.html
│   ├── articles.html
│   └── article.html
├── script/
├── src/
│   ├── data/
│   │   ├── articles.ts
│   │   └── users.ts
│   ├── routes/
│   │   ├── access.ts
│   │   └── articles.ts
│   └── server.ts
├── style/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

Essa estrutura representa a organização prevista a partir do desenvolvimento do projeto. Os nomes e caminhos devem ser mantidos de acordo com os arquivos efetivamente existentes no repositório.

### Responsabilidade de cada diretório

**`src/server.ts`**

É o ponto de entrada do backend. Nesse arquivo são configurados o Express, as sessões, os arquivos estáticos, o middleware de autenticação, as rotas e a inicialização do servidor.

**`src/routes/access.ts`**

Contém as rotas relacionadas à autenticação e à verificação das credenciais fornecidas pelo usuário.

**`src/routes/articles.ts`**

Contém as rotas responsáveis por disponibilizar os artigos por meio da API.

**`src/data/articles.ts`**

Armazena os dados dos artigos utilizados pela aplicação, conforme a implementação atual.

**`src/data/users.ts`**

Armazena os dados dos usuários utilizados pelo sistema de autenticação, conforme a implementação atual.

**`pages/`**

Contém os documentos HTML que compõem a interface da aplicação.

**`style/`**

Armazena os arquivos CSS utilizados para estilizar as páginas.

**`script/`**

Armazena os arquivos JavaScript responsáveis pelas interações do frontend.

**`image/`**

Armazena as imagens utilizadas nos cards, artigos e demais componentes visuais.

## 5. Funcionamento do frontend

O frontend é a camada com a qual o visitante interage diretamente.

A aplicação possui três áreas principais de navegação: a página inicial, a listagem de artigos e a página de leitura individual.

### Página inicial

A Home funciona como ponto de entrada do Meridian Blog. Ela apresenta a identidade visual da aplicação e permite que o visitante navegue até a listagem de artigos.

Essa página deve permanecer pública, independentemente de o visitante possuir uma sessão autenticada.

### Listagem de artigos

A página `articles.html` apresenta os artigos disponíveis em formato de cards.

Cada card pode apresentar informações como:

- Título do artigo.
- Imagem de destaque.
- Categoria.
- Data de publicação.
- Resumo ou introdução.
- Link ou botão para ler o artigo completo.

A listagem tem como objetivo permitir que o visitante conheça os assuntos publicados sem necessariamente ter acesso ao conteúdo integral.

O botão “Ler artigo” direciona o usuário para a página individual do artigo, normalmente passando seu identificador na URL.

Exemplo:

`/pages/article.html?id=1`

O identificador permite que o frontend solicite ao backend os dados correspondentes ao artigo selecionado.

### Página individual do artigo

A página `article.html` é responsável por apresentar o conteúdo integral do artigo.

Ela pode exibir título, categoria, data, imagem de destaque e corpo do texto, conforme os dados disponibilizados pela API.

Essa página é restrita a usuários autenticados e autorizados. Se um visitante sem acesso tentar abri-la diretamente, o servidor deve redirecioná-lo para a página de login.

A proteção precisa existir no servidor, e não apenas na interface visual.

## 6. Regras de negócio e controle de acesso

A principal regra do Meridian Blog é permitir a navegação pública, restringindo somente a leitura integral dos artigos.

### Visitante sem autenticação

Um visitante que não esteja autenticado pode:

- Acessar a Home.
- Abrir a listagem de artigos.
- Visualizar os cards e suas informações públicas.
- Conhecer os títulos, imagens e resumos disponibilizados.
- Navegar pelas páginas públicas.

Entretanto, esse visitante não pode:

- Abrir a página de leitura integral de um artigo.
- Obter o conteúdo completo por meio de uma requisição direta à API.
- Contornar a autenticação acessando uma URL individual ou manipulando requisições do navegador.

### Usuário autenticado e autorizado

Um usuário que tenha realizado o login corretamente e possua autorização pode:

- Acessar as páginas públicas.
- Abrir a listagem de artigos.
- Selecionar um artigo.
- Visualizar seu conteúdo integral.
- Consultar os dados protegidos disponibilizados pela API.

A autenticação identifica o usuário. A autorização determina se ele pode acessar determinado recurso.

No Meridian Blog, essas duas etapas devem trabalhar em conjunto para garantir que somente usuários permitidos leiam os artigos completos.

## 7. Funcionamento da autenticação

A autenticação utiliza e-mail, senha e sessões.

O fluxo previsto é o seguinte:

1. O usuário acessa a página de login.
2. Informa o e-mail e a senha.
3. O frontend envia as credenciais para a rota de autenticação.
4. O backend verifica se os campos necessários foram fornecidos.
5. O e-mail é normalizado para evitar diferenças causadas por letras maiúsculas e minúsculas.
6. O backend localiza o usuário correspondente.
7. A senha fornecida é comparada com o hash armazenado utilizando `bcrypt`.
8. Se as credenciais forem válidas, o servidor registra a identidade autorizada na sessão.
9. O navegador utiliza o cookie de sessão nas requisições seguintes.
10. O middleware verifica a sessão antes de liberar o acesso aos recursos protegidos.

Se as credenciais forem inválidas, a aplicação deve negar o acesso e informar que a autenticação não foi bem-sucedida.

### Gerenciamento de sessões

O pacote `express-session` permite manter o estado de autenticação entre diferentes requisições HTTP.

No servidor, a propriedade `authorizedEmail` é utilizada para verificar se existe uma identidade autorizada registrada na sessão.

O middleware `requireAccess` verifica essa propriedade antes de permitir o acesso à página protegida.

A sessão possui uma duração configurada por meio de `cookie.maxAge`. No código atual, o valor corresponde a uma hora.

Essa configuração define a duração do cookie no navegador, mas não deve ser confundida com uma garantia de expiração absoluta da sessão no servidor.

## 8. Funcionamento do backend e da API

O backend recebe as requisições do frontend, executa as validações necessárias e devolve respostas HTTP.

O servidor utiliza a porta `3000` no ambiente local.

### Configuração do Express

O arquivo `server.ts` configura:

- O processamento de requisições JSON.
- O gerenciamento de sessões.
- A disponibilização de arquivos estáticos.
- O middleware de controle de acesso.
- As rotas de autenticação.
- As rotas de artigos.
- A inicialização do servidor HTTP.

### Rotas de autenticação

A rota `POST /api/access/check` é utilizada para receber as credenciais e realizar a verificação de acesso.

Ela deve retornar uma resposta apropriada de acordo com o resultado da autenticação.

### Rotas de artigos

A API possui rotas destinadas à consulta de artigos.

`GET /api/articles`

Utilizada para consultar a listagem dos artigos.

`GET /api/articles/:id`

Utilizada para consultar um artigo específico por meio de seu identificador.

A regra de segurança do projeto exige que a listagem pública não exponha o conteúdo integral dos artigos e que a consulta individual seja protegida pela autenticação.

A proteção dos endpoints precisa ser implementada no backend. Impedir apenas que um visitante clique no botão “Ler artigo” não é suficiente, pois uma requisição HTTP pode ser enviada diretamente à API.

## 9. Segurança e proteção de informações

A segurança é uma parte importante do Meridian Blog porque o projeto diferencia recursos públicos e protegidos.

### Variáveis de ambiente

A variável `SESSION_SECRET` é utilizada para configurar a assinatura das sessões.

Ela deve ser definida no ambiente de execução e não deve ser publicada no repositório.

O arquivo `.env` deve permanecer fora do controle de versão por meio do `.gitignore`.

### Senhas

As senhas não devem ser armazenadas em texto puro.

O uso de `bcrypt` permite comparar uma senha fornecida com um hash armazenado, sem precisar manter a senha original em texto legível.

### Proteção de rotas

A página individual do artigo é protegida por um middleware de autenticação.

Para garantir a segurança completa, os endpoints que fornecem o conteúdo integral também precisam verificar a sessão antes de retornar os dados.

### Cookies e ambiente de produção

Em uma implantação pública, é necessário avaliar configurações como:

- HTTPS.
- Cookie `secure`.
- Cookie `httpOnly`.
- Política `sameSite`.
- Regeneração da sessão após o login.
- Expiração e encerramento das sessões.
- Limitação de tentativas de autenticação.

Essas medidas ajudam a reduzir riscos relacionados ao roubo de sessões e ao acesso indevido.

## 10. Instalação e execução local

### Pré-requisitos

- Node.js instalado.
- npm instalado.
- Git instalado.

### Clonar o projeto

```bash
git clone https://github.com/yandiass621/Blog-Meridian.git
cd Blog-Meridian
```

### Instalar as dependências

```bash
npm install
```

### Configurar o ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
SESSION_SECRET=seu_segredo_forte_aqui
```

O valor acima é apenas um exemplo. Utilize um segredo próprio e não compartilhe credenciais reais.

### Iniciar o servidor em desenvolvimento

```bash
npm run dev
```

Com o servidor em execução, acesse:

http://localhost:3000

### Compilar o TypeScript

```bash
npm run build
```

Esse comando permite verificar se o código TypeScript pode ser compilado de acordo com as configurações do projeto.

Os comandos disponíveis dependem dos scripts declarados no `package.json`.

## 11. Fluxo geral da aplicação

O fluxo esperado pode ser resumido da seguinte maneira:

```text
Visitante acessa a Home
          |
          v
Abre a listagem de artigos
          |
          v
Visualiza os cards e resumos
          |
          v
Clica em "Ler artigo"
          |
          v
Servidor verifica a sessão
          |
     +----+----+
     |         |
     v         v
Sem acesso   Autorizado
     |         |
     v         v
Login       Artigo completo
```

O backend deve aplicar a mesma regra quando alguém tentar consultar diretamente o endpoint que fornece o conteúdo integral.

## 12. Conhecimentos desenvolvidos

O Meridian Blog permite praticar e consolidar conhecimentos em:

- Desenvolvimento backend com Node.js.
- Construção de APIs REST.
- Uso do Express e de middlewares.
- Tipagem estática com TypeScript.
- Organização de rotas e módulos.
- Autenticação por e-mail e senha.
- Comparação segura de senhas com `bcrypt`.
- Gerenciamento de sessões.
- Controle de acesso a recursos.
- Integração entre frontend e backend.
- Processamento de requisições HTTP.
- Configuração de variáveis de ambiente.
- Versionamento com Git e GitHub.
- Organização e documentação de projetos.

## 13. Próximas etapas

As próximas melhorias previstas para o projeto incluem:

1. Garantir a proteção dos endpoints que retornam o conteúdo integral dos artigos.
2. Separar os dados públicos dos artigos de seus conteúdos completos.
3. Implementar um mecanismo de encerramento de sessão.
4. Revisar as configurações de cookies e sessões para produção.
5. Avaliar a migração dos usuários e artigos para um banco de dados.
6. Melhorar o tratamento de erros e a validação das requisições.
7. Implementar testes para autenticação, sessões e acesso aos artigos.
8. Melhorar a experiência de navegação e o tratamento de usuários não autenticados.

## 14. Considerações finais

O Meridian Blog é um projeto de aprendizado contínuo que reúne conceitos fundamentais de desenvolvimento web, autenticação, APIs e segurança.

Seu principal diferencial funcional é permitir que qualquer visitante conheça os artigos disponíveis, mantendo a leitura integral restrita aos usuários autorizados.

A evolução do projeto busca tornar a aplicação mais segura, organizada, sustentável e preparada para uma futura implantação em produção.

**Autor:** Yan Dias  
**GitHub:** https://github.com/yandiass621  
**Projeto:** https://github.com/yandiass621/Blog-Meridian
