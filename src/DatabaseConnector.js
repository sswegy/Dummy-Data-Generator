import mysql from "mysql2"

const connection = mysql.createPool({
    host: "",
    user: "",
    password: "",
    database: "",
}).promise();

export async function getFirstName() {
    return "name1";
}

export async function getLastName() {
    return "name2";
}

export async function getCountry() {

}

export async function getCity() {

}

export async function getAddress() {

}

export async function getPostCode() {
    
}