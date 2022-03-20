const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')

// converting it to simple approach
const {readFile, writeFile} = require('fs').promises;

// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
const start = async ()=> {
    try {
        const first = await readFile('./content/first.txt', 'utf-8');
        const second = await readFile('./content/second.txt', 'utf-8');
        await writeFile('./content/new-file.txt', `combined file result is : ${first} ${second}`, {flag: 'a'});
    }
    catch (error){
        console.log(error);
    }
}
start();
// const getText = (path)=>{
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf-8', (err, data)=>{
//             if (err){
//                 reject(err);
//             }
//             else {
//                 resolve(data);
//             }
//         })
//     })
// }
// const start = async()=> {
//     try {
//         const first = await getText('./content/first.txt');
//         const second = await getText('./content/second.txt');
        
//     }
//     catch (error){
//         console.log(error);
//     }
    
// }
// start();
// console.log("I'm first");

// getText('./content/first.txt').then(result => console.log(result)).catch((err)=> console.log(err));


