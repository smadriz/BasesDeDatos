"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const continentesController_1 = __importDefault(require("../controllers/continentesController"));
class ContinentRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', continentesController_1.default.list);
        //this.router.get('/', (req, res) => res.send(' test') );
    }
}
const continentes = new ContinentRoutes();
exports.default = continentes.router;
