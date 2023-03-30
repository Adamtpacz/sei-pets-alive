require('dotenv').config();
require('./config/database');
const mongoose = require('mongoose')
const Dog = require('./models/Dog');
const Application = require('./models/Application');

let dog, dogs;
let appication, applications;

function resetApps() {
    return Application.deleteMany({}, {})
}

resetApps()