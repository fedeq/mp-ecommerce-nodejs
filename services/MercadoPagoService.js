const mercadopago = require ('mercadopago');
const axios = require('axios');
// Agrega credenciales
mercadopago.configure({
    access_token: 'APP_USR-6317427424180639-042414-47e969706991d3a442922b0702a0da44-469485398',
    integrator_id: 'dev_24c65fb163bf11ea96500242ac130004'
});

class MercadoPagoService {

    constructor() {
        
    }

    createPreference = async (product) => {
        const payer = {
            "name": "Lalo",
            "surname": "Landa",
            "email": "test_user_63274575@testuser.com",
            "phone": {
                "area_code": "11",
                "number": 22223333
            },
            "address": {
                "street_name": "False",
                "street_number": 123,
                "zip_code": "1111"
            }
        }
        // const payer = {
        //     "email": "test_user_67666701@testuser.com",
        // }
        // Crea un objeto de preferencia
        let preference = {
            items: [
                {
                    "id": 1234,
                    "title": product.title,
                    "description": 'Dispositivo móvil de Tienda e-commerce',
                    "unit_price": Number(product.price),
                    "picture_url": product.img,
                    "quantity": 1,
                }
            ],
            "payment_methods": {
                "excluded_payment_methods": [
                    {
                        "id": "amex"
                    }
                ],
                "excluded_payment_types": [
                    {
                        "id": "ticket"
                    }
                ],
                "installments": 6
            },
            "back_urls": {
                "success": "https://fedeq-mp-ecommerce-nodejs.herokuapp.com/payment_success",
                "failure": "https://fedeq-mp-ecommerce-nodejs.herokuapp.com/payment_failure",
                "pending": "https://fedeq-mp-ecommerce-nodejs.herokuapp.com/payment_pending"
            },
            "auto_return": "approved",
            "notification_url": "https://fedeq-mp-ecommerce-nodejs.herokuapp.com/ipn",
            "external_reference": "federicoquattrocchio@gmail.com",
            payer: payer
        };
        try {
            const res = await mercadopago.preferences.create(preference);
            return res.body;
        }
        catch(err) {
            console.log(err);
            return err;
        }

    }
}

module.exports = MercadoPagoService

