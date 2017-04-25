var mongoose = require('mongoose');

var TeamSchema = ({
  pokemon: Object
});

var Team = mongoose.model('Team', TeamSchema);

module.exports = Team;
