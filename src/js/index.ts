import UserEntity from './user.entity';
import Backpack from './backpack';
// export an array
export const months: string[] = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
export class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// interface Backpack<Type> {
//   add: (obj: Type) => void;
//   get: () => Type;
// }
// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;
backpack.get = () => 'obj';
backpack.add = (obj: string) => { console.log(obj) };

// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();
// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add('124');

export default object;
