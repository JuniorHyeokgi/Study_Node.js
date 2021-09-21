/*
args[0] = node.js Runtime path
args[1] = file path
args[2 ~ ] = input values
*/
var args = process.argv;
console.log(args);
console.log('A');
console.log('B');
if(args[2] == 1) {
    console.log('C1');
} else {
    console.log('C2');
}
console.log('D');