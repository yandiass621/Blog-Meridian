# API de acesso por e-mail — TypeScript do zero

Esta é uma API pequena: ela recebe um e-mail e responde se a pessoa pode entrar em uma página.

## 1. O que é uma API?

Uma API é uma porta de comunicação entre o site e o servidor. O site envia uma **requisição**, e a API devolve uma **resposta**.

Neste projeto, o site enviará:

```json
{ "email": "voce@exemplo.com" }
```

E a API responderá:

```json
{ "email": "voce@exemplo.com", "hasAccess": true }
```

`hasAccess` será `true` para quem está autorizado e `false` para os demais.

## 2. Arquivos importantes

```
src/
├── server.ts              # Liga e configura o servidor
├── data/allowedEmails.ts  # Lista de e-mails que têm acesso
└── routes/access.ts       # Regra da rota de verificação
```

O TypeScript é JavaScript com tipos. Por exemplo, `email: string` diz que `email` deve ser texto. Isso encontra vários erros antes de a API ser usada.

## 3. Instalar e iniciar

No terminal, dentro desta pasta, rode uma vez:

```powershell
npm install
```

Crie seu arquivo de configuração a partir do exemplo:

```powershell
Copy-Item .env.example .env
```

Depois inicie o servidor:

```powershell
npm run dev
```

Quando aparecer `API disponível em http://localhost:3000`, ela está pronta.

## 4. Dar acesso a alguém

Abra `src/data/allowedEmails.ts` e acrescente o e-mail na lista:

```ts
export const allowedEmails = [
  'voce@exemplo.com',
  'novo-cliente@exemplo.com',
];
```

Salve o arquivo. O servidor em desenvolvimento reinicia automaticamente.

## 5. Testar a rota

Com o servidor rodando, abra outro terminal e envie:

```powershell
Invoke-RestMethod -Method Post `
  -Uri http://localhost:3000/api/access/check `
  -ContentType 'application/json' `
  -Body '{"email":"voce@exemplo.com"}'
```

Troque o e-mail por um que não esteja na lista para ver `hasAccess: false`.

## 6. Entendendo a rota

A rota é `POST /api/access/check`:

- `POST` envia um dado para a API.
- `/api/access` é o endereço base definido em `server.ts`.
- `/check` é a parte definida em `routes/access.ts`.
- `express.json()` lê o JSON enviado pelo site.
- A função normaliza o e-mail, removendo espaços e transformando-o em minúsculas antes de compará-lo.

## Próxima evolução

Esta primeira versão guarda e-mails no código, ideal para aprender e testar. Para uso real, o próximo passo é salvar permissões em banco de dados e criar autenticação: consultar um e-mail sozinho não prova quem é a pessoa.
