var express = require('express');
var router = express.Router();

require('../models/connection');
const Tweet = require('../models/tweets');

//ROUTE GET TWEET
//Afficher tous les tweets existants dans la base de donnée tweets
router.get('/:trends', (req, res) => {
  Tweet.find({"trends": { $regex: req.params.message, $options: 'i' }})
  .then(data => {
      if (data.length > 0) {
          res.json({ result: true, matchingTweets: data})
      } else {
          res.json({ result: false, error: 'No tweets found'})
      }
  })
})

//ROUTE POST TWEET 
//Permet de poster un tweet
router.post("/create", (req, res) => {
  const newTweet = new Tweet({
    tweetContent: req.body.tweetContent,
    author: req.body.author, 
  });

  newTweet.save()
    .then(savedTweet => {
      res.json({ result: true, tweet: savedTweet });
    })
    .catch(error => {
      res.json({ result: false, error: error.message });
    });
});




//ROUTE DELETE TWEET 
//Permet de supprimer un tweet par son ID
router.delete("/:id", (req, res) => {
  const tweetId = req.params.id; // assuming the tweet ID is passed as a URL parameter

  Tweet.findByIdAndDelete(tweetId)
    .then(deletedTweet => {
      if (deletedTweet) {
        res.json({ result: true, message: "Tweet deleted successfully" });
      } else {
        res.json({ result: false, error: "Tweet not found" });
      }
    })
    .catch(error => {
      res.json({ result: false, error: error.message });
    });
});



// Get and delete Hashtags 

router.get("/:hashtag", (req, res) => {
  Hashtag.find({
    name: { $regex: new RegExp(req.params.hashtag, "i") },
  }).then(data => {
    if (data.length > 0) {
      res.json({ result: true, tweets: data[0].tweets });
    } else {
      res.json({ result: false, error: "Hashtag not found" });
    }
  });
});

router.delete("/:hashtag", async (req, res) => {
  try {
    const deletedDoc = await Hashtag.deleteOne({
      name: { $regex: new RegExp(req.params.hashtag, "i") },
    });
    if (deletedDoc.deletedCount > 0) {
      // document successfully deleted
      const updatedHashtags = await Hashtag.find();
      res.json({ result: true, hashtags: updatedHashtags });
    } else {
      res.json({ result: false, error: "Hashtag not found" });
    }
  } catch (error) {
    res.json({ result: false, error: error.message });
  }
});




module.exports = router;