import {CommonRoutesConfig} from './common.routes.config';
import express from 'express';
import GraphRoutesController from "../controllers/graph-routes.controller";
import GraphRouteMiddleware from "../middleware/graph-route.middleware";

export class GraphRoutesApiRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'GraphRoutesApiRoutes');
    }

    configureRoutes(): express.Application {
        /**
         * @swagger
         * /routes:
         *  get:
         *      summary: Get all available derived routes
         *      tags:
         *          - GraphRoute
         *      response:
         *          '200':
         *              description: Successful Response
         */
        this.app.route('/routes')
            .get(GraphRoutesController.listAllRoutes)
            .post(
                GraphRouteMiddleware.validateRequiredGraphRouteBodyFields,
                GraphRoutesController.createGraphRoute
            );

        this.app.param('routeId', GraphRouteMiddleware.extractRouteId);
        this.app.route('/routes/:routeId')
            .all(GraphRouteMiddleware.validateRouteExists)
            .get(GraphRoutesController.getRouteById)
            .delete(GraphRoutesController.removeRoute)

        this.app.put('/routes/:routeId', [
            GraphRouteMiddleware.validateRequiredGraphRouteBodyFields,
            GraphRoutesController.put,
        ]);

        this.app.param('routeId', GraphRouteMiddleware.extractUserId);
        this.app.route('/routes/:userId')
            .get(GraphRoutesController.getRoutesByUserId)

        return this.app;
    }

}
