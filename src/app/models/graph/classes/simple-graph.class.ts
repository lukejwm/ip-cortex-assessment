import {Point, Edge} from "../interfaces/simple-graph.interface";

// implement a very simple, cyclic, bi-directional graph to use as a data model for the "world"
export class SimpleGraph {
    points: Point[] = [];
    edges: Edge[] = [];

    constructor() {
        // initialise all points in the graph with all neighbours specified
        this.points = [
            { pointId: "A", neighbours: ["B", "C", "D"] },
            { pointId: "B", neighbours: ["A", "C", "E", "F"] },
            { pointId: "C", neighbours: ["A", "B", "D"] },
            { pointId: "D", neighbours: ["A", "C", "E", "F"] },
            { pointId: "E", neighbours: ["B", "D", "F"] },
            { pointId: "F", neighbours: ["B", "D", "E"] }
        ];

        // create the graph with edges for each point
        this.generateEdgesForEachPoint();
    }

    private generateEdgesForEachPoint = () => {
        this.points.forEach((point) => {
            const { pointId, neighbours } = point;

            // Create edges for each neighbor
            neighbours.forEach((neighbourId) => {
                const edge: Edge = {
                    startPoint: pointId,
                    endPoint: neighbourId,
                    cost: this.getRandomNumber(1, 15),
                    traffic: this.getRandomNumber(1, 15)
                };
                this.edges.push(edge);
            });
        });
    };

    private getRandomNumber = (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
}