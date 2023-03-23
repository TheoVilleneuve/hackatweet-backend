var express = require('express');
var router = express.Router();

require('../models/connection');
const Tweet = require('../models/tweets');

//ROUTE GET TWEET
//Afficher tous les tweets existants dans la base de donnée tweets
router.get("/", (req, res) => {
    Tweet.find({
    }).then(data => {
      if (data[0]) { //vérifier s'il existe quelque chose à l'index zéro dans le tableau, si oui c'est qu'il existe au moins un tweet
        res.json({ result: true, tweets: data });
      } else {
        res.json({ result: false, error: "No tweet" }); 
      }
    });
  });

//ROUTE POST TWEET 
//Permet de poster un tweet


//ROUTE DELETE TWEET 
//Permet de supprimer un tweet posté par le user

//ROUTE POST USER IN TWEET LIKES ARRAY

//GET LIKES ARRAY

//DELETE USER FROM LIKES



module.exports = router;