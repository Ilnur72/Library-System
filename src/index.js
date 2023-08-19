const express = require("express");
const config = require("./shared/config");
const handleError = require("./shared/errors/handle");
const db = require("./db");

const adminRoute = require("./modules/admin/_api");
const borrowerRoute = require("./modules/borrowers/_api");
const publisherRoute = require("./modules/publisher/_api");
const authorRoute = require("./modules/author/_api");
const bookRoute = require("./modules/book/_api");
const loanRoute = require("./modules/loan/_api");


const app = express();
app.use(express.json());

app.use(adminRoute);
app.use(borrowerRoute);
app.use(publisherRoute);
app.use(authorRoute);
app.use(bookRoute);
app.use(loanRoute);

app.use(handleError);


db();
app.listen(config.port, () =>{
  console.log("> Server is up and running on port : " + config.port);
});
