var path = require('path');
var loaderUtils = require('loader-utils');

function prependImport(css, file) {
  return `@import '${file}';\n${css}`;
}

module.exports = function(sourceCode) {
  var options = loaderUtils.getOptions(this) || [];
  const { prepend } = options;

  if(Array.isArray(prepend)) {
    return prepend.reduce(prependImport, sourceCode);
  } else if(typeof prepend === 'string'){
    return prependImport(sourceCode, prepend);
  } else {
    throw new Error(`
      prepend-style-loader

      options
        prepend: string|[string] - Should either be a single string or an array specifying multiple style file imports.
    `);
  }
};
