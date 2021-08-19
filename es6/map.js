let map = new Map();

map.set('name', 'kolor');
map.set('age', 18)

console.log(map);
console.log(map.size);

console.log(map.has('name'));
console.log(map.get('name'));

console.log(map.has('age'));
console.log(map.get('age'));

map.delete('name')
console.log(map.has('name'));
console.log(map.get('name'));
console.log(map.size);


map.clear()
console.log(map.has('age'));
console.log(map.get('age'));
console.log(map.size);

let key = { age: 19 }
let map1 = new Map([['name', 'wangyan'], ['sex', '女'], [key, '这是一段神奇的爱情故事']])



let weakMap = new WeakMap()
weakMap.set(key, 'koloe')
console.log(weakMap);
key = null

console.log(weakMap.has(key));

console.log(map1.has(key));
