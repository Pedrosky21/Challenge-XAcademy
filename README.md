# Fifa App

Este proyecto **fullstack** está compuesto por tres partes:

* **Base de Datos:** MySQL
* **Backend:** Node.js con Express
* **Frontend:** Angular

## Instrucciones para ejecutar la aplicación

### 1. Base de Datos (MySQL)

En sistemas Windows, iniciar el servicio de MySQL ejecutando el siguiente comando en la terminal (bash o CMD):

```bash
net start mysql80
```

### 2. Backend (Node.js + Express)

Desde la carpeta del backend:

```bash
npm install
node app.js
```


### 3. Frontend (Angular)

Desde la carpeta del frontend:

```bash
npm install
ng serve
```


## Rutas del Backend

### Autenticación (`/api/auth`)

* `POST /api/auth/register` — Registrar un nuevo usuario
* `POST /api/auth/login` — Iniciar sesión

### Jugadoras (`/api/femalePlayers`)

* `GET /api/femalePlayers/` — Obtener todas las jugadoras

### Jugadores (`/api/malePlayers`)

* `GET /api/malePlayers/` — Obtener todos los jugadores masculinos
* `GET /api/malePlayers/export` — Exportar los jugadores masculinos a un archivo CSV
* `GET /api/malePlayers/:id` — Obtener un jugador masculino por ID
* `POST /api/malePlayers/` — Crear un nuevo jugador masculino
* `PUT /api/malePlayers/:id` — Actualizar un jugador masculino por ID

## Consideraciones

> Por falta de tiempo, el acceso a la base de datos de jugadoras **está disponible desde el backend**, pero **aún no ha sido integrado en el frontend**.

