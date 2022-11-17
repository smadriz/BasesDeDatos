import { Request, Response } from 'express';
import pool from '../database';



class EstatisticsController {

    public index(req: Request, res: Response) {
        pool.query('DESCRIBE continent');
        res.json('continentes');


    }

    public async listAverage(req: Request, res: Response) {
        pool.execute(
            'SELECT * FROM average',
            function (error, result, field) {
                res.json(result);
            }
        );
    }

    public async listContinentMax(req: Request, res: Response) {
        pool.execute(
            'SELECT * FROM continentmax',
            function (error, result, field) {
                res.json(result);
            }
        );
    }
    public async listContinentMin(req: Request, res: Response) {
        pool.execute(
            'SELECT * FROM continentmin',
            function (error, result, field) {
                res.json(result);
            }
        );
    }
    public async listCountryMinmMax(req: Request, res: Response) {
        pool.execute(
            'SELECT * FROM countryminmax',
            function (error, result, field) {
                res.json(result);
            }
        );
    }
    public async listStationMinMax(req: Request, res: Response) {
        pool.execute(
            'SELECT * FROM stationminmax',
            function (error, result, field) {
                res.json(result);
            }
        );
    }

}
const estatisticsController = new EstatisticsController();
export default estatisticsController;