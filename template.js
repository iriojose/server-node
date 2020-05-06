var forgotTemplate = ``;

function getForgotTemplate(email){
    forgotTemplate = `
    <html>
    <head>
        <title>Message Portfolio</title>
    </head>
    <body>
        <div>
            <h3>Dear ${email}</h3>
            <br>
        </div>
    
    </body>
    </html>
    `;
    return forgotTemplate;
}

module.exports = { getForgotTemplate }