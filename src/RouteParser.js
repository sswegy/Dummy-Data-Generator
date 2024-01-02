import * as DatabaseConnector from "./DatabaseConnector";


async function checkAndCallToken(token) {
    switch(token) {
        case "firstname":
            await DatabaseConnector.getFirstName();
            break;
        case "lastname":
            await DatabaseConnector.getLastName();
            break;
        case "country":
            await DatabaseConnector.getCountry();
            break;
        case "city":
            await DatabaseConnector.getCity();
            break;
        case "address":
            await DatabaseConnector.getAddress();
            break;
        case "postcode":
            await DatabaseConnector.getPostCode();
            break;
    }
}

export default async function parseRoute(format, route) {
    if (format === "json") {
        const tokens = route.split("+");
        var result;
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