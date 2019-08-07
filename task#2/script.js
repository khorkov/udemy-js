'use strict';

let x = 5; alert( x++ ); // => 5
[ ] + false - null + true // => NaN
let y = 1; let x = y = 2; alert(x); // => 2
[ ] + 1 + 2 // => 12
alert( "1"[0] ) // => undefined
2 && 1 && null && 0 && undefined // => null
!!( a && b ) и (a && b) // => yes
alert( null || 2 && 3 || 4 );  // => 3
a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b // => false
alert( +"Infinity" ); // => Infinity
"ёжик" > "яблоко"? // => true
0 || "" || 2 || undefined || true || falsе // => 2