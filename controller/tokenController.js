

class tokenController {
    async getToken(req, res) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 30; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        let response = {
            success: true,
            data: []
        };
        response.data = result
     
        return res.status(200).send(response);

    }
}

module.exports = new tokenController;