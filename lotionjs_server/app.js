// let lotion = require('lotion');
// let genesis = require.resolve('./genesis.json');
// let lotionPort = 3000;
// let config = require('./config.js');
// let dev = process.env.DEV || false;
//
// let opts = {
//     lotionPort: lotionPort,
//     p2pPort: 46656,
//     tendermintPort: 46657,
//     initialState: {
//         count: 0
//     }
// };
// if (dev) {
//     opts.devMode = true;
// } else {
//     opts.keys = 'priv_validator.json';
//     opts.peers = config.peers.map((addr) => `${addr}:46656`);
//     //opts.genesis = genesis;
// }
//
// let app = lotion(opts);
//
// app.use(function(state, tx) {
//   if (state.count === tx.nonce) {
//     state.count++;
//     console.log("-=-=-=-=-=-=-=-=-=-=-=-=-");
//     console.log(state);
//   }
// })
//
// app.start().then(genesis => {
//   console.log(genesis);
// });


let lotion = require('lotion');

let app = lotion({
    initialState: {
        count: 0
    }
});

app.use(function(state, tx) {
    if (state.count === tx.nonce) {
        state.count++;
        console.log("-=-=-=-=-=-=-=-=-=-=-=-=-");
        console.log(state);
    }
});

app.start().then(genesis => {
  console.log(genesis);
});
