const { readFile, writeFile } = require('node:fs');

console.log('start');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    } else {
        const first = result
        readFile('./content/second.txt', 'utf8', (err, result) => {
            if (err) {
                console.log(err);
                return
            } else {
                const second = result;
                writeFile('./content/result-sync.txt', `Here is the result: ${first} and ${second}`, (err, result) => {
                    if (err) {
                        console.log(err);
                        return
                    } else {
                        console.log('done with this task ');
                    }
                })
            }
        })
    }
})

console.log('starting next task');