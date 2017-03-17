## fftshift

> Cyclic rotation for phase-zero windowing

[![npm install fftshift](https://nodei.co/npm/fftshift.png?mini=true)](https://npmjs.org/package/fftshift/)

```js
import { fftshift, ifftshift } from 'fftshift'

// given a signal (an array)
fftshift(signal) // => in-place rotation. 0 is now at the center of the array
ifftshift(signal) // => in-place rotation. Signal is now as before fftshift
```


## Usage

Install via `npm`:

```bash
npm install fftshift
```

Require in your code:

**Example**  
```js
// ES6 syntax
import { fftshift, ifftshift } from 'fftshift'

// ES5 syntax
var shift = require('fftshift')
shift.fftshift(signal)
shift.ifftshift(signal)
```

## API

### fftshift(buffer) ⇒ <code>Array</code>
Zero-phase windowing alignment

__CAUTION__: this function mutates the array

Perform a cyclic shifting (rotation) to set the first sample at the middle
of the buffer (it reorder buffer samples from (0:N-1) to [(N/2:N-1) (0:(N/2-1))])

Named by the same function in mathlab: `fftshift`

**Returns**: <code>Array</code> - the same buffer (with the data rotated)  

| Param | Type |
| --- | --- |
| buffer | <code>Array</code> |


### ifftshift(buffer) ⇒ <code>Array</code>
Inverse of zero-phase windowing alignment

__CAUTION__: this function mutates the array

**Kind**: static method of <code>[fftshift](#module_fftshift)</code>  
**Returns**: <code>Array</code> - the same buffer (with the data rotated)  
**See**: fftshift  

| Param | Type |
| --- | --- |
| buffer | <code>Array</code> |

## License

MIT License
