import * as DatabaseConnector from "./DatabaseConnector.js";


async function checkAndCallToken(token) {
    let res;
    switch(token) {
        case "malename":
            res = await DatabaseConnector.getFirstNameMale();
            break;
        case "femalename":
            res = await DatabaseConnector.getFirstNameFemale();
            break;
        case "lastname":
            res = await DatabaseConnector.getLastName();
            break;
        case "country":
            res = await DatabaseConnector.getCountry();
            break;
        case "city":
            res = await DatabaseConnector.getCity();
            break;
        case "address":
            res = await DatabaseConnector.getAddress();
            break;
        case "zipcode":
            res = await DatabaseConnector.getZipCode();
            break;
    }
    return res;
}

async function generateJSON(route) {
    const tokens = route.split("+").sort();
    var result = {};
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        const value = await checkAndCallToken(token);
        if (token in result) 
            result[token].push(value);
        else 
            result[token] = [value];
    }
    return result;
}

async function generateXML(route) {
    const tokens = route.split("+").sort();
    var result = ""
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        const value = await checkAndCallToken(token);
        if (token != tokens[i-1])
            result += `<${token}>\n`;
        result += `    <${token}>${value}</${token}>\n`;
        if (token != tokens[i+1])
            result += `</${token}>\n`;
    }
    return result;
}

async function generateCSV(route) {
    const tokens = route.split("+").sort();
    var result = ""
    for (let i = 0; i < tokens.length; i++) {
        result += await checkAndCallToken(tokens[i]);
        if (i !== tokens.length-1)
            result += ", ";
    }
    return result;
}

export default async function parseRoute(format, route) {
    switch(format) {
    case "json": 
        return generateJSON(route);
    case "xml":
        return generateXML(route);
    case "csv":
        return generateCSV(route);
    default:
            break;
    }
}