const { Subject } = rxjs;

const subject = new Subject();

subject.subscribe({
    next: (v) => console.log(`observerA: ${v}`)
});
subject.subscribe({
    next: (v) => console.log(`observerB: ${v}`)
});
subject.subscribe({
    next: (v) => console.log(`observerc: ${v}`)
});

subject.next(1);
subject.next(2);
subject.next("darwin");

// La salida por console:
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2