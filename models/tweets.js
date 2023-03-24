const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
  tweetContent: String,
  author: String,
  
});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;