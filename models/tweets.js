const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
  tweetContent: String,
  hastags: Array,
  likes: Array,
});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;