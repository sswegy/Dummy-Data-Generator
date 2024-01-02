import * as DatabaseConnector from "./DatabaseConnector.js";


async function checkAndCallToken(token) {
    let res;
    switch(token) {
        case "firstname":
            res = await DatabaseConnector.getFirstName();
            break;
        case "lastname":
            res = await DatabaseConnector.getLastName();
            break;
        case "country":
            DatabaseConnector.getCountry();
            break;
        case "city":
            DatabaseConnector.getCity();
            break;
        case "address":
            DatabaseConnector.getAddress();
            break;
        case "postcode":
            DatabaseConnector.getPostCode();
            break;
    }
    return res;
}

export default async function parseRoute(format, route) {
    if (format === "json") {
        const tokens = route.split("+");
        var result = {};
        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i]
            const value = await checkAndCallToken(token);
            result[token] = value;
            console.log(value);
            console.log(result);
        }
        console.log(result);
        return result;
    }
    else if (format === "xml") {
        const tokens = route.split("+");
        var result;
    }
    else if (format === "csv") {
        const tokens = route.split("+");
        var result;
    }
    return result;
}