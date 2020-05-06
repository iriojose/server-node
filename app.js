import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import history from 'connect-history-api-fallback';
import router from './router';

const app = express();

app.set('puerto', process.env.PORT || 3000);

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(history());
app.use(express.static(path.join(__dirname,'public')));


// Routes
app.use('/api/',router);

module.exports = app;