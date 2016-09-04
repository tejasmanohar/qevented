'use strict';

var Emitter = function Emitter() {
  if (!(this instanceof Emitter)) {
    return new Emitter();
  }

  this._events = [];
};

Emitter.prototype.on = function on(type, listener) {
  if (!this._events[type]) {
    this._events[type] = [listener];
  } else {
    this._events[type].push(listener);
  }
};

Emitter.prototype.emit = function emit(type, val) {
  var evt = this._events[type];
  if (!evt || !evt[0]) {
    return;
  }

  var fn = evt.shift();
  setTimeout(function () {
    fn(val);
  }, 0);
};

module.exports = Emitter;
