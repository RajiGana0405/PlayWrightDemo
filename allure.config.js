const { json } = require("stream/consumers");
const { outputDir } = require("./playwright.config");

const config = {
    reporter: [
    ['line'],
    ["json",{outputFile:"test-result.json"}],
    ['allure-playwright',{outputFolder:'allure-results'}]],
    };
    
    
    module.exports = config;