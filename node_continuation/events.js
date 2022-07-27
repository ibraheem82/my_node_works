const EventEmitter = require('events');
const celebrity = new EventEmitter();

// * Subscribe to celebrity for Observer 1
// * we can have multiple events been listened to.
// celebrity.on('race win', () => {
//     console.log('Congratulations! You are the best!🥇 🙌');
// });



// // * Subscribe to celebrity for Observer 2
// celebrity.on('race win', () => {
//     console.log('WFT i could have done better than that!😞');
// });


// * After executing this stop the code
// * executed last.
// process.on('exit', (code) => {
//     console.log('Process exit event with code: ', code);
// })


// * Executed first
// celebrity.emit('race win');
// celebrity.emit('race lost');
// celebrity.emit('race win');


celebrity.on('race', (result) => {

    if (result === 'win') {
    console.log('Congratulations! You are the best!🥇 🙌');
        
    }
});




celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log('WFT i could have done better than that!😞');
    }
});

process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
})

celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');