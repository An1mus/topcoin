import cmcMiddleWare from "./middlewares/cmc";

import express from 'express';
import cors from 'cors';

const app = express();

app.use('/', cors());

app.set('views', './server/app/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	res.render('index');
});

app.use('/cmc', cmcMiddleWare);

export default app;
