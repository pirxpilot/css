const camel = require('to-camel-case');
const computed = require('computed-style-component');
const type = require('component-type');

/**
 * Expose `css`.
 */

module.exports = css;

/**
 * Don't append `px`.
 */

const ignore = {
  columnCount: true,
  fillOpacity: true,
  fontWeight: true,
  lineHeight: true,
  opacity: true,
  orphans: true,
  widows: true,
  zIndex: true,
  zoom: true
};

/**
 * Get or set CSS properties of an `el`.
 *
 * @param {Element} el
 * @param {String|Object} prop
 * @param {String} value (optional)
 */

function css(...args) {
  if (1 === args.length) return wrapped(args[0]);

  const [el, prop, value] = args;

  if (type(prop) === 'object') {
    Object.keys(prop).forEach(key => set(el, key, prop[key]));
    return;
  }

  return args.length === 3 ? set(el, prop, value) : get(el, prop);
}

/**
 * Wrap the given `el`.
 *
 * @param {Element} el
 */

function wrapped(el) {
  return function (...args) {
    return css(el, ...args);
  };
}

/**
 * Get the current CSS `prop` value of an `el`.
 *
 * @param {Element} el
 * @param {String} prop
 */

function get(el, prop) {
  return computed(el)[prop];
}

/**
 * Set a CSS `prop` to `value` on an `element`.
 *
 * @param {Element} element
 * @param {String} prop
 * @param {String} value
 */

function set(el, prop, value) {
  prop = camel(prop);
  if ('number' === typeof value && !ignore[prop]) value += 'px';
  el.style[prop] = value;
}
