var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var port = process.env.PORT || 3000;
var ip = process.env.IP || "127.0.0.1";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//We create our first endpoint
app.post('/', function(req, res){
    console.log(req.body)
    if(req.body.result.action == "input.cantine"){
        var religieux = req.body.result.parameters.religieux;
        console.log(religieux)
        
        var response = "";
        if(religieux === "porc"){
            response = "Oui, mais tu peux choisir autre chose";
        } else {
            response = "Pour connaître nos particularités, cliquez sur le lien suivant : ";
        }
        res.json({
            "speech": response,
            "displayText": response
        })
    }
    else if(req.body.result.action == "input.urgences"){
        var places = req.body.result.parameters.places;
        console.log(places)

        var response = "";
        if(places === "place") {
            response = "Nous avons prévu d’augmenter les places aux urgences et dans les hôpitaux de la ville. Sache-le tu peux te soigner gratuitement ! ";
        } else if (places === "monde") {
            response = "Nous avons prévu d’augmenter les places aux urgences et dans les hôpitaux de la ville. Sache-le tu peux te soigner gratuitement ! ";
            
        } else {
            response = "Les urgneces de votre ville, vous accueillent de tel heure à telle heure";
        }
        res.json({
            "speech": response,
            "displayText": response
        })
        
    }
    else if (req.body.result.action == "input.police"){
        var effectifs = req.body.result.parameters.effectifs;
        console.log(effectifs)
        var response = "";
        if(effectifs === "effectifs") {
            response = "Nous avons l’intention de doubler les effectifs dans les zones sensibles. ";
        } else if (effectifs === "securité") {
            response = "Nous avons une police de proximité pour les zones sensibles et la sécurité des habitants";
        } else {
            response = "Notre police fait déjà le travail pour protéger et servire le peuple.";
        }
        res.json({
            "speech": response,
            "displayText": response
        })
    } 
    
})

app.listen(port, ip);
