const { Router } = require('express');
const router = Router();
const { sendRecuperationMail } = require("./api");

router.post('/sendmail', async(req,res) => {
    let { email } = req.body.data;
    
    try {
        let { code } = await sendRecuperationMail(email);
        return res.status(code).json({message: 'Enviado'});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Internal Error'});
    } 
});

module.exports = router;