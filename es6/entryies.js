let colors = ['red', 'blue', 'pink']
let set = new Set([1,25,54,65])
let map = new Map([['name', 'balance'], ['age', 18]])

for (const entry of colors.entries()) {
  console.log(entry);
}

for (const entry of set.entries()) {
  console.log(entry);
}

for (const entry of map.entries()) {
  console.log(entry);
}

console.log('---------------------------------');

for (const value of colors.values()) {
  console.log(value);
}

for (const value of set.values()) {
  console.log(value);
}

for (const value of map.values()) {
  console.log(value);
}

console.log('---------------------------------');


for (const key of colors.keys()) {
  console.log(key);
}

for (const key of set.keys()) {
  console.log(key);
}

for (const key of map.keys()) {
  console.log(key);
}

console.log('---------------------------------');

for (const key in colors) {
  console.log(key);
}

console.log('---------------------------------');

for (const [key, value] of map) {
  console.log(key, value);
}

const str = 'siri  真的没有办法了吗 '
for (let index = 0; index < str.length; index++) {
  const element = str[index];
  console.log(element);
}