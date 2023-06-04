import { expect } from 'chai';
import { stub, SinonStub } from 'sinon';
import express, { Request, Response, NextFunction } from 'express';

import GraphRouteMiddleware from "../../../app/api/middleware/graph-route.middleware";
import graphRoutesService from "../../../app/api/services/graph-routes.service";

describe('GraphRouteMiddlewareTestSuite', () => {
   let req: Request;
});

// describe('GraphRouteMiddleware', () => {
//     let middleware: GraphRouteMiddleware;
//     let req: Request;
//     let res: Response;
//     let next: NextFunction;
//
//     beforeEach(() => {
//         middleware = new GraphRouteMiddleware();
//         req = {} as Request;
//         res = {
//             status: stub().returnsThis(),
//             send: stub(),
//         } as unknown as Response;
//         next = stub() as NextFunction;
//     });
//
//     afterEach(() => {
//         // Restore stubs after each test
//         (graphRoutesService.readById as SinonStub).restore();
//     });
//
//     describe('validateRequiredGraphRouteBodyFields', () => {
//         it('should call next if all required fields are present in the request body', async () => {
//             req.body = {
//                 userId: '123',
//                 startPoint: 'A',
//                 endPoint: 'B',
//                 costLimit: 10,
//             };
//
//             await middleware.validateRequiredGraphRouteBodyFields(req, res, next);
//
//             expect(next).to.be.calledOnce;
//         });
//
//         it('should send a 400 response if any required fields are missing in the request body', async () => {
//             req.body = {
//                 userId: '123',
//                 startPoint: 'A',
//                 // Missing endPoint and costLimit
//             };
//
//             await middleware.validateRequiredGraphRouteBodyFields(req, res, next);
//
//             expect(res.status).to.be.calledWith(400);
//             expect(res.send).to.be.calledWith({
//                 error: 'Missing required fields userId, startPoint, endPoint, and costLimit',
//             });
//         });
//     });
//
//     describe('validatePointsInRequest', () => {
//         it('should call next', async () => {
//             await middleware.validatePointsInRequest(req, res, next);
//
//             expect(next).to.be.calledOnce;
//         });
//     });
//
//     describe('validateRouteExists', () => {
//         it('should call next if the route does not exist', async () => {
//             const readByIdStub = stub(graphRoutesService, 'readById').resolves(null);
//
//             req.body = {
//                 routeId: '123',
//             };
//
//             await middleware.validateRouteExists(req, res, next);
//
//             expect(readByIdStub).to.be.calledOnceWith('123');
//             expect(next).to.be.calledOnce;
//         });
//
//         it('should send a 400 response if the route exists', async () => {
//             const readByIdStub = stub(graphRoutesService, 'readById').resolves({
//                 // Mocking an existing route
//                 id: '123',
//             });
//
//             req.body = {
//                 routeId: '123',
//             };
//
//             await middleware.validateRouteExists(req, res, next);
//
//             expect(readByIdStub).to.be.calledOnceWith('123');
//             expect(res.status).to.be.calledWith(400);
//             expect(res.send).to.be.calledWith({ error: 'Route for user already exists' });
//         });
//     });
// });