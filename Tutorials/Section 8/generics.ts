// NOTHING TO DO WITH GENERICS
const add = (a: number, b: number): number => {
  return a + b;
};
add(10, 1);
add(10, 2);
add(10, 3);

// GENERICS
class HoldAnything<T> {
  data: T;

  add(a: T): T {
    return a;
  }
}

const holdNumber = new HoldAnything<number>();
holdNumber.data = 123;
holdNumber.add(100);

const holdString = new HoldAnything<string>();
holdString.data = 'abcd';