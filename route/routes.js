
//Controllers //
const tokenController = require('../controller/tokenController');


const healthCheckController = require('../controller/healthCheckController');





module.exports = (app) => {
    //For Getting Health Check
    app.get(`/rest/api/v1/utility/healthcheck`, healthCheckController.getHealthCheck);
    //For Creating Tokens
    app.get(`/rest/api/v1/token`, tokenController.getToken);
};