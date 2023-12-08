// Import Faker:
const faker = require('@faker-js/faker');
// Bring Express
const express = require("express");
// Invoke express
const app = express();
// console.log(app)
const PORT = 5000;
// -- MIDDLEWARE --
// Make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Function: createUser
const newUser = () => ({
    _id: faker.unique.uuid(), // or use another method if available
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
});

// Function: createCompany
const newCompany = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipcode: faker.address.zipCode(),
        country: faker.address.country(),
    },
});

app.get("/api/users/new", (req, res) => {
    res.json(newUser());
});

app.get("/api/companies/new", (req, res) => {
    res.json(newCompany());
});

app.get("/api/user/company", (req, res) => {
    const UserAndCompany = {
        newUser: newUser(),
        newCompany: newCompany(),
    };
    res.json(UserAndCompany);
});

const server = app.listen(PORT, () => {
    console.log(`Server is locked and loaded on port ${PORT}`);
    console.log(`Server is locked and loaded on port ${server.address().port}`);
});
