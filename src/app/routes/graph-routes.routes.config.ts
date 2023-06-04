import {CommonRoutesConfig} from './common.routes.config';
import express from 'express';

export class GraphRoutesRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route("/routes")
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send('List of all routes')
            })
            .post((req: express.Request, res: express.Response) => {
                res.status(200).send('Post to routes')
            });

        this.app.route('/routes/:routeId')
            .all((req: express.Request, res: express.Response) => {
               // need to implement the middleware before setting this up
               next();
            })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`GET requested for id ${req.params.routeId}`);
            })
            .put((req: express.Request, res: express.Response) => {
                res.status(200).send(`PUT requested for id ${req.params.routeId}`);
            })
            .patch((req: express.Request, res: express.Response) => {
                res.status(200).send(`PATCH requested for id ${req.params.routeId}`);
            })
            .delete((req: express.Request, res: express.Response) => {
                res.status(200).send(`DELETE requested for id ${req.params.routeId}`);
            });

        return this.app;
    }

}
