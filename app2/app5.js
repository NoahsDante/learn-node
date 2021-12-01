const patch = require('path');
const myPatch = patch.join('/a','b','v','e');
const myPatch2 = patch.join('/a','b','v','e','..');
console.log(myPatch,myPatch2)