const { Observable } = rxjs;

const observable = {
    next: x => console.log("el valor de x", x),
    error: err => console.log("el valos de err", err)
}
observable.subcribe(x => console.log("el valox next es", x));

observable.subcribe {
    x => console.log(x),
        err => console.log(err),
        () => console.log("completado")
}
/*
interface Observer<T> {
    closed?: boolean
    next: (value: T) => void
    error: (err: any) => void
    complete: () => void
  }
  */