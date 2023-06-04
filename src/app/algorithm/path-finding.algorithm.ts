import {Graph, Edge} from "../models/graph/graph.models";
import {UserRequest} from "../models/users/user.model";

class PathFinderAlgorithm {
    world: Graph;

    constructor(world: Graph) {
        this.world = world;
    }

    private permute(arr: number[]): number[][] {
        const permutations: number[][] = [];

        function generatePermutations(remaining: number[], current: number[]): void {
            if (remaining.length === 0) {
                permutations.push([...current]);
                return;
            }

            for (let i = 0; i < remaining.length; i++) {
                const newCurrent = [...current, remaining[i]];
                const newRemaining = remaining.filter((_, index) => index !== i);
                generatePermutations(newRemaining, newCurrent);
            }
        }

        generatePermutations(arr, []);
        return permutations;
    }

    private getCompleteRoute(requiredSubRoute: number[], permutation: number[]): Graph {
        const route = [...requiredSubRoute, ...permutation];
        let cost = 0;
        let traffic = 0;

        for (let i = 0; i < route.length - 1; i++) {
            const startPoint = this.world.points[route[i]].pointId;
            const endPoint = this.world.points[route[i + 1]].pointId;
            const edge = this.findEdge(startPoint, endPoint);
            if (edge) {
                cost += edge.cost;
                traffic += edge.traffic;
            }
        }

        return { points: this.world.points, edges: this.world.edges, totalCost: cost, totalTraffic: traffic };
    }

    private findEdge(startPoint: string, endPoint: string): Edge | undefined {
        return this.world.edges.find(edge => edge.startPoint === startPoint && edge.endPoint === endPoint);
    }

    createNewRouteForUser(userRequest: UserRequest): Graph | null {
        const requiredSubRoute = [userRequest.startPoint, ...userRequest.requiredPoints, userRequest.destinationPoint]
            .map(pointId => this.world.points.findIndex(point => point.pointId === pointId));
        const remainingNodes = this.world.points.map((_, index) => index)
            .filter(index => !requiredSubRoute.includes(index));

        const permutations = this.permute(remainingNodes);
        let optimalPath: Graph | null = null;
        let lowestTrafficCost = Infinity;

        for (const permutation of permutations) {
            const path = this.getCompleteRoute(requiredSubRoute, permutation);
            const isValidPath = path.totalCost <= userRequest.costLimit;

            if (isValidPath && path.totalTraffic < lowestTrafficCost) {
                lowestTrafficCost = path.totalTraffic;
                optimalPath = path;
            }
        }

        return optimalPath;
    }
}



//export default new PathFinderAlgorithm()
