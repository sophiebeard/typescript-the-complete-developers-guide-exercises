"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
// Numbers
const numbersCollection = new NumbersCollection_1.NumbersCollection([1000, 31, -3, 10]);
numbersCollection.sort();
console.log(numbersCollection.data);
// Characters
const charactersCollection = new CharactersCollection_1.CharactersCollection('Sophie');
charactersCollection.sort();
console.log(charactersCollection.data);
// Linked List
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(5);
linkedList.sort();
linkedList.print();
