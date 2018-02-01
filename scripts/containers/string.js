{
    // let _name = "\u20BB";
    // console.log(_name);
    // let _name_ano = "\u20bb7";
    // console.log(_name_ano);
    // let _name = "\u{20bb7}";
    // console.log(_name);
    // console.log("\u{41}", "\u{42}", "\u{43}");
    // let _name = "\u{20bb7}";
    // console.log(_name.charAt(0));
    // console.log(_name.charAt(1));
    // console.log(_name.charCodeAt(0));
    // console.log(_name.charCodeAt(1));
    // console.log(_name.charCodeAt(0).toString(16));
    // console.log(_name.charCodeAt(1).toString(16));
    // console.log(_name.codePointAt(0));
    // console.log(_name.codePointAt(1));
    // console.log(_name.codePointAt(0).toString(16));
    // console.log(_name.codePointAt(1).toString(16));
    // let _name = "\u{20bb7}a";
    // console.log(_name.codePointAt(0).toString(16));
    // console.log(_name.codePointAt(1).toString(16));
    // console.log(_name.codePointAt(2).toString(16));
    // let _name = "\u{20bb7}a";
    // for (let ch of _name) {
    //     console.log(ch.codePointAt(0).toString(16));
    // }
    // let code = 0x20bb7;
    // console.log(String.fromCharCode(code));
    // console.log(String.fromCodePoint(code));
    // let codePoint = String.fromCodePoint(0x20bb7);
    // for (let i = 0; i < codePoint.length; i++) {
    //     console.log(codePoint[i]);
    // }
    // for (let codePointItem of codePoint) {
    //     console.log(codePointItem);
    // console.log(codePointItem.codePointAt(0).toString(16));
    // }
    // let _name = "\u{20bb7}";
    // console.log(_name.at(0));
    // console.log(_name.at(0));
    //includes,startsWith,endsWith
    // let sayHello = "hello world";
    // console.log(sayHello.startsWith("hello"));
    // console.log(sayHello.endsWith("world"));
    // console.log(sayHello.includes("e"));
    // console.log(sayHello.startsWith("world", 6));
    // console.log(sayHello.endsWith("hello", 5));
    // console.log(sayHello.includes("e", 6));
    // let sayHelloAgain = sayHello.repeat(2);
    // console.log(sayHelloAgain);
    // let sayHello = "he";
    // console.log(sayHello.repeat(2.8));
    // console.log(sayHello.repeat(-1));
    // console.log(sayHello.repeat("hehe"));
    // console.log(sayHello.repeat("- 1,9"));
    // console.log(sayHello.repeat("3.9"));
    // console.log(sayHello.repeat(true));
    // console.log(sayHello.repeat(undefined));
    // console.log(sayHello.repeat(null));
    // let x = 'ab';
    // let x_expand = x.padStart(5, 'ab');
    // let x_expand = x.padEnd(5, 'ab');
    // let x_expand = x.padStart(5);
    // let x_expand = x.padEnd(5);
    // let x_expand = x.padStart(2, 'x');
    // let x_expand = x.padEnd(2, 'x');
    // let x_expand = x.padStart(5, 'abcdefghijklmnopqostuvwxyz');
    // let x_expand = x.padEnd(5, 'abcefghijklmnopqrstuvwxyz');
    // console.log(x_expand);
    // let x = 3,
    //     y = 8;
    // let string = `${x} + ${y} = ${x + y}`;
    // console.log(string);
    // let x = 3,
    //     y = 8;
    // let string = `\`${x}\` + \`${y}\` = ${x + y}`;
    // console.log(string);
    // let str = 'return ' + '`Hello ${name}`';
    // let func = new Function("name", str);
    // let myName = func("Gary");
    // console.log(myName);
    // console.log(`Hello ${'World'}`);
    let str = '(name) => ' + '`Hi ${name}`';
    let sayHello = eval.call(null, str);
    console.log(sayHello('Gary'));
    // console.log(`Hi ${names}`);
    // function sayName() {
    //     return `Gary Yin`;
    // }
    // console.log(`Hi ${sayName()}`);
    // alert`123`
    // let name = "Gary",
    //     age = 24,
    //     hobby = "computer games";
    // let sayPerson = `Hello ${name}, I'm ${age} year's old, I love ${hobby}`;
    // function tag(s, v1, v2, v3) {
    //     return v1 + s[1] + s[0] + v2 + s[2] + v3;
    // }
    // let sayPersonNewVersion = tag`Hello ${name}, I'm ${age} year's old, I love ${hobby}`;
    // console.log(sayPersonNewVersion);
    // let sayHello = "hello\nGary";
    // console.log(sayHello);
    // let sayHelloByRaw = String.raw`hello\nGary`;
    // console.log(sayHelloByRaw);
    // let template = `
    //     <ul>
    //         <% for(let i = 0; i < data.supplies.length; i ++) { %>
    //             <li>
    //                 <%= data.supplies[i] %>
    //             </li>
    //         <% } %>
    //     </ul>`;
    //
    // function compile(template) {
    //     let exprExpr = /<%=(.+?)%>/g,
    //         expr = /<%([\s\S]+?)%>/g;
    //     template = template.replace(exprExpr, '"); \n echo($1); \n echo("').replace(expr, '"); \n $1 \n echo("');
    //     console.log(template);
    //     template = 'echo("'+template+'")';
    //     let script = `(function (data) {
    //            let output = '';
    //            function echo(html){
    //             output += html;
    //            }
    //            ${template}
    //            return output;
    //     })`;
    //     return script;
    // }
    // let parse = eval(compile(template));
    // document.body.innerHTML = parse({supplies:["boom", "map", "eval"]});
    // console.log(String.raw({raw: 'test'}, 0, 1, 2, 3));
}