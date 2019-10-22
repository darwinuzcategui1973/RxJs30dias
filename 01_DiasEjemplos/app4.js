/// Original tweet: https://twitter.com/deaniusol/status/1075780510545297408
// See also: https://runkit.com/deanius/5b3fbae6aca40100128855f9
const oboe = require('oboe');
const { Observable } = require('rxjs');
const { bufferCount, map, timestamp, toArray } = require('rxjs/operators');

//const url = 'http://www.mocky.io/v2/5b3fbf62340000c809001c6d?mocky-delay=1000ms'
//const url = 'https://jsonplaceholder.typicode.com/users/';
// Returns a github api over about 56 seconds in my estimation
const url = 'https://untitled-yd6fw62bsoo0.runkit.sh/';
//const url = 'http://localhost:3900/api/v0/productos/';

// Fire callbacks as each node
let start = Date.now();

const post$ = new Observable(client => {
  oboe(url) // for all indexes under this element
    .node('!items[*]', o => {
      client.next(o);
    })
    .done(function() {
      console.log(this);
      client.complete();
    })
    .fail(e => client.error(e));
});

let counter = 0;
let delta;
//await post$.pipe(

post$
  .pipe(
    bufferCount(5), // Batch to reduce noise
    timestamp(), // Timestamp and return only value to show elapsed
    map(({ timestamp, value }) => {
      delta = timestamp - start;
      //delta = nombre;
      console.log(`Got batch ${++counter} at ${delta}`);
      return value;
    }),
    toArray() // Get all batches as a single array
  )
  .toPromise() // Initiate the data-pull, which we await so it's displayed in console
  .then(all => {
    console.log(`Got ${all.length} batches over ${delta / 1000} seconds`);
    return all;
  });
