# qevented

unidirectional, queued take at javascript (node, browser) event emitters.

the major difference is when an event is emitted, only the first subscriber that hasn't yet
received a message is notified, and the second event is dispatched to the second subscriber, etc.

# features
- damn simple.
- no deps! :P
- 100% coverage!

# usage

```
var Emitter = require('qevented');

var ee = new Emitter();

ee.on('blah', function(val) {
  console.log(val); // => 5
});

ee.on('blah', function(val) {
  console.log(val); // => 4
});

ee.emit('blah', 5);
ee.emit('blah', 4);
```
