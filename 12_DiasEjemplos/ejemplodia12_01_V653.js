// importaciones
const { ReplaySubject, BehaviorSubject } = rxjs;

const subject = new ReplaySubject(6); // buffer 3 values for new subscribers

subject.subscribe({
  next: v => console.log(`observerA: ${v}`)
});

subject.next(1);

subject.subscribe({
  next: v => console.log(`observerB: ${v}`)
});

subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
  next: v => console.log(`observerC: ${v}`)
});

subject.next(5);
subject.next(6);
