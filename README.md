# prepend-style-loader
[![Build Status](https://travis-ci.org/JoelRoxell/prepend-style-loader.svg?branch=master)](https://travis-ci.org/JoelRoxell/prepend-style-loader)

> Style import prepender for webpack, prepends defined style files on build(scss, stylus, css).

This will prepend the defined files to every file that is matched by the loader. Perfect to remove tedious variables and mixins imports while using design patters like css-modules or other techniques that isolates style scopes.

The example below will import `variable.styl` and `mixnin.styl` and prepend import statements for each file. This allows `.styl` files to use "global" variables and mixins, which are not defined within the same file.

## Install
`npm install prepend-style-loader`

## Usage
### Example config
[here](demo/config.webpack.js)

### Config

Multiple files:
```javascript
{
  loader: 'prepend-style-loader',
  options: {
    prepend: [
      path.resolve('src/resources/global/variables'),
      path.resolve('src/resources/global/mixins')
    ]
  }
}
```

Single file:
```javascript
{
  loader: 'prepend-style-loader',
  options: {
    prepend: path.resolve('src/resources/global/mixins')
  }
}
```

Styl example
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
                path.resolve('src/resources/global/variables'),
                path.resolve('src/resources/global/mixins')
              ]
            }
          }
        ]
      }
    ]
  }
}
```

## Demo
Run demo

`git clone git@github.com:JoelRoxell/prepend-style-loader.git`

`npm link prepend-style-loader`

`yarn demo`

`open demo/build/index.html`
