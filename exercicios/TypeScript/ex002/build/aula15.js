"use strict";
function fsoma(...n) {
    let s = n.reduce((tot, current) => tot + current);
    return s;
}
console.log(fsoma(10, 20, 67, 30, 79));
