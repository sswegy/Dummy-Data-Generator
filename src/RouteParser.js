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
    const tokens = route.split("+");
        var result = {};
        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i]
            const value = await checkAndCallToken(token);
            if (token in result) 
                result[token].push(value);
            else 
                result[token] = [value];
        }
        return result;
}

export default async function parseRoute(format, route) {
    if (format === "json") {
        return generateJSON(route);
    }
    else if (format === "xml") {
        const tokens = route.split("+");
        var result = "<Data>";
    }
    else if (format === "csv") {
        const tokens = route.split("+");
        var result;
    }
    return result;
}