import { Point, Edge, Graph } from "../models/graph/graph.models";

const worldPoints: Point[] = [
    { pointId: "A", neighbours: ["B", "C", "D"] },
    { pointId: "B", neighbours: ["A", "C", "E", "F"] },
    { pointId: "C", neighbours: ["A", "B", "D"] },
    { pointId: "D", neighbours: ["A", "C", "E", "F"] },
    { pointId: "E", neighbours: ["B", "D", "F"] },
    { pointId: "F", neighbours: ["B", "D", "E"] }
];

const worldEdges: Edge[] = generateMockEdgesForEachPoint();

function generateMockEdgesForEachPoint(): Edge[] {
    const edges: Edge[] = [];

    worldPoints.forEach((point) => {
        const { pointId, neighbours } = point;

        // Create edges for each neighbor
        neighbours.forEach((neighbourId) => {
            const edge: Edge = {
                startPoint: pointId,
                endPoint: neighbourId,
                cost: getRandomNumber(1, 15),
                traffic: getRandomNumber(1, 15)
            };
            edges.push(edge);
        });
    });

    return edges;
}

function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const world: Graph = {
    points: worldPoints,
    edges: worldEdges,
    totalCost: worldEdges.reduce((sum, edge) => sum + edge.cost, 0),
    totalTraffic: worldEdges.reduce((sum, edge) => sum + edge.traffic, 0)
}