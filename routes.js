module.exports = (app) => {

    const MercadoPagoService = require("./services/MercadoPagoService");
    const MercadoPagoServiceInstance = new MercadoPagoService();

    const MercadoPagoController = require("./controllers/MercadoPagoController");
    const MercadoPagoControllerInstance = new MercadoPagoController(MercadoPagoServiceInstance);

    
    app.get('/', function (req, res) {
        res.render('home');    
    });

    app.get('/detail', function (req, res) {
        res.render('detail', req.query);
    });

    app.post('/checkout', MercadoPagoControllerInstance.createPreference);
    
    app.post('/ipn', MercadoPagoControllerInstance.processIPN);

    app.get('/payment_success', function (req, res) {
        res.render('payment_success', req.query);
    });

    app.get('/payment_failure', function (req, res) {
        res.render('payment_failure');
    });

    app.get('/payment_pending', function (req, res) {
        res.render('payment_pending');
    });
    
  
}