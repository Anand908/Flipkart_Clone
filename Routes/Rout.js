import express from 'express';
import { userSignUp, userLogin } from '../Controller/user-controller.js';
import { getProductById, getProducts } from '../Controller/product-controller.js';
import { addPaymentGateway, paytmResponse } from '../Controller/payment-controller.js';

const router = express.Router();

router.post('/signup', userSignUp);
router.post('/login', userLogin);

router.get('/products', getProducts);


router.post('/callback', paytmResponse);
router.post('/payment', addPaymentGateway)

router.get('/product/:id', getProductById);

export default router;