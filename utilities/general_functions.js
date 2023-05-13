const fs = require('fs')
module.exports = {
    getDataFile(fileName){
        const data = fs.readFileSync(`${__dirname}/../data/${fileName}.json`,{ encoding: 'utf-8' });
        return JSON.parse(data);
    },
    getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)]
    }
}