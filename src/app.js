const express = require('express');
const { Pool } = require('pg');
const redis = require('redis');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Configuración de PostgreSQL
const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'testdb',
    user: process.env.DB_USER || 'testuser',
    password: process.env.DB_PASSWORD || 'testpass',
});

// Cliente de Redis
let redisClient = null;

const connectRedis = async () => {
    try {
        redisClient = redis.createClient({
            url: `redis://${process.env.REDIS_HOST || 'localhost'}:${process.env.REDIS_PORT || 6379}`
        });

        await redisClient.connect();
        console.log("✅ Conectado a Redis");
    } catch (error) {
        console.log(" Error Redis:", error.message);
    }
};

app.use(express.json());

// Endpoint de prueba
app.get('/health', (req, res) => {
    res.json({
        status: "healthy",
        timestamp: new Date().toISOString()
    });
});

// Iniciar servidor
if (require.main === module) {
    app.listen(port, async () => {
        console.log(` Servidor iniciado en puerto ${port}`);
        await connectRedis();
    });
}

module.exports = { app, pool, redisClient };