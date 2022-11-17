"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class EstatisticsController {
    index(req, res) {
        database_1.default.query('DESCRIBE continent');
        res.json('continentes');
    }
    listAverage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.execute('SELECT * FROM average', function (error, result, field) {
                res.json(result);
            });
        });
    }
    listContinentMax(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.execute('SELECT * FROM continentmax', function (error, result, field) {
                res.json(result);
            });
        });
    }
    listContinentMin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.execute('SELECT * FROM continentmin', function (error, result, field) {
                res.json(result);
            });
        });
    }
    listCountryMinmMax(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.execute('SELECT * FROM countryminmax', function (error, result, field) {
                res.json(result);
            });
        });
    }
    listStationMinMax(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.execute('SELECT * FROM stationminmax', function (error, result, field) {
                res.json(result);
            });
        });
    }
}
const estatisticsController = new EstatisticsController();
exports.default = estatisticsController;
