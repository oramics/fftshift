/* global test expect */
const { fftshift, ifftshift } = require('..')

function fill (N, fn) {
  const arr = new Array(N)
  for (let i = 0; i < N; i++) arr[i] = fn[i]
  return arr
}

test('fftshift', () => {
  const even = fftshift([1, 2, 3, 4, 5, 6])
  expect(even).toEqual([4, 5, 6, 1, 2, 3])
  const odd = fftshift([1, 2, 3, 4, 5])
  expect(odd).toEqual([4, 5, 1, 2, 3])
})

test('forward and inverse', () => {
  const N = 1000
  const signal = fill(N + 1, x => x)
  const shifted = fill(N + 1, x => x < N / 2 ? N / 2 + x + 1 : x - N / 2)
  expect(fftshift(signal.slice())).toEqual(shifted)
  expect(ifftshift(shifted.slice())).toEqual(signal)
})
test('ifftshift', () => {
  const even = fill(100, x => x)
  expect(ifftshift(fftshift(even.slice()))).toEqual(even)
  const odd = fill(101, x => x)
  expect(ifftshift(fftshift(odd.slice()))).toEqual(odd)
})
