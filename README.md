# prepend-style-loader
[![Build Status](https://travis-ci.org/JoelRoxell/prepend-style-loader.svg?branch=master)](https://travis-ci.org/JoelRoxell/prepend-style-loader)

> Stylus import prepender for webpack, prepends defined style files on build.

This will prepend the defined files to every file that is matched by the loader. Perfect to remove tedious variables and mixins imports while using design patters like css-modules or other techniques that isolates style scopes.

The example below will import `variable.styl` and `mixnin.styl` and prepend import statements for each file. This allows `.styl` files to use "global" variables and mixins, which are not defined within the same file.

## Install
`npm install prepend-style-loader`

## Usage
### Config
```javascript
{
  rules: {
    loaders: [
      {
        test: /\.styl$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'stylus-loader'
          },
          {
            loader: 'prepend-style-loader',
            options: {
              prepend: [
                'src/resources/global/variables',
                'src/resources/global/mixins'
              ]
            }
          }
        ]
      }
  }
}
```
