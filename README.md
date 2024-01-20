<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Rest Api con NestJs y PrismaORM

Aplicación básica que muestra como usar PrismaORM con NestJs para realizar una Rest API
con PostgreSQL como gestor de base de datos utilizandolo a traves de una imagen de Docker.

1. Instalar los paquetes necesarios usando el comando

```bash
npm install
```

2. Configurar el archivo `.env` teniendo en cuenta el archivo `.env.tempalte`
3. Levantar la base de datos

```bash
docker-compose up -d
```

4. Crear las migraciones de prismaORM

```bash
npx prisma migrate dev --name migracioncita
```

5. Correr el proyecto

```bash
npm run start:dev
```


