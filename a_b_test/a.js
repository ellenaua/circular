const b = require('./b');
console.log('Module a imported module b, b.N = ', b.N, 'typeof b.getN = ', typeof b.getN);

const N = 'A';
const N_from_b = b.N;

exports.N = N;
exports.getNFromB = () => N_from_b;
exports.getNFromB2 = () => b.N;  // it's OK because a.N is taken not at the moment of import