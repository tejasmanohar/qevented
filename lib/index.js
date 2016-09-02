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

Emitter.prototype.emit = function emit(type) {
  var evt = this._events[type];
  if (!evt || !evt[0]) {
    return;
  }

  var args = Array.prototype.slice.call(arguments, 1);
  var fn = evt.shift();
  setTimeout(function () {
    fn.apply(this, args);
  }.bind(this), 0);
};

module.exports = Emitter;
