import {GraphRouteDto} from "../dto/graph-route.dto";
import shortid from 'shortid';
import debug from 'debug';

const log: debug.IDebugger = debug('app:in-memory-dao');

class GraphRouteDao {
    routes: Array<GraphRouteDto> = [];

    constructor() {
        log('Created new instance of UsersDao');
    }

    async createNewRouteForUser(route: GraphRouteDto) {
        // for now, just generate the route id and generate the rest when the algorithm is implemented
        route.routeId = shortid.generate();
        this.routes.push(route);
        return route.routeId;
    }

    async getRoutes() {
        return this.routes;
    }

    async getRouteById(routeId: string) {
        return this.routes;
    }

    async putRouteById(routeId: string, route: GraphRouteDto) {
        const objIndex = this.routes.findIndex(
            (obj: GraphRouteDto) => obj.routeId === routeId
        );

        this.routes.splice(objIndex, 1, route);
        return `${route.routeId} updated via put`;
    }

    async removeRouteById(routeId: string) {
        const objIndex = this.routes.findIndex(
            (obj: GraphRouteDto) => obj.routeId === routeId
        );

        this.routes.splice(objIndex, 1);
        return `${routeId} removed`;
    }
}

export default new GraphRouteDao();