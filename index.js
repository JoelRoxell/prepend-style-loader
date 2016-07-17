var path = require('path');

module.exports = function(source) {
  if (!this.query) {
    throw new Error('`prepend` parameter must be specified.');
  }

  this.cacheable();

  var prepend = [],
    resolve = '',
    args = this.query.split('&');

  for (var i = 0; i < args.length; i++) {
    var param = args[i].split('='),
      key = param[0].replace(/\?/g, '');

    switch (key) {
      case 'prepend':
        prepend = extractPrependArray(param[1]);
        break;
      default:
    }
  }

  for (var i = 0; i < prepend.length; i++) {
    resolve += `@import '${path.resolve(prepend[i])}'\n`;
  }

  return `\n${resolve}\n${source}`;
};

/**
 * Extract passed file query array.
 *
 * @param  {String} fileStringArray [description]
 *
 * @return {Array<String>}          [description]
 */
function extractPrependArray(fileStringArray) {
  return fileStringArray
    .replace(/(\[|\])/g, '')
    .split(',')
    .map(a => a.trim());
}
