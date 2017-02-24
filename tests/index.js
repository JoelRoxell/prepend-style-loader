const expect = require('chai').expect;

const prependStyleLoader = require('../index');

describe('Prepend style loader', function() {
  it('Should append global styl files using passed query string', function() {
    const fileContent = prependStyleLoader.call(
      {
          cacheaible: function() {},
          query: '?prepend[]=tests/src/resources/global/variables&prepend[]=tests/src/resources/global/mixins'
      }
      , '.wrapper { color: red; }');


    expect(fileContent).to.contain(`.wrapper { color: red; }`);
    expect(fileContent).to.contain(`@import '${__dirname}/src/resources/global/mixins';`);
    expect(fileContent).to.contain(`@import '${__dirname}/src/resources/global/variables';`);
  });
});
