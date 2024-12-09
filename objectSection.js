const _ = require("lodash");
const data = { item: { detail: { reference: { id: "123" } } } };

const ref = data.item.detail.reference;

ref.name = "Prabowo Sakti";

console.log(data.item.detail.reference);

const object = { id: 1, name: "Prabowo Sakti" };
const objectCopy = { ...object };
object.name = "Ngopi";
console.log(object);
console.log(objectCopy);

const data = [{ a: 1 }, { b: 2 }];

const deepCopy = _.cloneDeep(data);

deepCopy[0].a = 3;
console.log(data[0].a);
console.log(deepCopy[0].a);

const dst = { quux: 0 };
const src1 = { foo: 1, bar: 2 };
const src2 = { foo: 3, baz: 4 };

Object.assign(dst, src1, src2);
console.log(dst);

const name = "jane";
const age = 22;
const data = { item: "lorem ipsum", staus: "ok" };

const users = {
  name: name,
  data: data,
};

const userInfo = { name, age, data };
const { item, status } = data;

console.log(userInfo);
