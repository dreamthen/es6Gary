// {
//     let names = 'Gary';
//     var nameAno = 'Gary Yin';
// }
// console.log(nameAno);
// console.log(names);
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);
// for (var i = 0; i < 10; i++) {
//     setTimeout(function timer() {
//         console.log(i);
//     }, i * 1000);
// }
// for (let i = 0; i < 10; i++) {
//     setTimeout(function timer() {
//         console.log(i);
//     }, i * 1000);
// }
//let const 上升禁止 暂时性死区
// {
// console.log(names);
// var names = "Gary";
// console.log(nameLet);
// let nameLet = "GaryAno";
// console.log(names);
// let names = "Gary";
// function func(x = y, y = 4) {
//     console.log([x, y]);
// }
// func();
// let x = x;
// console.log(x);
// var a = "tmp";
// let a = "tmp_let";
// console.log(a);
//在同一个作用域中,禁止重复声明同一变量
// function sayNumber() {
// var a = 'a';
// let a = 'a_ano';
// console.log(a);
// console.log(a);
// let a = 'aaa';
// let a = 'a';
// let a = 'a_ano';
// console.log(a);
// }
// sayNumber();
// var number = 100;
// function sayNumber() {
//     console.log(number);
//     if (false) {
//         let number = 244;
//     }
// }
// sayNumber();
// {
//     let names = 'Gary';
//     {
//         let names = 'Gary Yin';
//         console.log(names);
//     }
//     console.log(names);
// }
// {
//     let names = 'Gary';
//     let names = 'Gary Yin';
//     console.log(names);
// }
// {
//     let a = 'aaa';
//     let a = 'aaa_ano';
//     console.log(a);
// }
// function f() {
//     console.log("I am in outside!");
// }
// (function () {
//     if (false) {
//         function f() {
//             console.log("I am in inside!");
//         }
//     }
//     f();
// })();
// if (true) {
//     function f_ano() {
//         console.log("world6");
//     }
// }
// f_ano();
// }
// do表达式
// let t_number = do {
//     let t = 2;
//     t = t * 25;
// };
// console.log(t_number);
// const MAX_NUMBER = 99;
// MAX_NUMBER = 100;
// console.log(MAX_NUMBER);
// const MAX_NUMBER = 100;
// {
//     const names = "Gary",
//         age = 24;
//     names = "Simon";
//     age = 25;
// }
// {
//     const obj = {
//         name: "Gary",
//         age: 26
//     };
//     obj["name"] = "Doris";
//     obj["age"] = 28;
//     obj = {
//         name: "Error",
//         age: [99, true, {sexy: "boy"}]
//     };
//     console.log(obj);
// }
// const arr = [99, false, "yinwk", {world: "come true"}];
// arr.push(66);
// arr[5] = [8, 6, 4, 2, 1];
// console.log(arr);
// arr = [66, true, "zhaoy", {name: "english"}];
// console.log(arr);
// const obj = {
//     name: "Gary",
//     age: 26
// };
// Object.freeze(obj);
// obj["name"] = "Doris";
// obj["age"] = 28;
// console.log(obj);
// function objFreeze(obj) {
//     Object.freeze(obj);
//     for (let key of Object.keys(obj)) {
//         if (typeof obj[key] === "object") {
//             objFreeze(obj[key]);
//         }
//     }
// }
// const obj = {
//     name: "Gary",
//     age: 26
// };
// objFreeze(obj);
// obj.name = "Doris";
// obj.age = 27;
// console.log(obj);
// window.a = 22;
// console.log(a);
// a = 55;
// console.log(window.a);
// let a = 22;
// console.log(window.a);
// window.a = 44;
// console.log(a);
// function getGlobal() {
//     if (self !== undefined) {
//         return self;
//     }
//     if (global !== undefined) {
//         return global;
//     }
//     if (window !== undefined) {
//         return window;
//     }
//     return new Error("there has no locate global object~");
// }
// const global = getGlobal();
// console.log(global);
// import getGlobal from "system.global";
// const global = getGlobal();
// console.log(global);
// {
//     var name = "Gary";
//     let name_ano = "Gary_Ano";
// }
// console.log(name);
// console.log(name_ano);
// for (var i = 0; i < 11; i++) {
//     console.log(i);
// }
// console.log(i);
// for (let i = 0; i < 11; i++) {
//     console.log(i);
// }
// console.log(i);
// for (var i = 0; i < 10; i++) {
//     setTimeout(function timer() {
//         console.log(i);
//     }, i * 1000);
// }
// for (let i = 0; i < 10; i++) {
//     setTimeout(function timer() {
//         console.log(i);
//     }, i * 1000);
// }
// for (var i = 0; i < 10; i++) {
//     setTimeout((function timer(i) {
//         return function () {
//             console.log(i);
//         }
//     })(i), i * 1000);
// }
// 防止变量上升,暂时性死区
{
    // console.log(names);
    // var names = "Gary";
    // console.log(names);
    // let names = "Gary";
    // function func(y = x, x = 2) {
    //     var arr = [x, y];
    //     console.log(arr);
    // }
    // func();
    // let x = x;
    // x = 2;
    // console.log(x);
}
//同一作用域中禁止声明相同的变量
// {
// var a = "aaa";
// var a = "aaa_ano";
// console.log(a);
// var a = "aaa";
// let a = "aaa_ano";
// console.log(a);
// let a = "aaa";
// let a = "aaa_ano"
// console.log(a);

// }
// function sameOrigin() {
//     {
//         var a = "aaa";
//         let a = "aaa_ano";
//         console.log(a);
//     }
// }
// function sameOrigin() {
//     var a = "aaa";
//     let a = "aaa_ano";
//     console.log(a);
// }
// function sameOrigin() {
//     let a = "aaa";
//     let a = "aaa_ano";
//     console.log(a);
// }
// sameOrigin();
// 块级作用域中声明函数,在块级作用域中声明函数,相当于是let进行声明
// {
//     function f() {
//         console.log("I am in outside");
//     }
//     if (false) {
//         function f() {
//             console.log("I am in inside");
//         }
//     }
//     f();
// }
// function f() {
//     console.log("I am in outside");
// }
// {
//     if (true) {
//         function f() {
//             console.log("I am in inside");
//         }
//     }
//     f();
// }
// if (true) {
//     function f() {
//         console.log("I am in inside");
//     }
// }
// f();
// do表达式
// let t_number = do {
//     let t = 3;
//     t = t + 366;
// };
// console.log(t_number);
// const MAX_NUMBER = 77;
// MAX_NUMBER = 99;
// const 禁止上升,暂时性死区
// {
//     console.log(MAX_NUMBER);
//     const MAX_NUMBER = 96;
// }
// 禁止在同一作用域内重复声明变量
// {
//     const world = "world",
//         comeTrue = "comeTrue";
//     const world = "worldMiao",
//         comeTrue = "comeTrue again";
// }
// {
//     window.a = "aaa";
//     console.log(a);
//     a = "aaa_ano";
//     console.log(window.a);
// }
// {
//     let a = "aaa";
//     window.a = "aaa_ano";
//     console.log(a);
//     window.a = "bbb";
//     console.log(a);
// }
// function getGlobal() {
//     if (self !== undefined) {
//         return self;
//     }
//     if (global !== undefined) {
//         return global;
//     }
//     if (window !== undefined) {
//         return window;
//     }
//     return new Error("There has no locate global object~");
// }
// let global = getGlobal();
// console.log(global);
// import getGlobal from "system.global";
// let global = getGlobal();
// console.log(global);