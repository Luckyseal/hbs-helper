var partials = require('./lib/amazeui.partials');
var helper = require('./lib/helper');

var amazeUIHbshelper = function(hbs) {
    partials(hbs);
    helper(hbs);
};

module.exports = amazeUIHbshelper;
