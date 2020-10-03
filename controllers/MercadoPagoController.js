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
        if (req.method === "POST") { 
            let body = ""; 
            req.on("data", chunk => {  
                body += chunk.toString();
            });
            req.on("end", () => {  
                console.log(body, "webhook response"); 
                res.end("ok");
            });
        }
        return res.status(200); 
        // res.json(req.body);
    }
}

module.exports = MercadoPagoController;