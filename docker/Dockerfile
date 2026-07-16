FROM node:18-alpine

WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el proyecto
COPY . .

# Exponer el puerto
EXPOSE 3000

# Iniciar la aplicación
CMD ["npm", "start"]