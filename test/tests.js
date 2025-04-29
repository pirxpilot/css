const test = require('node:test');
const css = require('..');

test('css', async t => {
  let div;

  t.beforeEach(function () {
    div = document.createElement('div');
    document.body.appendChild(div);
  });

  t.afterEach(() => div.remove());

  await t.test("should get a property's value", function () {
    div.style.fontSize = '12px';
    t.assert.equal(css(div, 'fontSize'), '12px');
  });

  await t.test("should set a property's value", t => {
    css(div, 'fontSize', '16px');
    t.assert.equal(css(div, 'fontSize'), '16px');
  });

  await t.test('should set multiple properties at once', function () {
    css(div, {
      position: 'fixed',
      lineHeight: '10px'
    });
    t.assert.equal(css(div, 'position'), 'fixed');
    t.assert.equal(css(div, 'lineHeight'), '10px');
  });

  await t.test('should work with dashed case', t => {
    css(div, 'font-size', '16px');
    t.assert.equal(css(div, 'font-size'), '16px');
  });

  await t.test('should append `px` when needed', t => {
    const obj = { style: {} };
    css(obj, 'font-size', 16);
    t.assert.equal(obj.style.fontSize, '16px');
  });

  await t.test('should not append `px` when not needed', t => {
    const obj = { style: {} };
    css(obj, 'opacity', 1);
    t.assert.equal(1, obj.style.opacity);
  });

  await t.test('wrapped', async t => {
    let wrapped;

    t.beforeEach(() => (wrapped = css(div)));

    await t.test("should get a property's value", t => {
      div.style.fontSize = '12px';
      t.assert.equal(wrapped('fontSize'), '12px');
    });

    await t.test('should set multiple properties at once', t => {
      wrapped({ height: 100, width: 100 });
      t.assert.equal(div.style.width, '100px');
      t.assert.equal(div.style.height, '100px');
    });

    await t.test('should set a single property', t => {
      wrapped('height', 100);
      t.assert.equal(div.style.height, '100px');
    });
  });
});
