import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js';
import Router from './Routes/Rout.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import { v4 as uuid } from 'uuid';
import path from 'path';

const __dirname = path.resolve();

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', Router);

const PORT = process.env.PORT || 4000;


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@e-commerce-web.hmzypb9.mongodb.net/COMMERCE?retryWrites=true&w=majority`;

Connection(URL);

app.use(express.static(path.join(__dirname, "./Frontend/build")));

app.get('*',function(_, res){
    res.sendFile(path.join(__dirname, "./Frontend/build/index.html"), function(err){
        res.status(500).send(err);
    })
})

app.listen(PORT, () => console.log(`Server is Running Successfully On Port No. : ${PORT}`));

DefaultData();

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] = 'callback';
paytmParams['EMAIL'] = 'anandk212307@gmail.com';
paytmParams['MOBILE_NO'] = '8922995611';
