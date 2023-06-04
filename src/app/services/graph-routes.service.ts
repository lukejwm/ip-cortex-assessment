import {CRUD} from "../interfaces/crud.interface";
import {GraphRouteDto} from "../models/graph-routes/dto/graph-route.dto";
import GraphRouteDao from "../models/graph-routes/dao/graph-route.dao";

class GraphRoutesService implements CRUD {
    async create(resource: GraphRouteDto): Promise<any> {
        return GraphRouteDao.createNewRouteForUser(resource);
    }

    async deleteById(id: string): Promise<string> {
        return GraphRouteDao.removeRouteById(id);
    }

    async list(limit: number, page: number): Promise<any> {
        return GraphRouteDao.getRoutes();
    }

    async putById(id: string, resource: any): Promise<string> {
        return GraphRouteDao.putRouteById(id, resource);
    }

    async readById(id: string): Promise<any> {
        return GraphRouteDao.getRouteById(id);
    }

    // extra service functions that aren't defined in CRUD interface
    async getRoutesByUserId(): Promise<any> {
        return Promise.resolve(undefined);
    }
}

export default new GraphRoutesService();