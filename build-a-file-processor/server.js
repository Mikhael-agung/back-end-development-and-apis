const fs = require('fs');
const fsPromises = require('fs/promises');

async function main(){
    const data = await fsPromises.readFile("assets/poem.txt", { encoding: 'utf-8' });
    console.log(data);
}

fs.writeFileSync('assets/output.txt', 'Hello, freeCodeCamp!');

fs.appendFileSync('assets/output.txt', '\nSecond Line')

const exists = fs.existsSync('assets/output.txt');
console.log(exists);

const entries = fs.readdirSync('assets');
console.log(entries);

const buf = Buffer.alloc('8, 0xff');
console.log(buf)

console.log(buf.toString('hex'));
console.log(buf.toString('base64'))



main();