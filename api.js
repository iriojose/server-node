const nodemailer = require('nodemailer');
const { getForgotTemplate } = require('./template');
const { EMAIL_DATA } = require("./keys");

async function sendRecuperationMail(email){
    try {
        let template = getForgotTemplate(email);
        
        let transporter = nodemailer.createTransport({
            service:'Gmail',
            port:465,
            secure:false,
            auth:{
                user:EMAIL_DATA.MAIL,
                pass:EMAIL_DATA.PASSWORD
            }
        });

        let {messageId} = await transporter.sendMail({
            to:email,
            from:EMAIL_DATA.MAIL,
            subject:'Message portfolio',
            html:template
        });

        if(!messageId) return { code:500 };
        return { code:200 }

    } catch (error) {
        throw new Error(`Error al mandar el correo, ${error}`);
    }
}

module.exports = { sendRecuperationMail }