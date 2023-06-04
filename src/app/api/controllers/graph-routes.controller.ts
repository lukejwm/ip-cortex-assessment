import express from 'express';
import GraphRoutesService from "../services/graph-routes.service";
import debug from 'debug';
import graphRoutesService from "../services/graph-routes.service";

const log: debug.IDebugger = debug("app:api:controllers:graph-routes-controller");

class GraphRoutesController {
    async listAllRoutes(req: express.Request, res: express.Response) {
        const routes = await graphRoutesService.list(100, 0);
        res.status(200).send(routes);
    }

    async getRouteById(req: express.Request, res: express.Response) {
        const routes = await graphRoutesService.readById(req.body.id);
        res.status(200).send(routes);
    }

    async getRoutesByUserId(req: express.Request, res: express.Response) {
        const routes = await graphRoutesService.readById(req.body.id);
        res.status(200).send(routes);
    }

    // TODO: this is the part that will take in a user object as input and use this to derive a route
    async createGraphRoute(req: express.Request, res: express.Response) {
        req.body.routeId = "routeId1";
        const routeId = await graphRoutesService.create(req.body);
        res.status(201).send({ id: routeId });
    }

    async put(req: express.Request, res: express.Response) {
        req.body.routeId = "routeId1";
        log(await graphRoutesService.putById(req.body.id, req.body));
        res.status(204).send();
    }

    async removeRoute(req: express.Request, res: express.Response) {
        log(await graphRoutesService.deleteById(req.body.id));
        res.status(204).send();
    }
}

export default new GraphRoutesController()