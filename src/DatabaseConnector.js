import mysql from "mysql2"

const connection = mysql.createPool({
    host: "db4free.net",
    user: "sweg88",
    password: "IbPnNGZW",
    database: "dummydata",
}).promise();

export async function getFirstNameMale() {
    const [result] = await connection.query("SELECT firstNameMale FROM Names ORDER BY RAND() LIMIT 1");
    const name = result[0].firstNameMale;
    return name;
}

export async function getFirstNameFemale() {
    const [result] = await connection.query("SELECT firstNameFemale FROM Names ORDER BY RAND() LIMIT 1");
    const name = result[0].firstNameFemale;
    return name;
}

export async function getLastName() {
    const [result] = await connection.query("SELECT lastName FROM Names ORDER BY RAND() LIMIT 1");
    const name = result[0].lastName;
    return name;
}

export async function getCountry() {
    const [result] = await connection.query("SELECT country FROM World ORDER BY RAND() LIMIT 1");
    const country = result[0].country;
    return country;
}

export async function getCity() {
    const [result] = await connection.query("SELECT city FROM World ORDER BY RAND() LIMIT 1");
    const city = result[0].city;
    return city;
}

export async function getAddress() {
    const [result] = await connection.query("SELECT address FROM World ORDER BY RAND() LIMIT 1");
    const address = result[0].address;
    return address;
}

export async function getZipCode() {
    const [result] = await connection.query("SELECT zipCode FROM World ORDER BY RAND() LIMIT 1");
    const zipcode = result[0].zipCode;
    return zipcode;
}