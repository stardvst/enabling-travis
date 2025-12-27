const test = require('tape');

test('test integer addition', (t) => {
  t.plan(1);
  const result = 2 + 3;
  t.equal(result, 5, '2 + 3 should equal 5');
});

test('test string concatenation', (t) => {
  t.plan(1);
  t.equal('1' + '1', 2); // This will fail
});
