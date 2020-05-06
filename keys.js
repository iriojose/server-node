const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    EMAIL_DATA:{
        MAIL:process.env.MAIL,
        PASSWORD:process.env.PASSWORD
    }
}