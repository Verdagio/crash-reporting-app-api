import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as cors from 'cors';

import { Router } from '../routers/router';

class App {
    public app: express.Application;
    public router: Router = new Router();

    constructor(){
        this.app = express();
        this.conf();
        this.router.routes(this.app);
    }

    private conf():void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(cors());
    }
}
export default new App().app;