# Laboratorio 4 — Contenedores y Despliegue con Docker

**Universidad de Antioquia — Facultad de Ingeniería**
**Curso:** Cloud Computing
**Profesor:** Juan Pablo Arango
**Integrantes:** Jose Miguel Monsalve Marín, Miguel Ángel Agudelo Vera, Camilo Andrés Pérez Padilla

## Descripción

Aplicación web simple en **Node.js + Express** empaquetada en un contenedor Docker. Expone dos endpoints HTTP:

| Endpoint | Descripción |
|----------|-------------|
| `GET /` | Devuelve el mensaje `¡Hola desde Docker!` |
| `GET /suma?a=2&b=3` | Suma dos números y devuelve un JSON con el resultado |

## Estructura del proyecto

```
.
├── app.js
├── package.json
├── Dockerfile
├── .dockerignore
├── capturas/
└── README.md
```

## Imagen en Docker Hub

https://hub.docker.com/r/miguelagudelo2/miapp-docker

```bash
docker pull miguelagudelo2/miapp-docker:v1
docker run -d -p 3000:3000 miguelagudelo2/miapp-docker:v1
```

Luego abrir http://localhost:3000

## Pasos realizados

### 1. Dockerfile

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
```

<img width="1366" height="725" alt="image" src="https://github.com/user-attachments/assets/c4ec7424-4fa3-45be-b311-23585d9abb31" />


### 2. Construcción de la imagen

```bash
docker build -t miapp-docker:v1 .
```

<img width="1099" height="494" alt="image" src="https://github.com/user-attachments/assets/533fcd1a-69dd-4f16-884c-3a775a1ee213" />


### 3. Imágenes locales

```bash
docker images
```

<img width="1255" height="710" alt="image" src="https://github.com/user-attachments/assets/7fea5d8b-c776-4357-8bd3-7cd32c9ff46f" />

### 4. Ejecución del contenedor

```bash
docker run -d -p 3000:3000 --name miapp miapp-docker:v1
docker ps
```

<img width="1098" height="390" alt="image" src="https://github.com/user-attachments/assets/3a77d0d7-28ad-4f5f-aa8a-1f89cf0ee868" />


### 5. Prueba en el navegador: endpoint `/`

<img width="1366" height="629" alt="image" src="https://github.com/user-attachments/assets/17b7cf48-61ea-44d0-8fec-bf259626cfda" />


### 6. Prueba en el navegador: endpoint `/suma`

<img width="1366" height="711" alt="image" src="https://github.com/user-attachments/assets/3c946bc6-53d0-432a-b3fe-287b5300b23a" />


### 7. Publicación en Docker Hub

```bash
docker tag miapp-docker:v1 miguelagudelo2/miapp-docker:v1
docker login
docker push miguelagudelo2/miapp-docker:v1
```

<img width="1169" height="579" alt="image" src="https://github.com/user-attachments/assets/f217468f-f94e-4054-b18d-f6e14e2f5055" />


### 8. Imagen publicada en Docker Hub

<img width="1366" height="723" alt="image" src="https://github.com/user-attachments/assets/6ad6b255-e5ab-4696-b5f8-ff2084cab331" />


## Comandos de gestión utilizados

```bash
docker ps              # contenedores en ejecución
docker logs miapp      # logs del contenedor
docker stop miapp      # detener el contenedor
docker ps -a           # todos los contenedores
docker rm miapp        # eliminar el contenedor
```

## Video

Link del video: 
