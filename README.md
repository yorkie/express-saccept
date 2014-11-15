
express-saccept
=================

Semantic HTTP accept middleware for expressjs

### Installation

```sh
$ npm install express-saccept
```

### Usage

```js
var saccept = require('express-saccept');
var app = require('express')();

app.use(saccept());
app.get('/', function (req, res) {
  // accept: application/vnd.xxx.v1.6.0+json will be accepted here
  // accept: application/vnd.xxx.v1.6.0+xml will be rejected here
  // accept: application/vnd.xxx.v1.5.0+json will be rejected here
  req.accept('1.6.*', 'application/json');
});
```

### Ref

* [node-semver](https://github.com/npm/node-semver)

### License

MIT
