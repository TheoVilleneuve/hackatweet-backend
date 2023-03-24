const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HashtagSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  tweets: [{
    type: Schema.Types.ObjectId,
    ref: 'Tweet'
  }]
});

const Hashtag = mongoose.model('Hashtag', HashtagSchema);

module.exports = Hashtag;
