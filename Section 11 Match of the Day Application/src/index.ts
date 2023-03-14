import { MatchReader } from "./composition refactor/MatchReader";
import { Summary } from "./Summary";

// Load and Parse
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// Analyse the data.
const summary = Summary.winsAnalysisWithHtmlReport('Watford');

// Report the data. 
summary.buildAndPrintReport(matchReader.matches);