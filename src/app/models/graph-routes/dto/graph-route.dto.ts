// Routes that describe routes that traverse through a graph will be called routes to avoid confusion with API routes
import {Graph} from "../../graph/graph.models";

export interface GraphRouteDto {
    routeId: string;
    userId: string;     // map route to user so that we can query all routes requested by a user
    routePath: Graph; //a route is effectively a sub-graph, so it will be initialised and then overwritten
    routeCost: number;
    routeTraffic: number;
}