// Interfaces to be used to implement the Simple Graph to be used in Path Finding Algorithm
export interface Edge {
    startPoint: string;
    endPoint: string;
    cost: number;
    traffic: number;
}

export interface Point {
    pointId: string;
    neighbours: string[];
}

export interface Graph {
    points: Point[];
    edges: Edge[];
    totalCost: number;
    totalTraffic: number;
}