import {Server} from "../../src/server";
import express from "express";
import request from "supertest";

describe('server.ts', () => {
    const server: express.Application = new Server().start();

    it('GET / request should return a response code 200', async () => {
        const response = await request(server).get('/');
        expect(response.status).toEqual(200);
    });

    it('GET /api request should return a response code 200', async () => {
        const response = await request(server).get('/api');
        expect(response.status).toEqual(200);
    });

    it('GET /api/v1 request should return a response code 200', async () => {
        const response = await request(server).get('/api/v1');
        expect(response.status).toEqual(200);
    });
});
