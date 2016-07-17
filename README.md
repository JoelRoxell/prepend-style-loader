# Style prepender for webpack
Prepends defined style files on import.

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
This will prepend the defined style imports to every file that is matched using `path.resolve`. Perfect to remove tedious variables and mixins imports while using design patters like css-modules or other techniques that isolates scopes.

## Install
`npm install prepend-style-loader`
