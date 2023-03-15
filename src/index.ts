import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

// CharacterCollection

const characterCollection = new CharacterCollection('frtejhj');
characterCollection.sort();
console.log(characterCollection.data);

//NumberCOllection

const numberCollection = new NumberCollection([5, 231, 1, 12, -3, -2, -34, 7]);
numberCollection.sort();
console.log(numberCollection.data);

//Linked::list
const linkedList = new LinkedList();
linkedList.add(859);
linkedList.add(35);
linkedList.add(19);
linkedList.add(1);
linkedList.add(-5);
linkedList.add(9);

linkedList.sort();
linkedList.print();
