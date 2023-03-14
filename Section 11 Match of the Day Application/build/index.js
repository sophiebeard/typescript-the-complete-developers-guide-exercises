"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./composition refactor/MatchReader");
const Summary_1 = require("./Summary");
// Load and Parse
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
// Analyse the data.
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Watford');
// Report the data. 
summary.buildAndPrintReport(matchReader.matches);
