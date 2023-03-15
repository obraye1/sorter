"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumberCollection_1 = require("./NumberCollection");
const CharacterCollection_1 = require("./CharacterCollection");
const LinkedList_1 = require("./LinkedList");
// CharacterCollection
const characterCollection = new CharacterCollection_1.CharacterCollection('frtejhj');
characterCollection.sort();
console.log(characterCollection.data);
//NumberCOllection
const numberCollection = new NumberCollection_1.NumberCollection([5, 231, 1, 12, -3, -2, -34, 7]);
numberCollection.sort();
console.log(numberCollection.data);
//Linked::list
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(859);
linkedList.add(35);
linkedList.add(19);
linkedList.add(1);
linkedList.add(-5);
linkedList.add(9);
linkedList.sort();
linkedList.print();
