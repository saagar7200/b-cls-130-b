// // x = ''
// // console.log(x)
var id = '';
var orderStatus = 'canceled';
// type IPerson = {
//     name:string,
//     age:number,
//     address:string
// }
// let person:IPerson = {
//     name:'',
//     age:10,
//     address:'',
// }
// enum 
var Role;
(function (Role) {
    Role["USER"] = "USER";
    Role["ADMIN"] = "ADMIN";
    Role["SUPER_ADMIN"] = "SUPER_ADMIN";
})(Role || (Role = {}));
console.log(Role.ADMIN);
// function
function greet(name) {
    console.log('hello ', name);
}
greet("12");
// add(a,b)
// const add = (a:number,b:number):number =>{
//     return a + b
// }
// add(1,12)
// generic
var wrapper = function (value) {
    if (Array.isArray(value)) {
        return value;
    }
    else {
        return [value];
    }
};
wrapper({});
wrapper(10);
var bucket1 = {
    value: 10
};
var bucket2 = {
    value: '10'
};
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    return Box;
}());
var box = new Box('nsjd');
console.log(box);
