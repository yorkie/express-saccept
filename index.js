
var accept = require('saccept').accept;

module.exports = function (option) {
  var isStrong = !option.weak;
  return function sacceptMiddleware (req, res, next) {
    req.accept = function (ver, mime) {
      return accept(req.get('accept'), res, next, isStrong, ver, mime);
    };
  };
};
