//Number对象
var age = 10;
console.log(age);
console.log(typeof age);
var salary = new Number(2000);
console.log(salary);
console.log(typeof salary);


//常用函数
var num = 45.557;
console.log(num.toFixed(0));
console.log(typeof num.toFixed(0));


//String对象
var str1 = "abc";
console.log(str1);
console.log(typeof str1);
var str2 = new String("ABC");
console.log(str2);
console.log(typeof str2);


//常用属性和函数
console.log(str2.length);
console.log(str2.toLocaleUpperCase());
console.log(str2.charAt(1));

//Math对象
console.log(Math.sqrt(4));
console.log(Math.pow(2, 4));
console.log(Math.random());
console.log(Math.round(4.5));
console.log(Math.max(1, 2, 4, 5, 7, 8, 9));
console.log(Math.min(1, 2, 4, 5, 7, 8, 9));
console.log(Math.abs(-6));
console.log(Math.floor(4.5));
console.log(Math.ceil(4.2));

//随机生成1～10的整数
console.log(Math.ceil(Math.random() * 10));

//Date对象
var date = new Date();
console.log(date);
var date2 = new Date("2008/08/08 20:08:08");
console.log(date2);

console.log(date.getTime()); //距离1970元旦
console.log(date.getDate()); //17号  日期
console.log(date.getDay()); //2 星期
console.log(date.getFullYear()); //2019 年
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
date.setDate(25);
console.log(date.toLocaleString());


//Array对象
var arr1 = [10, "张三", true, {
    "name": "sz"
}]; //常用方式
var arr2 = new Array(10, "张三", true, );
var arr3 = new Array();
var arr4 = new Array(6);

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);


//二维数组
var a = [
    ["中国", "美国", "日本"],
    ["江苏", "纽约", "东京"],
    ["小红", "小白", "小日本"]
];

console.log(a[2][2]);


//常用属性和函数
console.log(a.length);

arr1.reverse();
console.log(arr1);

arr1.sort();
console.log(arr1);


var arr5 = [2, 43, 657, 98, 342, 211, 121, 5465];
arr5.sort();
console.log(arr5);

arr5.sort(function (a, b) {
    return a - b;
});
console.log(arr5);


//数组和字符串之间的转换
//数组-->字符串
console.log(arr5.toString());

//字符串-->转成数组
console.log("q,w,e,r,t,y,u".split(","));


//案例；
var str5 = "name=zs&age=20&hobby=sing";
var one = str5.split("&");
for (var i = 0; i < one.length; i++) {
    one[i] = one[i].split("=");
}
console.log(one);


var f1 = new Function("a", "b", "console.log" + "(a+b)");
f1(1, 2);


//RegExp对象
var reg1 = /a/g;
var reg2 = new RegExp("a","g");

console.log(/^abc/.test("abdc"));
console.log(/abc$/.test("dabc"));
console.log(/^abc{3}/.text("abccc"));