const expect = require('chai').expect;

const prependStyleLoader = require('../index');

describe('Prepend style loader', function() {
  it('Should load query using comprised string query', function() {

    const fileContent = prependStyleLoader.apply({
      query: 'prepend=[src/styles/global/variables, src/styles/global/mixins]',
      cacheable: function() {}
    }, ['.wrapper { color: red; }']);

    expect(fileContent).to.contain(`.wrapper { color: red; }`);
    expect(fileContent).to.contain(`@import '/Users/roxell/Documents/prepend-style-loader/src/styles/global/variables';`);
    expect(fileContent).to.contain(`@import '/Users/roxell/Documents/prepend-style-loader/src/styles/global/mixins';`);
  });
});
