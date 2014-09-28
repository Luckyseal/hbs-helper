var partials = require('./lib/amazeui.hbs.partials');
var helper = require('./lib/amazeui.hbs.helper');

var amazeUIHbshelper = function(hbs) {
    partials(hbs);
    helper(hbs);
};

module.exports = amazeUIHbshelper;
