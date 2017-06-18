import test from 'tape';
import { FV } from './index';

test('FV function should exist', (assert) => {
  assert.equal(typeof FV, 'function');
  assert.end();
});

test('FV should return the correct future value', (assert) => {
  const expected = 110;
  const actual = FV(10, 1, 0, 100, 0, false);
  assert.equal(actual, expected);
  assert.end();
});

test('FV should take a 4th param to determine if n given is annual periods or monthly', (assert) => {
  const expected = 110;
  const actual = FV(10, 12, 0, 100, 1, false);
  assert.equal(actual, expected);
  assert.end();
});

test('FV should return the correct future value when compounded monthly', (assert) => {
  const expected = 109357.3;
  const actual = FV(8, 30, 0, 10000, 0, true);
  assert.equal(actual, expected);
  assert.end();
});

test('FV should return the correct future value when compounded annually', (assert) => {
  const expected = 100626.57;
  const actual = FV(8, 30, 0, 10000, 0, false);
  assert.equal(actual, expected);
  assert.end();
});

test('FV should return the correct future value when compounded annually with an initial principle and periodic payments', (assert) => {
  const expected = 1599716.75;
  const actual = FV(8, 30, 1000, 10000, 0, true);
  assert.equal(actual, expected);
  assert.end();
});
