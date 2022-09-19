class HomeController{

    async index(req, res){
        res.send("This app is running!");
    }

}

module.exports = new HomeController();