FROM node:18-alpine

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar configuración Jest
COPY jest.config.js ./

# Copiar código fuente
COPY src/ ./src/

# Copiar pruebas
COPY tests/ ./tests/

EXPOSE 3000

CMD ["npm", "start"]