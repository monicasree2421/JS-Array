
// function validateEmail() {
//     let email = document.getElementById('email').value;
//     const emailPattern = /^[a-zA-Z0-9._]+\@[a-z]+\.[a-z]/;
//     if (email.match(emailPattern)) {
//        alert('Email is valid');
//     } else {
//        alert('Please enter a valid email address');

//     }
// }

// const n=[1,2,3,4,5,6];
// n.forEach(function(num){
//     console.log(n);
// });

// const fruit=['apple','banana','grapes','orange'];
// fruit.forEach(function(fruits,index){
//     console.log(index+':'+fruits);
// });

// const n=[1,2,3,4,5,6];
// const d=n.map(function(num){
//     return num*2;
// });
// console.log(d);

// const n=[1,2,3,4,5,6];
// const d=n.map(num=>num*2);
// console.log(d);

// let map=new Map();
// map.set('name','Angel');
// map.set('age',21);
// map.set(true,'booean key');
// map.delete('age');
// console.log(map.has('age'));
// console.log(map.size);

// let arr=[1,1,2,3,4,5,6,6,6];
// let myset=new Set(arr);
// console.log(myset);

// let set=new Set();
// set.add(1);
// set.add(2);
// set.add('some text');
// set.add({a:1,b:2});
// set.delete({a:1,b:2});
// console.log(set.has({a:1,b:2}));

// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").hide();
// });
// });

// $(document).ready(function(){
//     $("button").click(function(){
//         $("#test").hide();
// });
// });

$(document).ready(function(){
    $("button").click(function(){
        $(".test").toggle();
});
});

// $(document).ready(function(){
//     $("button").click(function(){
//         $("*").hide();
// });
// });

// $(document).ready(function(){
//     $("button").click(function(){
//         $("button").hide();
// });
// });

// $(document).ready(function(){
//     $("button").click(function(){
//         $("button").hide();
// });
// });

// **Array Creation and Initialization**
let array1 = [1, 2, 3, 4, 5];
let array2 = [];
console.log(array1);


// **Array Manipulation**
let array3 = [1, 2, 3];
// Add Elements: Use push() and unshift()
array3.push(4); 
array3.unshift(0);
// Remove Elements: Use pop() and shift()
array3.pop();
array3.shift(); 
console.log(array3);

// **Array Searching**
let array4 = [1, 2, 3, 4, 5];
// Find an element using indexOf(), find(), or includes()
array4.indexOf(3); 
console.log(array4.find(element => element > 3)); // 4
array4.includes(4); 


// **Array Filtering**
let array5 = [1, 2, 3, 4, 5];
// Filter elements based on a condition using filter()
let filteredArray = array5.filter(element => element > 2); 
console.log(filteredArray);


// **Array Mapping**
let array = [1, 2, 3];
// Transform array elements using map()
let mappedArray = array.map(element => element * 2); 
console.log( mappedArray);
