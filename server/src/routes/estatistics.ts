import {Router} from 'express';

import estatisticsController from '../controllers/estatisticsConstroller'

class ContinentRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
        
    }

    config(): void {
        this.router.get('/', estatisticsController.listAverage );
        //this.router.get('/', (req, res) => res.send(' test') );
    }

}

const estatistics = new ContinentRoutes();
export default estatistics.router;