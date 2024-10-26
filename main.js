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
const axios_1 = __importDefault(require("axios"));
const inquirer_1 = __importDefault(require("inquirer"));
function fetchWeatherData(location, format, u) {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
            method: 'GET',
            url: 'https://yahoo-weather5.p.rapidapi.com/weather',
            params: {
                location,
                format,
                u
            },
            headers: {
                'X-RapidAPI-Key': 'f02251ccebmshdfad8df46ea52f8p15aaa6jsn132f93690f1c',
                'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
            }
        };
        try {
            const response = yield axios_1.default.request(options);
            console.log(response.data);
        }
        catch (error) {
            console.error(error);
        }
    });
}
function getUserInput() {
    return __awaiter(this, void 0, void 0, function* () {
        return inquirer_1.default.prompt([
            {
                type: 'input',
                name: 'location',
                message: 'Enter the location:'
            },
            {
                type: 'list',
                name: 'format',
                message: 'Select the format:',
                choices: ['json', 'xml']
            },
            {
                type: 'list',
                name: 'u',
                message: 'Select the unit for temperature:',
                choices: ['f', 'c']
            }
        ]);
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userInput = yield getUserInput();
            const { location, format, u } = userInput;
            yield fetchWeatherData(location, format, u);
        }
        catch (error) {
            console.error('An error occurred:', error);
        }
    });
}
main();
