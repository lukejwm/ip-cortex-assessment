import express from 'express';
import graphRoutesService from "../services/graph-routes.service";
import debug from 'debug';

const log: debug.IDebugger = debug('app:users-controller');
class GraphRouteMiddleware {
    async extractRouteId() {
        // TODO: implement me!
    }

    async extractUserId() {
        // TODO: implement me!
    }

    // validate all the required body fields made in an http request
    async validateRequiredGraphRouteBodyFields(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        if (req.body &&
            req.body.userId &&
            req.body.startPoint &&
            req.body.endPoint &&
            req.body.costLimit) {
            next();
        } else {
            res.status(400).send({
                error: `Missing required fields userId, startPoint, endPoint and costLimit`,
            });
        }
    }

    // validate that all start, end and required points exist in "the world"
    async validatePointsInRequest(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        next();
    }

    // validate route exists - do not need validation for user id as user is already authenticated
    async validateRouteExists(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const route = await graphRoutesService.readById(req.body.routeId);

        if (route) {
            res.status(400).send({error: 'Route for user already exists'});
        } else {
            next();
        }
    }
}

export default new GraphRouteMiddleware();