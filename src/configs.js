require('dotenv').config()

module.exports = {
    port: process.env.PORT,
    email_sender: process.env.EMAIL_SENDER,
    password_sender: process.env.PASSWORD_SENDER,
    email_recipient: process.env.EMAIL_RECIPIENT
}