# Etapa 1: construcción
FROM node:20-alpine AS build

WORKDIR /app

# Copia package.json
COPY package*.json ./

# Instala dependencias
RUN npm install --include=dev

# Copia el resto de archivos
COPY . .

# Construye la aplicación
RUN npm run build

# Etapa 2: servir con Nginx
FROM nginx:stable-alpine

# Copia la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia los archivos construidos
COPY --from=build /app/dist /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]