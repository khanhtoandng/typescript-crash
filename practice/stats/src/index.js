"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResult_1 = require("./MatchResult");
const MatchReader_1 = require("./MatchReader");
const reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
const team = 'Man United';
let manUnitedWins = reader.data.reduce((acc, line) => {
    if (line[1] === team && line[5] === MatchResult_1.MatchResult.HomeWin) {
        acc++;
    }
    else if (line[2] === team && line[5] === MatchResult_1.MatchResult.AwayWin) {
        acc++;
    }
    return acc;
}, 0);
console.log(`United win ${manUnitedWins}`);
