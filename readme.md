# is-email-like [![Build Status](https://travis-ci.org/sindresorhus/is-email-like.svg?branch=master)](https://travis-ci.org/sindresorhus/is-email-like)

> Check if a string is email like

[You shouldn't use this for validating emails.](http://davidcel.is/blog/2012/09/06/stop-validating-email-addresses-with-regex/) Only for hinting to the user.


## Install

```sh
$ npm install --save is-email-like
```


## Usage

```js
var isEmailLike = require('is-email-like');

isEmailLike('sindresorhus@gmail.com');
//=> true
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
