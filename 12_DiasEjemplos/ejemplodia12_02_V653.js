// importaciones
const { ReplaySubject } = rxjs;
const subject = new ReplaySubject(100, 500 /* windowTime */);

subject.subscribe({
  next: v => console.log(`observerA: ${v}`)
});

let i = 1;
setInterval(() => subject.next(i++), 200);

setTimeout(() => {
  subject.subscribe({
    next: v => console.log(`observer.......B: ${v}`)
  });
}, 1000);
