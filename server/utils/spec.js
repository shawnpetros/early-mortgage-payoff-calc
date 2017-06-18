import test from 'tape';
import FV from './index';

test('FV function should exist', (assert) => {
  assert.equal(typeof FV, 'function');
  assert.end();
});
