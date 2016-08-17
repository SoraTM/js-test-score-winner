import assert from 'assert';
import compareScore from './index';

/* compareScore('rateScore', 'realScore') => 2|1|0;
 * 2 - right, 1 - right team winner or draw, 0 - wrong;
 */

assert.equal(2, compareScore('1:0', '1:0'));
assert.equal(2, compareScore('1:1', '1:1'));
assert.equal(2, compareScore('0:1', '0:1'));
assert.equal(1, compareScore('2:2', '1:1'));
assert.equal(1, compareScore('20:20', '1:1'));
assert.equal(1, compareScore('2:0', '1:0'));
assert.equal(1, compareScore('1:0', '2:0'));
assert.equal(1, compareScore('1:2', '2:3'));
assert.equal(0, compareScore('0:0', '0:2'));
assert.equal(0, compareScore('0:0', '0:20'));
assert.equal(0, compareScore('2:0', '0:2'));
assert.equal(0, compareScore('0:2', '2:0'));
assert.equal(0, compareScore('1:2', '2:1'));
