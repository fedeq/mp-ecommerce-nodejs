class MercadoPagoController {
    constructor(MercadoPagoInstance) {
        this.MercadoPagoInstance = MercadoPagoInstance;
    }

    createPreference = async (req, res) => {

        const preference = await this.MercadoPagoInstance.createPreference(req.body);

        res.redirect(`${preference.init_point}`);
    }

    processIPN = async (req, res) => {
        console.log(req);
        res.json(req.body);
    }
}

module.exports = MercadoPagoController;