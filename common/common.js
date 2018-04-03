require("a.js");
console.log("我是common.js");
function sayHello(name) {
  console.log('hello ' + name + ' !')
}
module.exports = {
  sayHello: sayHello
}