import type from 'component-type';
import camel from 'to-camel-case';

/**
 * Expose `css`.
 */

export default css;

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
  switch (args.length) {
    case 1:
      return wrapped(args[0]);
    case 2: {
      if ('object' !== type(args[1])) return get(...args);
      const [el, prop] = args;
      Object.entries(prop).forEach(([key, value]) => set(el, key, value));
      return;
    }
    case 3:
      return set(...args);
  }
}

/**
 * Wrap the given `el`.
 *
 * @param {Element} el
 */

function wrapped(el) {
  return (...args) => css(el, ...args);
}

/**
 * Get the current CSS `prop` value of an `el`.
 *
 * @param {Element} el
 * @param {String} prop
 */

function get(el, prop) {
  return getComputedStyle(el)[prop];
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
