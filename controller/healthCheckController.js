
class healthCheckController {
    constructor() {
        this.getHealthCheck = this.getHealthCheck.bind(this);
    };
    async getHealthCheck(req, res) {

        let response = {
            success: true,
            data: []
        };
        const healthcheck = {
            uptime: process.uptime(),
            message: 'OK',
            timestamp: Date.now()
        };
        response.data = healthcheck;
        try {
            res.send(response);
        } catch (error) {
            let errResponse = {
                success: false,
                data: []
            }
            errResponse.data = error;
            res.status(503).send();
        }
    }
}

module.exports = new healthCheckController;
