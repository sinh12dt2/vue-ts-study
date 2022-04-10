interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}
const backpack: Backpack<number> = {
  add: (obj: number) => {
    console.log(obj);
  },
  get: () => { return 123 }
}

console.log('backpack', backpack);

export default Backpack;
