import * as DatabaseConnector from "./DatabaseConnector.js";


async function checkAndCallToken(token) {
    let res;
    switch(token) {
        case "firstnamemale":
            res = await DatabaseConnector.getFirstNameMale();
            break;
        case "firstnamefemale":
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
        case "postcode":
            res = await DatabaseConnector.getPostCode();
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
            result[token] = value;
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