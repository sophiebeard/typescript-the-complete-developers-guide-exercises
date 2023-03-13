import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// Numbers
const numbersCollection = new NumbersCollection([1000, 31, -3, 10]);
numbersCollection.sort();
console.log(numbersCollection.data);

// Characters
const charactersCollection = new CharactersCollection('Sophie');
charactersCollection.sort();
console.log(charactersCollection.data);

// Linked List
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(5);

linkedList.sort();
linkedList.print();