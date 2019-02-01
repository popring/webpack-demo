/* ES6 */
import sum from './vendor/sum';
console.log(sum(1,2));

/* CommonJS */
var min = require('./vendor/min')
console.log(min(1,2));

/* AMD */
require(['./vendor/mul'], function(mul) {
	console.log(mul(1,2));
})
