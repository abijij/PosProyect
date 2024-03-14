
require('dotenv').config();

const key = process.env.SECRET_KEY;

module.exports = {

    secretOrKey: key
}