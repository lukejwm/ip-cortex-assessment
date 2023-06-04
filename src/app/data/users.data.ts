import {UserRequest} from "../models/users/user.model";

// create a mock user "database" that holds records for each authenticated user
const mockUserRequests: UserRequest[] = [
    {
        userId: "user1",
        startPoint: "A",
        destinationPoint: "D",
        requiredPoints: ["C"],
        costLimit: 90
    },
    {
        userId: "user2",
        startPoint: "F",
        destinationPoint: "A",
        requiredPoints: [],
        costLimit: 100
    },
    {
        userId: "user3",
        startPoint: "D",
        destinationPoint: "C",
        requiredPoints: ["F", "E"],
        costLimit: 75
    },
    {
        userId: "user4",
        startPoint: "A",
        destinationPoint: "F",
        requiredPoints: ["B", "E"],
        costLimit: 60
    },
    {
        userId: "user5",
        startPoint: "C",
        destinationPoint: "E",
        requiredPoints: [],
        costLimit: 110
    }
];