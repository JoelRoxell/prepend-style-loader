var path = require('path');
var loaderUtils = require('loader-utils');

module.exports = function(sourceCode) {
  var options = loaderUtils.getOptions(this) || [];

  if (!options.prepend.length) {
    throw new Error('Query and `prepend` parameter must be specified.');
  }

  return options.prepend.reduce((src, file) => {
    return `@import '${path.resolve(file)}';\n` + src;
  }, sourceCode);
};
