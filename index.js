import app from './app';
const dotenv = require('dotenv');
dotenv.config();

app.listen(app.get('puerto'), () => {
    console.log('3000');
});