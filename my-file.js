const {red, yellow} = require('chalk')
const path = require('path')

const fs = require('fs')

// const filename = path.join(__dirname, 'test.txt')
// console.log(yellow(filename));

fs.readdir(__dirname, (err, data) =>{
  if(err){
    console.log(red('ERROR!'));
  }
console.log(data);
})

console.log(yellow('Hello!'));
