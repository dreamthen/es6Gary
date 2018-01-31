// 数组解构赋值
// let [first, [second, [able]], third] = [99, [66, [24]], 77];
// console.log(able, first, second, third);
// let [number, , string, ...obj] = [99, true, "yinwk", {object: "have a object~"}, ["have a building"]];
// console.log(number, string, obj);
// let [, , , date, ...endArray] = [99, true, "yinwk", new Date(), {name: "yinwk"}, "no way"];
// console.log(date, endArray);
// let [, , , now, , , [numberOne, numberPort, numberPortAno = 9077], no_defined = "I am undefined~"] = [99, true, "yinwk", new Date(), {name: "yinwk"}, "no way", ["numberOne", 9066], "you are undefined~"];
// console.log(now, numberOne, numberPort, numberPortAno, no_defined);
//
// function* getStructure() {
//     let a = 0,
//         b = 1;
//     while (true) {
//         yield a;
//         [a, b] = [b, a + b];
//     }
// }
// let [firstOne, secondOne, thirdOne, fourth, fifth, sixth] = getStructure();
// console.log(firstOne, secondOne, thirdOne, fourth, fifth, sixth);
// let [x = 1, y = x] = [];
// console.log(x + y);
// let [x = 1, y = x] = [2];
// console.log(x + y);
// let [x = 1, y = x] = [, 2];
// console.log(x + y);
// let [x = 1, y = x] = [2, 1];
// console.log(x + y);
// let [x = y, y = 1] = [0];
// console.log(x + y);
// 对象解构赋值
// let {
//     foo: fooOne,
//     bar: barAno
// } = {foo: "foo", bar: "bar"};
// console.log(fooOne, barAno);
// let object = {
//     locate: {
//         src: {
//             noway: "noway husband",
//             p: "I am paragraph"
//         }
//     }
// };
// let {
//     locate: loc,
//     locate: {
//         src: srcObj
//     },
//     locate: {
//         src: {
//             noway,
//             p: paragraph,
//             row
//         }
//     }
// } = object;
// console.log(loc, srcObj, noway, paragraph, row);
// let obj = {
//     name: "yinwk",
//     age: 24,
//     sex: "boy"
// };
// let {
//     sex = "girl",
//     name: nameAno = "Gary",
//     age: age = 26
// } = obj;
// console.log(nameAno, age, sex);
// let x;
// ({x} = {x: 1});
// console.log(x);
// let arr = [99, true, "yinwk"];
// let {0: number, [arr["length"] - 1]: name} = arr;
// console.log(number, name);
// 字符串解构赋值
// let [w, o, r, l, d] = 'world';
// console.log(w, o, r, l, d);
// let {length: len} = 'worldss';
// console.log(len);
// 布尔值、数值解构赋值
// let {toString: n} = 100;
// console.log(Number.prototype.toString === n);
// let {toString: bool} = false;
// console.log(Boolean.prototype.toString === bool);
// undefined和null
// let {toString: u} = undefined;
// let {toString: n} = null;
// 函数参数解构赋值
// function func({x = 3, y = 8} = {}) {
//     console.log([x, y]);
// }
// func({x: 6});
// func({x: 4, y: 10});
// func({y: 7});
// func({});
// func();
// function funcBox({x, y} = {x: 3, y: 8}) {
//     console.log([x, y]);
// }
// funcBox({x: 7});
// funcBox({y: 2});
// funcBox({x: 4, y: 10});
// funcBox({});
// funcBox();
// console.log([[3, 6], [8, 10]].map(([a, b]) => a * b));
// 声明语句不可使用解构赋值
// 模态语句不可使用解构赋值
// 非声明语句的非模态可使用解构赋值
// let [word, boolean, sunshine] = new Set(["helloWorld", true, "sunShine"]);
// console.log(word, boolean, sunshine);
// 用途
// 值交换
// let x = 24,
//     y = 60;
// [x, y] = [y, x];
// console.log(x, y);
// 函数返回
// function func() {
//     return ["Gary", 24, "boy"];
// }
// let [name, age, sexy] = func();
// console.log(name, age, sexy);
// function func() {
//     return {username: "Gary", age: 28, sex: "iboy"};
// }
// let {username: name, age, sex: sexy} = func();
// console.log(name, age, sexy);
// function arr([x, y, z]) {
//     console.log(x, y, z);
// }
// arr(["numberX", "numberY", "numberZ"]);
// function obj({x, y, z, number}) {
//     console.log(x, y, z, number);
// }
// obj({z: 'z', number: 777, x: 'x', y: 'y'});
// let map = new Map();
// map.set({one: 'first'}, 'hello');
// map.set({tow: 'second'}, 'world');
// for (let [index, value] of map.entries()) {
//     console.log(`${JSON.stringify(index)} is ${value}`);
// }
// for (let [key] of map.entries()) {
//     console.log(JSON.stringify(key));
// }
// for (let [, value] of map.entries()) {
//     console.log(value);
// }