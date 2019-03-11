let { connect } = require('lotion');
const GCI  = '41d45f9ca7418ae5326a165f9e707a1302797f0b08baaa520fae094421d743de';
async function main(){
let { state, send } = await connect(GCI, {
  nodes: [ 'ws://10.0.80.62:40421' ]
});
  //let { state, send } = await connect(GCI);
  console.log(await state);   
  console.log(await send({ nonce: 1 }));
    console.log(await send({ nonce: 2 }));
    console.log(await send({ nonce: 3 }));
    console.log(await send({ nonce: 4 }));
    console.log(await send({ nonce: 5 }));
    console.log(await send({ nonce: 6 }));
    console.log(await send({ nonce: 7 }));
    console.log(await send({ nonce: 8 }));

}
main();