"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estatisticsConstroller_1 = __importDefault(require("../controllers/estatisticsConstroller"));
class ContinentRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', estatisticsConstroller_1.default.listAverage);
        //this.router.get('/', (req, res) => res.send(' test') );
    }
}
const estatistics = new ContinentRoutes();
exports.default = estatistics.router;
