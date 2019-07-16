let data = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'age': 39,
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'age': 38,
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'age': 2,
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'age': 19,
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];
//task 0
function getNumbers(str) {
    let arr = str.split('');
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
//task 1
function findTypes() {
    let obj = {};
    for (let i = 0; i < arguments.length; i++) {
        let type = typeof arguments[i];
        obj.hasOwnProperty(type) ? obj[type]++ : obj[type] = 1;
    }
    return obj;
}
//task 2
function executeforEach(array,fun){
    for(let i = 0;i<array.length;i++){
        fun(array[i]);
    }
}
//task 3
function mapArray(array,fun) {
    let newArray =[];
    executeforEach(array,function(el){
        newArray.push(fun(el));
    });
    return newArray;
}
//task 4
function filterArray(array,fun) {
    let newArray =[];
    executeforEach(array,function(el) {
        if(fun(el)){
            newArray.push(el);
        }
    });
    return newArray;
}
//task 5
function showFormattedDate(date) {
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return 'Date: '+ month[date.getMonth()]+' '+ date.getDate() +' '+ date.getFullYear()
}
//task 6
function canConvertToDate(date) {
    return !isNaN(Date.parse(date));
}
//task 7
function daysBetween(date1, date2) {
    let milliseconds = 1000;
    let seconds = 60;
    let minutes = 60;
    let hours = 24;
    return Math.round(Math.abs(date2 - date1) / (milliseconds * seconds * minutes * hours));
}
//task 8
function getAmountOfAdultPeople(data) {
    let people = 0;
    let minAge = 18;
    filterArray(data,function(el) {
        if(el.age > minAge){
            people++
        }
    });
    return people;
}
//task 9
function keys(obj) {
    let newObj = [];
    for (let key in obj){
        if(obj.hasOwnProperty(key)){
           newObj.push(key);
        }
    }
    return newObj;
}
//task 10
function values(obj) {
    let newObj = [];
    for (let key in obj){
        if(obj.hasOwnProperty(key)){
           newObj.push(obj[key]);
        }   
    }
    return newObj;
}
