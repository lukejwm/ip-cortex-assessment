import express from 'express';
import * as http from 'http';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import {CommonRoutesConfig} from './api/routes/common.routes.config';
import {GraphRoutesApiRoutes} from './api/routes/graph-routes.routes.config';
import debug from 'debug';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
// use port 3000 to avoid using ones that are typically associated with the frontend (i.e. 8080, 8000 or 443)
const port = 3000;
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');

// add middleware to parse all incoming requests as JSON
app.use(express.json());

// add middleware to allow cross-origin requests
app.use(cors());

// Prepare the expressWinston logging middleware configuration,
// this will log all HTTP requests handled by Express.js, generally better to use
// compared to console.log()
const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
};

if (!process.env.DEBUG) {
    loggerOptions.meta = false; // when not debugging, log requests as one-liners
    // silence debugger during testing by watching for Mocha it() functions
    if (typeof global.it === 'function') {
        loggerOptions.level = 'http';
    }
}

// initialize the logger with the above configuration
app.use(expressWinston.logger(loggerOptions));

routes.push(new GraphRoutesApiRoutes(app));

// simple route to make sure everything is working properly
const runningMessage = `Server running at http://localhost:${port}`;
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage)
});

server.listen(port, () => {
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
    // only exception to avoiding console.log(), because need to know when the server has started up
    console.log(runningMessage);
});