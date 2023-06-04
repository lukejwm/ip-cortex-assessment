import express from 'express';

// This is the abstract class that all other API routes will extend from
export abstract class CommonRoutesConfig {
    app: express.Application;
    name: string;

    constructor(app: express.Application, name: string) {
        this.app = app;
        this.name = name;
    }

    getName() {
        return this.name;
    }

    abstract configureRoutes(): express.Application;
}