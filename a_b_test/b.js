const a = require('./a');
console.log('Module b imported module a, a.N = ', a.N, 'typeof a.getN = ', typeof a.getN);

const N = 'B';
const N_from_a = a.N; // it will be undefined

exports.N = N;
exports.getNFromA = () => N_from_a; // undefined, as N_from_a was set at the momet of import
exports.getNFromA2 = () => a.N; // it's OK because a.N is taken not at the moment of import