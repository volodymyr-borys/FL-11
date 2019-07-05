let xa = +prompt('Enter your x coordinate of point A');
let ya = +prompt('Enter your y coordinate of point A');
let xb = +prompt('Enter your x coordinate of point B');
let yb = +prompt('Enter your y coordinate of point B');
let xc = +prompt('Enter your x coordinate of point C');
let yc = +prompt('Enter your y coordinate of point C');
let halfCx=(xa + xb)/(1+1);
let halfCy=(ya + yb)/(1+1);
console.log(halfCx === xc && halfCy === yc);


