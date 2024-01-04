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

}

export async function getCity() {

}

export async function getAddress() {

}

export async function getPostCode() {
    
}