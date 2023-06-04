import { expect } from 'chai';
import { Graph, UserRequest } from '';
import world from '../../app/data/graph.data';
import { PathFinderAlgorithm } from './path-finder-algorithm'; // Assuming you have exported the class

describe('PathFinderAlgorithm', () => {
    const pathFinder = new PathFinderAlgorithm(world);

    const mockUserRequests: UserRequest[] = [
        {
            userId: 'user1',
            startPoint: 'A',
            destinationPoint: 'D',
            requiredPoints: ['C'],
            costLimit: 90,
        },
        {
            userId: 'user2',
            startPoint: 'F',
            destinationPoint: 'A',
            requiredPoints: [],
            costLimit: 100,
        },
        {
            userId: 'user3',
            startPoint: 'D',
            destinationPoint: 'C',
            requiredPoints: ['F', 'E'],
            costLimit: 75,
        },
        {
            userId: 'user4',
            startPoint: 'A',
            destinationPoint: 'F',
            requiredPoints: ['B', 'E'],
            costLimit: 60,
        },
        {
            userId: 'user5',
            startPoint: 'C',
            destinationPoint: 'E',
            requiredPoints: [],
            costLimit: 110,
        },
    ];

    it('should return the optimal route for each user request', () => {
        const expectedRoutes: Graph[] = [
            // Expected graph objects for each user request
        ];

        for (let i = 0; i < mockUserRequests.length; i++) {
            const userRequest = mockUserRequests[i];
            const expectedRoute = expectedRoutes[i];

            const actualRoute = pathFinder.createNewRouteForUser(userRequest);

            expect(actualRoute).to.deep.equal(expectedRoute);
        }
    });
});
