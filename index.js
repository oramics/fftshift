/**
 * > Cyclic rotation for phase-zero windowing
 *
 * [![npm install dsp-fftshift](https://nodei.co/npm/dsp-fftshift.png?mini=true)](https://npmjs.org/package/dsp-fftshift/)
 *
 * @example
 * var shift = require('dsp-fftshift')
 * shift.fftshift(signal)
 * shift.ifftshift(signal)
 *
 * @example
 * // ES6 syntax
 * import { fftshift, ifftshift } from 'dsp-fftshift'
 * fftshift(signal)
 *
 * @module fftshift
 */

/**
 * Rotate a buffer in place
 *
 * from: http://stackoverflow.com/questions/876293/fastest-algorithm-for-circle-shift-n-sized-array-for-m-position
 *
 * @param {Array} source - the buffer to rotate
 * @param {Number} rotations - the number of rotations
 * @private
 */
function rotate (src, n) {
  var len = src.length
  reverse(src, 0, len)
  reverse(src, 0, n)
  reverse(src, n, len)
  return src
}
function reverse (src, from, to) {
  --from
  while (++from < --to) {
    var tmp = src[from]
    src[from] = src[to]
    src[to] = tmp
  }
}

/**
 * Zero-phase windowing alignment
 *
 * __CAUTION__: this function mutates the array
 *
 * Perform a cyclic shifting (rotation) to set the first sample at the middle
 * of the buffer (it reorder buffer samples from (0:N-1) to [(N/2:N-1) (0:(N/2-1))])
 *
 * Named by the same function in mathlab: `fftshift`
 *
 * @param {Array} buffer
 * @return {Array} the same buffer (with the data rotated)
 */
export function fftshift (src) {
  const len = src.length
  return rotate(src, Math.floor(len / 2))
}

/**
 * Inverse of zero-phase windowing alignment
 *
 * __CAUTION__: this function mutates the array
 *
 * @see fftshift
 * @param {Array} buffer
 * @return {Array} the same buffer (with the data rotated)
 */
export function ifftshift (src) {
  const len = src.length
  return rotate(src, Math.floor((len + 1) / 2))
}
