// importaciones
const { BehaviorSubject } = rxjs;

const subject = new BehaviorSubject(0); // 0 is the initial value
 
subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
 
subject.next(1);
subject.next(2);
subject.next(3); 

subject.subscribe({
  next: (v) => console.log(`observer.B: ${v}`)
});

subject.next(4);

subject.subscribe({
  next: (v) => console.log(`observer..C: ${v}`)
});
