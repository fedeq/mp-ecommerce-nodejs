class MercadoPagoController {
    constructor(MercadoPagoInstance) {
        this.MercadoPagoInstance = MercadoPagoInstance;
    }

    createPreference = async (req, res) => {

        const preference = await this.MercadoPagoInstance.createPreference(req.body);
        console.log(preference);
        res.redirect(`${preference.init_point}`);
    }

    processIPN = async (req, res) => {
        console.log(req.query);
        console.log(req.body);
        res.json(req.body);
    }
}

module.exports = MercadoPagoController;