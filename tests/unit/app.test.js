const request = require('supertest');
const { app } = require('../../src/app');

describe('Pruebas Unitarias', () => {

    test('GET /health responde correctamente', async () => {

        const response = await request(app)
            .get('/health')
            .expect(200);

        expect(response.body.status).toBe('healthy');
        expect(response.body).toHaveProperty('timestamp');

    });

});