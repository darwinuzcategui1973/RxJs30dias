const { Subject, from } = rxjs;

const subject = new Subject();

subject.subscribe({
    next: (v) => console.log(`observerA: ${v}`)
});
subject.subscribe({
    next: (v) => console.log(`observerB: ${v}`)
});

const observable = from([1, 2, 3, 6, "Darwin"]); // cree un observable

observable.subscribe(subject); // te puede  subscribe al Subject

// Logs:
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2
// observerA: 3
// observerB: 3