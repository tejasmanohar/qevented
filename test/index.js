'use strict';

var assert = require('assert');
var sinon = require('sinon');
var Emitter = require('..');
var test = require('tape');

test('no `new`', function(t) {
  var ee = Emitter();
  t.deepEqual(ee instanceof Emitter, true);
  t.end();
});

test('new', function(t) {
  var ee = new Emitter();
  t.deepEqual(ee._events, []);
  t.end();
});

test('.emit calls next emitter', function(t) {
  var ee = new Emitter();

  var fn1 = sinon.spy(function(){
    t.equal(fn1.calledOnce, true);
    t.equal(fn2.calledOnce, false);
    ee.emit('event', 2);
  });

  var fn2 = sinon.spy(function(){
    t.equal(fn1.getCall(1), null);
    t.equal(fn2.calledOnce, true);
    t.end();
  });

  ee.on('event', fn1);
  ee.on('event', fn2);

  ee.emit('event', 1);
});

test('.emit does not error when there are no listeners', function(t) {
  var ee = new Emitter();
  var res = ee.emit('noop', 0);
  t.equal(res, undefined);
  t.end();
});
