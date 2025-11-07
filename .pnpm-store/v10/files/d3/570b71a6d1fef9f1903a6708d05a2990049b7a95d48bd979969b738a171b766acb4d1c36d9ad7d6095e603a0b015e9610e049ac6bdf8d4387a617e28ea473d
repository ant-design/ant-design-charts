/**
 * Created by hustcc on 17/11/11.
 * Contract: i@hust.cc
 */

/*
 * graph from https://github.com/Xsoda/url
 * parse url like this
 *
 * schema://username:password@host:port/path?key=value#fragment;key=value
 * \____/   \______/ \______/ \__/ \__/ \__/ \_______/ \______/ \______/
 *   |         |        |       |    |    |      |         |       |
 * schema      |     password   |   port  |    query    fragment   |
 *          username          host      path                     extension
 *
 * note:
 *   - username, password, port, path, query, fragment, extension is optional.
 *   - scheme, host must be setting.
 *   - username and password must be paired.
 */

function URI(uri) {
  this.uri = uri;
  this._pos = 0;

  // the instance has properties below:
  //
  // this.schema
  // this.username
  // this.password
  // this.host
  // this.port
  // this.path
  // this.query
  // this.fragment
  // this.extension

  this._parse();
}

URI.prototype._end = function() {
  return this._pos >= this.uri.length;
};

URI.prototype._next = function() {
  return this.uri[this._pos += 1];
};

URI.prototype._current = function() {
  return this.uri[this._pos];
};

URI.prototype._skip = function(s) {
  if (!s) this._pos = this.uri.length;
  // skip all char without keyword
  else while (s.indexOf(this._next()) === -1 && !this._end());
};

URI.prototype._sub = function(i) {
  return this.uri.substring(i, this._pos);
};

URI.prototype.all = function() {
  return {
    schema: this.schema,
    host: this.host,
    port: this.port,
    username: this.username,
    password: this.password,
    path: this.path,
    query: this.query,
    fragment: this.fragment,
    extension: this.extension
  };
};

URI.prototype.toURI = function() {
  var uri = '', _t;
  uri += this.schema + '://';
  uri += this.username && this.password ? this.username + ':' + this.password + '@' : '';
  uri += this.host;
  uri += this.port ? ':' + this.port : '';
  uri += this.path ? '/' + this.path : '';

  _t = this._stringifyQuery(this.query);
  uri += _t ? '?' + _t : '';

  uri += this.fragment ? '#' + this.fragment : '';

  _t = this._stringifyQuery(this.extension);
  uri += _t ? ';' + _t : '';

  return uri;
};

URI.prototype._parseQuery = function(query) {
  var qs = query.split('&'),
    len = qs.length,
    r = {},
    t;
  for (var i = 0; i < len; i ++) {
    t = qs[i].split('=');
    if (t[0]) r[t[0]] = t[1];
  }
  return r;
};

URI.prototype._stringifyQuery = function(query) {
  if (!query) return '';
  var q = [];
  Object.keys(query).forEach(function(key) {
    q.push(key + '=' + (query[key] ? query[key] : ''));
  });
  return q.join('&');
};


URI.prototype._parse = function() {
  var i = 0;
  // 1. scheme
  var index = this.uri.indexOf('://');
  if (index === -1) throw new Error('scheme should followed by "://".');
  this._pos = index;
  this.schema = this._sub(i);
  this._pos = index + 3; // skip ://
  i = this._pos;

  // 2. user:pass
  if (this.uri.indexOf('@', this._pos) !== -1) {
    this._skip('@');
    var up = this._sub(i).split(':');
    if (up.length !== 2) throw new Error('username and password must be paired.');
    this.username = up[0];
    this.password = up[1];

    this._next(); // skip @
    i = this._pos;
  }

  // 3. host:port
  this._skip('/?#;');
  var hp = this._sub(i).split(':');
  this.host = hp[0];
  this.port = hp[1];
  i = this._pos;

  // /path, ?query, #fragment, ;extension
  // 4. path
  if (this._current() === '/') {
    this._skip('?#;');
    this.path = this._sub(i + 1);
    i = this._pos;
  }

  // 5. query
  if (this._current() === '?') {
    this._skip('#;');
    this.query = this._parseQuery(this._sub(i + 1));
    i = this._pos;
  }

  // 6. fragment
  if (this._current() === '#') {
    this._skip(';');
    this.fragment = this._sub(i + 1);
    i = this._pos;
  }

  // 7. extension
  if (this._current() === ';') {
    this._skip();
    this.extension = this._parseQuery(this._sub(i + 1));
  }
};

module.exports = URI;
