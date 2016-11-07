# prepend-style-loader
[![Build Status](https://travis-ci.org/JoelRoxell/prepend-style-loader.svg?branch=master)](https://travis-ci.org/JoelRoxell/prepend-style-loader)

Style prepender for webpack, prepends defined style files on import.

## Usage
```javascript
{
  module: {
    loaders: [
      {
        test: /\.styl$/,
        exclude: /\.some\.styl$/,
        loader: "style-loader!css-loader!stylus-loader!prepend-style-loader?prepend=[src/styles/global/variables, src/styles/global/mixins]"
      }
    ]
  }
}
```
This will prepend the defined style imports to every file that is matched by the loader. Perfect to remove tedious variables and mixins imports while using design patters like css-modules or other techniques that isolates style scopes.

## Install
`npm install prepend-style-loader`
