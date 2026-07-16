const request = require('supertest');
const { app } = require('../../src/app');

describe('Pruebas de Integración', () => {

    test('GET /health responde correctamente', async () => {

        const response = await request(app)
            .get('/health')
            .expect(200);

        expect(response.body.status).toBe('healthy');

    });

});