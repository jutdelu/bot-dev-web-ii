# Bot Telegram para martéria Dev Web 2

O projeto consiste no desenvolvimento de um bot para Telegram utilizando NodeJS, TS, Prisma e PostgreSQL.



## Iniciando o Projeto

Instalar TS

```bash
npm i typescript ts-node ts-node-dev @types/node --save-dev
```

Iniciar o NPM no Projeto

```bash
npm init
```

Incluir no arquivo package.json script para execução em 'dev'

```bash
"scripts": {
    "dev": "ts-node-dev --transpile-only --ignore-watch node_modules --no-notify src/index.ts"}
```

Instalar node-telegram-bot-api e tipos do TS
```bash
npm i node-telegram-bot-api
npm i @types/node-telegram-bot-api --save -dev
```

Para rodar
```bash
npm run dev
```
## Ambiente
Criar um arquivo .env, com o token do bot
```bash
BOT_TOKEN=xyz
```

e instalar
```bash
npm i dotenv
```
## Inicializando o Docker
Necessário arquivo .yml com configurações do banco de dados, para rodar

```bash
docker compose up
```

Identificar hash do container

```bash
docker ps
```

Acessando
```bash
docker exec -it <hash> bin/bash
```
## Inicializando Prisma
Inciando o Prisma no projeto
```bash
npx prisma init
```

Gerar modelos no prisma
```bash
npx prisma generate
```

Lembrar de atualizar o DATABASE_URL, gerado no arquivo .env, com configurações definidas no postgres

Rodar a migração para criação das tabelas
```bash
npx prisma migrate dev
```
