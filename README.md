<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest] js app with base authorization.

- Postgre (user data)
- Redis (session control)
- prisma (generate sql models)

## Before Start

add .env on folder

```bash
  NODE_ENV= string

  APPLICATION_PORT= number
  APPLICATION_URL= string
  ALLOWED_ORIGIN= string (http://HOST:3000 etc)

  COOKIES_SECRET= string
  SESSION_SECRET= string
  SESSION_NAME= string
  SESSION_DOMAIN= string
  SESSION_MAX_AGE= string(30d, 1w, etc.)
  SESSION_HTTP_ONLY= boolean
  SESSION_SECURE= boolean
  SESSION_FOLDER= string (folder for session (sessions: etc.))

  POSTGRES_USER= string
  POSTGRES_PASSWORD= string
  POSTGRES_HOST= string
  POSTGRES_PORT= number
  POSTGRES_DB= string
  POSTGRES_URI='postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}' string

  REDIS_USER= string
  REDIS_PASSWORD= string
  REDIS_HOST= string
  REDIS_PORT= number
  REDIS_URI='redis://:${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}'
```

## Compile and run the project

```bash
npm install //get dependencies

npx prisma generate //generate prisma models

npx prisma db push //push in base

docker compose up -d //up database (redis/postgre)

npm run start:dev //start nest app
```
